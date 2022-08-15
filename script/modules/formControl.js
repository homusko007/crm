import { addGoodsPage, addGoodstData, addTotalPage} from "./addInfo.js";

export const formControl = (form, closeModal, tableBody) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newGood = Object.fromEntries(formData);
    newGood['id'] = document.querySelector('.vendor-code__id').textContent;

    addGoodsPage(newGood, tableBody);
    addGoodstData(newGood);
    form.reset();
    closeModal();
    addTotalPage();
  });
};
