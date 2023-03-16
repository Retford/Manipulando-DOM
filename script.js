const btnCreate = document.querySelector('[data-form-btn]');

(() => {
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
    // task.appendChild(trashDelete());
    // const content = `
    // <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    listTask.appendChild(task);
  };

  btnCreate.addEventListener('click', createTask);

  const checkComplete = () => {
    const iconCheck = document.createElement('i');
    iconCheck.classList.add('far', 'fa-check-square', 'icon');
    iconCheck.addEventListener('click', completeTask);
    return iconCheck;
  };

  const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  };
})();

// const trashDelete = () => {
//   const iconTrash = document.createElement('i');
//   iconTrash.classList.add('fas');
//   iconTrash.classList.add('fa-trash-alt');
//   iconTrash.classList.add('trashIcon');
//   iconTrash.classList.add('icon');
//   return iconTrash;
// };
