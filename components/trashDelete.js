const trashDelete = () => {
  const iconTrash = document.createElement('i');
  iconTrash.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  iconTrash.addEventListener('click', removeTask);
  return iconTrash;
};

const removeTask = (e) => {
  const element = e.target.parentElement;
  element.remove();
};

export default trashDelete;