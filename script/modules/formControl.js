import { fetchRequest } from "./renderGoods.js";
import { openModalError } from "./modalMessage.js";
import { addGoodsPage, addTotalPage } from "./addInfoPage.js"

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.addEventListener('loadend', () => {
    resolve(reader.result);
  });
  reader.addEventListener('error', err => {
    reject(err);
  });
  reader.readAsDataURL(file);
});

export const formControl = (form, closeModal, tableBody) => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const newGood = Object.fromEntries(formData);
    newGood.id = document.querySelector('.vendor-code__id').textContent;
    newGood.image = await toBase64(newGood.image);

    fetchRequest('http://localhost:3000/api/goods', {
      method: 'POST',
      body: {
        id: newGood.id,
        title: newGood.name,
        price: newGood.price,
        description: newGood.description,
        category: newGood.category,
        discount: newGood.discount_count,
        count: newGood.count,
        units: newGood.units,
        image: newGood.image,
      },
      callback(err, data) {
        if (err) {
          console.log(err, data);
          openModalError();
          return;
        } else {
          console.log('Загружено успешно', data);
          addGoodsPage(data, tableBody);
          addTotalPage(tableBody);
        }
      },
      headers: { 'Content-Type': 'application/json; charset-UTF-8' },
    });
    form.reset();
    closeModal();
  });
};
