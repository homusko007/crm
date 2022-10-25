export const openModalInfo = async () => {
    const overlayDelete = document.createElement('div');
    overlayDelete.classList.add('overlay', 'active');

    overlayDelete.insertAdjacentHTML('beforeend', `
        <div class="overlay__modal modal">
            <div class="modal_text">Вы дейстрительно хотите удалить товар?</div>
            <button class="delete_btn_ok">Да</button>
            <button class="delete_btn_no">я передумал</button>
        </div>`);
    document.body.append(overlayDelete);

    return new Promise(resolve => {
        document.querySelector('.delete_btn_no').addEventListener('click', () => {
            overlayDelete.remove();
            resolve(false);
        });
        document.querySelector('.delete_btn_ok').addEventListener('click', () => {
            overlayDelete.remove();
            resolve(true);
        });
    })
}

export const openModalError = (err) => {
    const overlayError = document.createElement('div');
    overlayError.classList.add('overlay', 'error_overlay', 'active');

    overlayError.insertAdjacentHTML('beforeend', `
        <div class="overlay__modal modal" style="width: 350px; height: 350px; padding: 100px 0px; text-align: center">
        <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L92 92" stroke="#D80101" stroke-width="3" stroke-linecap="round"/>
            <path d="M2 92L92 2" stroke="#D80101" stroke-width="3" stroke-linecap="round"/>
        </svg>

            <button class="modal__close btn_error">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 2 20 20M2 22 22 2" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
            </svg>
            </button>
            <div class="modal_text">Что-то пошло не так. ${err}</div>
        </div>`);
    document.body.append(overlayError);

    const btn = document.querySelector('.btn_error');
    btn.addEventListener('click', () => {
        overlayError.remove();
    });
};