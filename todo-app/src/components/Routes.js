import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';

function RouterCmp() {
    return (
        <div className="App">
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<Signup />} /> {/* Default route */}
            </Routes>
        </div>
    );
}
export default RouterCmp;