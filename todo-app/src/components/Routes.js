import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';

import TodoApp from './todoapp';

function RouterCmp() {
    return (
        <div className="App">
            
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/todoApp" element={<TodoApp />} />
                <Route path="/" element={<Signup />} /> {/* Default route */}
            </Routes>
        </div>
    );
}
export default RouterCmp;