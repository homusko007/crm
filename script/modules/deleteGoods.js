import { fetchRequest } from "./renderGoods.js";
import { openModalInfo, openModalError } from "./modalMessage.js";
import { addTotalPage } from "./addInfoPage.js"

export const deleteGoods = (tableBody) => {
    tableBody.addEventListener('click', async e => {
        const target = e.target;
        if (target.closest('.table__btn_del')) {
            const delRow = target.closest('tr');
            const idGood = delRow.children[1].getAttribute('data-id');

            const agree = await openModalInfo();
            if (agree) {
                fetchRequest(`https://amazing-navy-pirate.glitch.me/api/goods/${idGood}`, {
                    method: 'DELETE',
                    callback(err) {
                        if (err) {
                            openModalError(err);
                        } else {
                            delRow.remove();
                            addTotalPage(tableBody);
                            const rowNumber = tableBody.querySelectorAll('.table__cell_number');
                            for (let i = 0; i < rowNumber.length; i++) {
                                rowNumber[i].textContent = `${i + 1}`;
                            }
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            };
        };
    });
};