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

export default checkComplete;
