import checkComplete from './components/checkComplete.js';
import trashDelete from './components/trashDelete.js';

const btnCreate = document.querySelector('[data-form-btn]');

const createTask = (e) => {
  e.preventDefault();
  const inputTask = document.querySelector('[data-form-input]');
  const inputValue = inputTask.value;
  const listTask = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  inputTask.value = '';
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = inputValue;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(trashDelete());
  listTask.appendChild(task);
};

btnCreate.addEventListener('click', createTask);
