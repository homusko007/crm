'use strict';

const tableBody = document.querySelector('tbody')
const modalWindow = document.querySelector('.overlay');
const btnAdd = document.querySelector('.panel__add-goods');
const btnClose = document.querySelector('.modal__close');
const overlayModal = document.querySelector('.overlay__modal');

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


const createRow = (obj) => {
  const tr = document.createElement('tr');
  //tr.className ='good-item';

  const td_1 = document.createElement('td');
  td_1.className = 'table__cell';
  const lastRow = tableBody.lastElementChild;
  const lastNum = Number(lastRow.firstElementChild.textContent);
  td_1.textContent = 1 + lastNum;
  tr.appendChild(td_1);

  const td_2 = document.createElement('td');
  td_2.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
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
  td_5.textContent = obj.count;
  tr.appendChild(td_5);

  const td_6 = document.createElement('td');
  td_6.className = 'table__cell';
  td_6.textContent =`$${obj.price}`;
  tr.appendChild(td_6)

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

btnAdd.addEventListener('click', () => {
  modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
  const target = e.target;
  if (target === modalWindow || 
      target.closest('.modal__close')) {
      modalWindow.classList.remove('active');
    }
});

const deleteBtn = document.querySelectorAll('.table__btn_del');
deleteBtn.forEach(btn => {
      btn.addEventListener('click', () => {
       const row = btn.closest('tr');
       row.parentNode.removeChild(row);
       const idRow = row.children[1].getAttribute('data-id');
       
       const getNewArray = (arr) => {arr.forEach(el => {
        for (const key in el) {
         if (el[key] == idRow){
          const index = arr.indexOf(el);
          arr.splice(index, 1);
          console.log(arr);
          };
         };
         })};
       getNewArray(goods)
        });
      });


