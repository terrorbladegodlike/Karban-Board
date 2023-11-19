import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { HashRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(initialState);
  }, [setTasks]);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} setTasks={setTasks} />
    </Router>
  );
}

export default App;
