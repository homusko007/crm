import { loadGoods, fetchRequest } from "./modules/renderGoods.js";
import { formSetting } from "./modules/formSetting.js";
import { modalControl } from "./modules/modalControl.js";
import { deleteGoods } from "./modules/deleteGoods.js";
import { getImg } from "./modules/showImg.js";
import {searchGoods} from "./modules/searchGoods.js";
import {loadCategory} from "./modules/addCategory.js"; 


const init = () => {
const tableBody = document.querySelector('tbody');
const modalWindow = document.querySelector('.overlay');
const btnAdd = document.querySelector('.panel__add-goods');
const form = document.querySelector('.modal__form');

  loadGoods();
  deleteGoods(tableBody);
  getImg(tableBody);
  searchGoods();
  loadCategory();
  const { closeModal, openModal } = modalControl(btnAdd, modalWindow, form, tableBody);
  formSetting(form); 
};

init();
