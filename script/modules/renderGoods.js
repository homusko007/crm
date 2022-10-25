import { addTotalPage } from "./addInfoPage.js";

const tableBody = document.querySelector('tbody');

export const fetchRequest = async (url, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    }

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);

  } catch (err) {
    callback(err);
  }
};

export const createRow = (obj, i) => {
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
  const productName = obj.title || obj.name;
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
  const pictData = obj.image;
  btnPict.setAttribute('data-pict', pictData);
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

export const renderGoods = (err, data) => {
  if (err) {
    console.warn(err);
    return;
  }
  tableBody.textContent = '';

  for (let i = 0; i < data.length; i++) {
    const index = i;
    const row = createRow(data[i], index);
    tableBody.append(row);
    addTotalPage(tableBody);
  };
}

export const loadGoods = () => {
  fetchRequest('http://localhost:3000/api/goods', {
    method: 'get',
    callback: renderGoods,
    headers: {
      'Content-Type': 'application/json'
    },
  });
};