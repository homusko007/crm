import { renderGoods } from "./modules/createElement.js";
import { addTotalPage } from "./modules/addInfo.js";
import { formControl } from "./modules/formControl.js";
import { formSetting } from "./modules/formSetting.js";
import { modalControl } from "./modules/modalControl.js";

const init = (arr) => {
const tableBody = document.querySelector('tbody');
const modalWindow = document.querySelector('.overlay');
const btnAdd = document.querySelector('.panel__add-goods');
const form = document.querySelector('.modal__form');


  renderGoods(arr, tableBody);
  const { closeModal } = modalControl(btnAdd, modalWindow);
  formSetting(form); 
  formControl(form, closeModal, tableBody);
  addTotalPage(tableBody);
};


init(goods);
