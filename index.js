'use strict';

const classDelete = document.querySelector('.overlay');
classDelete.classList.toggle('active');

const goods = [
    {
      "num": 1,
      "id": 1111111111111111,
      "title": "Смартфон Xiaomi 11T 8/128GB",
      "category": "mobile-phone",
      "units": "шт",
      "price": 27000,
      "count": 3,
      "total": 0,
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      }
    },
    {
      "num": 2,
      "id": 2222222222222,
      "title": "Радиоуправляемый автомобиль Cheetan",
      "category": "toys",
      "units": "шт",
      "price": 4000,
      "count": 1,
      "total": 0,
      "images": {
        "small": "img/cheetancar-m.jpg",
        "big": "img/cheetancar-b.jpg"
      }
    },
    {
      "num": 3,
      "id": 33333333333333,
      "title": "ТВ приставка MECOOL KI",
      "category": "tv-box",
      "units": "шт",
      "price": 12400,
      "count": 4,
      "total": 0,
      "images": {
        "small": "img/tvboxmecool-m.jpg",
        "big": "img/tvboxmecool-b.jpg"
      }
    },
    {
      "num": 4,
      "id": 44444444444444,
      "title": "Витая пара PROConnect 01-0043-3-25",
      "category": "cables",
      "units": "v",
      "price": 22,
      "count": 420,
      "total": 0,
      "images": {
        "small": "img/lan_proconnect43-3-25.jpg",
        "big": "img/lan_proconnect43-3-25-b.jpg"
      }
    },
   
]

const tableBody = document.querySelector('tbody')
const lastNum = document.querySelector('tbody').lastElementChild.firstElementChild.textContent;

const createRow = (obj) => {
const tr = document.createElement('tr')

const td_1 = document.createElement('td');
td_1.className = 'table__cell';
td_1.textContent = obj.num + Number(lastNum);
tr.appendChild(td_1);

const td_2 = document.createElement('td');
td_2.classList.add('table__cell','table__cell_left','table__cell_name');
const id = obj.id;
td_2.setAttribute('data-id', id);
const span = document.createElement('span');
span.classList.add('table__cell-id');
const spanText = `id: ${id}`;
span.insertAdjacentText('afterbegin', spanText)
td_2.appendChild(span);
const productName = obj.title;
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
td_5.textContent = obj.price;
tr.appendChild(td_5)

const td_6 = document.createElement('td');
td_6.className = 'table__cell';
td_6.textContent = obj.count;
tr.appendChild(td_6);

const td_7 = document.createElement('td');
td_7.className = 'table__cell';
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
}

const renderGoods = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const row = createRow(arr[i]);
    tableBody.append(row);
  }
}


renderGoods(goods);
