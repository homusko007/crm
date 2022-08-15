export const modalControl = (btnAdd, modalWindow) => {
  const openModal = () => {
    modalWindow.classList.add('active');
    const modalId = document.querySelector('.vendor-code__id');
    modalId.textContent = Math.round(Math.random() * (1e15 + 1));
  };

 const closeModal = () => {
    modalWindow.classList.remove('active');
  };

  btnAdd.addEventListener('click', openModal);

  modalWindow.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modalWindow ||
      target.closest('.modal__close')) {
      closeModal();
    }
  });
 return {
    closeModal,
  };
};