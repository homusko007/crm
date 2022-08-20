/*'use strict';

const addGoodstData = (item) => {
  goods.push(item);
  console.log('goods', goods);
};

const createRow = (obj, i) => {
  const tr = document.createElement('tr');

  const td_1 = document.createElement('td');
  td_1.classList.add('table__cell', 'table__cell_number');
  td_1.textContent = i + 1;
  tr.appendChild(td_1);

  const td_2 = document.createElement('td');
  td_2.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  const id = obj.id;
  td_2.setAttribute('data-id', id);
  const span = document.createElement('span');
  span.classList.add('table__cell-id');
  const spanText = `id: ${obj.id}`;
  span.insertAdjacentText('afterbegin', spanText)
  td_2.appendChild(span);
  const productName = obj.name;
  td_2.insertAdjacentText('beforeend', productName)
  tr.appendChild(td_2);

  const td_3 = document.createElement('td');
  td_3.classList.add('table__cell', 'table__cell_left');
  td_3.textContent = obj.category;
  tr.appendChild(td_3);

  const td_4 = document.createElement('td');
  td_4.className = 'table__cell';
  td_4.textContent = obj.units;
  tr.appendChild(td_4)

  const td_5 = document.createElement('td');
  td_5.className = 'table__cell';
  td_5.textContent = obj.count;
  tr.appendChild(td_5);

  const td_6 = document.createElement('td');
  td_6.className = 'table__cell';
  td_6.textContent = `$${obj.price}`;
  tr.appendChild(td_6)

  const td_7 = document.createElement('td');
  td_7.classList.add('table__cell', 'table__cell_totat');
  td_7.textContent = `$${obj.price * obj.count}`;
  tr.appendChild(td_7);

  const td_8 = document.createElement('td');
  td_8.classList.add('table__cell', 'table__cell_btn-wrapper');

  const btnPict = document.createElement('button');
  btnPict.classList.add('table__btn', 'table__btn_pic');
  td_8.appendChild(btnPict);

  const btnEdit = document.createElement('button');
  btnEdit.classList.add('table__btn', 'table__btn_edit');
  td_8.appendChild(btnEdit);

  const btnDel = document.createElement('button');
  btnDel.classList.add('table__btn', 'table__btn_del');
  td_8.appendChild(btnDel);
  tr.appendChild(td_8);

  return tr;
};

const addTotalPage = (arr) => {
   const allRow = tableBody.querySelectorAll('tr');
   let sum = 0;
  allRow.forEach(el => {
    sum += Number(el.childNodes[6].innerHTML.slice(1));
  });
  const tableTotal = document.querySelector('.crm__total-price');
  tableTotal.textContent = `$${sum}`;
};

const renderGoods = (arr, tableBody) => {
  for (let i = 0; i < arr.length; i++) {
    const index = i;
    const row = createRow(arr[i], index);
    tableBody.append(row);
    addTotalPage(tableBody);
  };

  tableBody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      const delRow = target.closest('tr');
      delRow.remove();
      const idRow = Number(delRow.children[1].getAttribute('data-id'));
      const i = arr.findIndex((el) => el.id === idRow);
      arr.splice(i, 1);
      console.log(arr);
    };
    addTotalPage(tableBody);
    const rowNumber = tableBody.querySelectorAll('.table__cell_number');
    for (let i = 0; i < rowNumber.length; i++) {
      rowNumber[i].textContent = `${i + 1}`
    }
  });
}

const modalControl = (btnAdd, modalWindow) => {
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

const formSetting = (form) => {
  const formCheckbox = form.discount;
  const discount = formCheckbox.nextElementSibling;
  formCheckbox.addEventListener('click', () => {
    if (formCheckbox.checked) {
      discount.removeAttribute('disabled');
    } else {
      discount.value = '';
      discount.setAttribute('disabled', 'disabled');
    };
  });

  const inputs = document.querySelectorAll('.modal__input');
  inputs.forEach(el => {
    el.setAttribute('required', 'required');
  });

  form.count.type = 'number';
  form.price.type = 'number';

  form.price.addEventListener('blur', e => {
    e.target.form.total.value = `$${form.count.value * form.price.value}`;
  });

  form.count.addEventListener('blur', e => {
    e.target.form.total.value = `$${form.count.value * form.price.value}`;
  });
};

const addGoodsPage = (item, tableBody) => {
  const lastRow = tableBody.lastElementChild;
  const lastNum = Number(lastRow.firstElementChild.textContent);
  tableBody.append(createRow(item, lastNum));
};

const formControl = (form, closeModal, tableBody) => {
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
};*/

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
