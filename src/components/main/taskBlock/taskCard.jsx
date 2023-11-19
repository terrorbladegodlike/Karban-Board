import React, { useState, useRef } from 'react';
import './tasks.css';
import { Link, useLocation } from 'react-router-dom';

function TaskCard(props) {
  const { type, tasks, setTasks, createNewTask, prevTaskList } = props;
  const location = useLocation();
  const [active, setActive] = useState(false);
  const inputValueRef = useRef(null);

  const ButtonAdd = (
    <button className = 'task__btn-add'
      disabled = { prevTaskList.length || props.title === 'Backlog' ? false : true }
      onClick = {() => {
        setActive(true);
      }}
    >+Add card
    </button>
  );

  function TaskBlockAction() {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValueRef.current.value.trim()) {
        createNewTask(inputValueRef.current.value);
      }
      setActive(false);
    };

    const statusChange = (e, status) => {
      const tasksList = JSON.parse(window.localStorage.getItem('tasks'));
      const tasksCopy = tasksList.map((task) => {
        if (task.id === e.target.value) {
          task.status = status;
        }
        return task;
      });
      setTasks(tasksCopy);
      setActive(false);
    };

    if (type === 'backlog') {
      return (
        <form className = 'task__form' 
          onSubmit = { handleSubmit }>
          <input className = 'task__input'
            type = 'text'
            id = 'title'
            ref = { inputValueRef }
          />
          <button className = 'task__btn-submit'
          type = 'submit'>
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <select className = 'task__select'
          onChange = {(e) => statusChange(e, type)}>
          <option value = { 'default' }></option>
          {prevTaskList.map((task) => {
            return (
              <option key = { task.id } value = { task.id }>
                { task.title }
              </option>
            );
          })}
        </select>
      );
    }
  }

  return (
    <div className = 'task'>
      <h2 className = 'task__title'>{ props.title }</h2>
      <ul className = 'task__list'>
        { tasks.length ? (
          tasks.map((task) => (
            <li className = 'task__item'
             key = { task.id }>
              <Link className = 'task__link'
                to = { `/tasks/${task.id}` }
                state = { { background: location } }
              >{ task.title }
              </Link>
            </li>
          ))
        ) : (
          null
        )}
      </ul>
      { !active ? ButtonAdd : <TaskBlockAction /> }
    </div>
  );
}

export default TaskCard;
