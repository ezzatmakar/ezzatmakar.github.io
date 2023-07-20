// src/App.js
import React from 'react';
import SendRequests from './sms/SendRequests';
import  './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Fuck Ayman Endpoints</h1>
            </header>
            <main>
                <SendRequests />
            </main>
        </div>
    );
}

export default App;
