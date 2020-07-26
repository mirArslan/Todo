import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
//import store from './reducers/createStore';
import TodoList from './components/index';
import {Link, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <h1>TODO Manager</h1>
          <Link to="index">Home</Link>
          <Link to="add">Add</Link>
          <br />
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/index" exact component={TodoList}></Route>
          <Route path="/add" exact component={AddTodo}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
