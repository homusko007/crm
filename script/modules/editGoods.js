import { fetchRequest, createRow, loadGoods } from "./renderGoods.js";
import { openModalError } from "./modalMessage.js"

export const loadEditModal = (idGood, closeModal, form, editRow, index) => {
  const sendData = () => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const changeData = new FormData(form);
      const newGood = Object.fromEntries(changeData);
      newGood.id = document.querySelector('.vendor-code__id').textContent;
      //newGood.image = await toBase64(newGood.image);
      fetchRequest(`http://localhost:3000/api/goods/${newGood.id}`, {
        method: 'PATCH',
        body: {
          id: newGood.id,
          title: form.name.value,
          price: form.price.value,
          description: form.description.value,
          category: form.category.value,
          discount: form.discount_count.value,
          count: form.count.value,
          units: form.units.value,

        },
        callback(err, data) {
          if (err) {
            //openModalError(err);
            console.log("не изменили");
          } else {
            console.log("Изменили");
            const newRow = createRow(data, index);
           editRow.replaceWith(newRow);
           //loadGoods()
          }
        },
        headers: { 'Content-Type': 'application/json; charset-UTF-8' },
      })
      form.reset();
      closeModal();
    })
  };

  const renderModal = (err, data) => {
    if (err) {
      openModalError(err);
      return;
    };
    document.querySelector('.vendor-code__id').textContent = data.id;
    form.name.value = data.title;
    form.category.value = data.category;
    form.units.value = data.units;
    form.count.value = data.count;
    form.price.value = data.price;
    form.description.value = data.description;
    form.discount_count.value = data.discount;
    sendData();
  };

  fetchRequest(`http://localhost:3000/api/goods/${idGood}`, {
    method: 'get',
    callback: renderModal,
  });
};
