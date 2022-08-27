import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToDos from './ToDos';
import TodosReducer from './TodosReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodosReducer/>
);
