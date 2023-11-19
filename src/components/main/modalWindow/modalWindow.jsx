import React, { useState } from 'react';
import './modalWindow.css';
import { useNavigate, useParams } from 'react-router-dom';
import close from './close.svg';

function ModalWindow(props) {
  const { tasks, setTasks } = props;
  const { id } = useParams();
  const task = JSON.parse(window.localStorage.getItem('tasks')).find(
    (task) => task.id === id
  );

  const navigate = useNavigate();
  const [description, setDescription] = useState(
    task.description
  );

  const addDescription = () => {
    const tasksCopy = tasks.map((elem) => {
      if (elem.id === id) {
        elem.description = description;
      }
      return elem;
    });
    setTasks(tasksCopy);
  };

  return (
      <div className = 'modal'>
        <div className = 'modal__wrap'>
          <h2 className = 'modal__title'>{ task.title }</h2>
          <textarea placeholder = 'This task has no description'
            className = 'modal__text'
            onFocus = {() => {
              description === '' && setDescription('');
            }}
            onChange = {(e) => {
              setDescription(e.target.value);
            }}
            value = { description }
            onBlur = { addDescription }>
          </textarea>
          <button className = 'modal__btn'
           onClick = {() => navigate(-1)}>
            <img src = { close } alt = 'button close'/>
          </button>
        </div>
      </div>
  );
}

export default ModalWindow;