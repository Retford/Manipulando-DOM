const btnCreate = document.querySelector('[data-form-btn]');
const createTask = (e) => {
  e.preventDefault();
  const inputTask = document.querySelector('[data-form-input]');
  console.log(inputTask.value);
};

btnCreate.addEventListener('click', createTask);
