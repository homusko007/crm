import { createRow } from "./renderGoods.js";

export const addTotalPage = (tableBody) => {
  const allRow = tableBody.querySelectorAll('tr');
  let sum = 0;
  allRow.forEach(el => {
    sum += Number(el.childNodes[6].innerHTML.slice(1));
  });
  const tableTotal = document.querySelector('.crm__total-price');
  tableTotal.textContent = `$${sum}`;
};

export const addGoodsPage = (item, tableBody) => {
  const lastRow = tableBody.lastElementChild;
  const lastNum = Number(lastRow.firstElementChild.textContent);
  tableBody.append(createRow(item, lastNum));
};