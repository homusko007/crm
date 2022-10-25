import { fetchRequest } from "./renderGoods.js";


const renderCategory = (err, data) => {
    if (err) {
        console.warn(err);
        return;
    }
    const datalist = document.createElement('datalist');
    datalist.id = "category-list";

    data.map(item => {
        const dateOption = document.createElement('option')
        dateOption.value = item;
        dateOption.textContent = item;
        datalist.appendChild(dateOption);
    });

    document.querySelector('.modal__label_category').after(datalist);
};

export const loadCategory = () => {
    fetchRequest(`http://localhost:3000/api/category`, {
        method: 'get',
        callback: renderCategory,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};

