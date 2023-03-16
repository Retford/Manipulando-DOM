const btnCreate = document.querySelector('[data-form-btn]');
const createTask = (e) => {
  e.preventDefault();
  const inputTask = document.querySelector('[data-form-input]');
  const inputValue = inputTask.value;
  const listTask = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  inputTask.value = '';
  const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${inputValue}</span>
  </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  listTask.appendChild(task);
};

btnCreate.addEventListener('click', createTask);
