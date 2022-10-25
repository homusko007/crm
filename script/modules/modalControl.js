import {formControl} from "./formControl.js";
import {loadEditModal } from "./editGoods.js";

export const modalControl = (btnAdd, modalWindow, form, tableBody) => {
  const openModal = () => {
    modalWindow.classList.add('active');
    const modalId = document.querySelector('.vendor-code__id');
    modalId.textContent = Math.round(Math.random() * (1e10 + 1));
    };

  const closeModal = () => {
    modalWindow.classList.remove('active');
  };

  btnAdd.addEventListener('click', () => {
    openModal();
    formControl(form, closeModal, tableBody);
});

tableBody.addEventListener('click', e => {
  const target = e.target;
  
  if (target.closest('.table__btn_edit')) {
    const editRow = target.closest('tr');
    const idGood = Number(editRow.children[1].getAttribute('data-id'));
    let index = [...editRow.parentNode.children].indexOf(editRow);
    openModal();
    loadEditModal(idGood, closeModal, form, editRow, index);
  }
});


  modalWindow.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modalWindow ||
      target.closest('.modal__close')) {
      closeModal();
    }
  });
  return {
    closeModal,
    openModal
  };
};