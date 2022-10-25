import { fetchRequest, renderGoods, loadGoods } from "./renderGoods.js";

const loadSearchGoods = (searchValue) => {
    fetchRequest(`http://localhost:3000/api/goods/?search=${searchValue}`, {
        method: 'get',
        callback: renderGoods,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};

export const searchGoods = () => {
    const searchInput = document.querySelector('.panel__input');

    let timer;
    searchInput.addEventListener('keyup', () => {
        clearTimeout(timer);
        if (searchInput.value) {
            timer = setTimeout(() => {
                let searchValue = searchInput.value;
                loadSearchGoods(searchValue)
            }, 3000);
        }
    });
    searchInput.addEventListener('search', loadGoods);
};

