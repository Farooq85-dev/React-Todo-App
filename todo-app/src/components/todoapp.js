import { useState } from "react";
import ButtonAppBar from "./MUInavbar";
import './main.scss';
import { Form } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineCheck, AiOutlineCloseCircle, AiTwotoneDelete, AiFillSignature } from "react-icons/ai";

function Todoapp() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const addTodo = () => {
        if (value.trim() === "") return; // Prevent adding empty tasks
        setTodos([...todos, { value, disabled: true }]);
        setValue("");
    };

    return (
        <>
            <ButtonAppBar />
            <div className="mainContainer" style={{ marginTop: "60px" }}>
                <div className="mainTodo">
                    <h1>Hy! Todos</h1>
                    <Form.Group className="mb-4" style={{ width: "100%" }} controlId="formBasicName">
                        <Form.Control
                            type="text"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            style={{ width: "100%" }}
                            placeholder="Enter Task Title"
                            className='tasksInputs topInput'
                            required
                        />
                        <button
                            onClick={addTodo}
                            className="tasksIcon"
                            disabled={value.trim() === ""}
                            style={{ cursor: value.trim() === "" ? "not-allowed" : "grab" }}
                        >
                            <AiOutlinePlus />
                        </button>
                        <AiTwotoneDelete onClick={() => setTodos([])} className="tasksIcon" />
                    </Form.Group>

                    <ul className="ul">
                        {todos.map((v, i) => (
                            <li className="listRendering" key={i}>
                                <Form.Group className="mb-4" style={{ width: "100%" }} controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        disabled={v.disabled}
                                        defaultValue={v.value}
                                        onChange={(e) => v.value = e.target.value}
                                        style={{ width: "100%" }}
                                        placeholder="Enter Task Title"
                                        className='tasksInputs'
                                    />
                                </Form.Group>
                                {v.disabled ?
                                    <AiFillSignature className="tasksIcon" onClick={() => {
                                        todos.splice(i, 1, { ...v, disabled: false });
                                        setTodos([...todos]);
                                    }} />
                                    :
                                    <AiOutlineCheck className="tasksIcon" onClick={() => {
                                        v.disabled = true;
                                        setTodos([...todos]);
                                    }} />
                                }
                                <AiOutlineCloseCircle className="tasksIcon" onClick={() => {
                                    const oldTodos = [...todos];
                                    oldTodos.splice(i, 1);
                                    setTodos(oldTodos);
                                }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todoapp;
