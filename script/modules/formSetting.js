export const formSetting = (form) => {
    const formCheckbox = form.discount;
    const discount = formCheckbox.nextElementSibling;
    formCheckbox.addEventListener('click', () => {
        if (formCheckbox.checked) {
            discount.removeAttribute('disabled');
        } else {
            discount.value = '';
            discount.setAttribute('disabled', 'disabled');
        };
    });

    const inputs = document.querySelectorAll('.modal__input');
    inputs.forEach(el => {
        el.setAttribute('required', 'required');
    });

    form.count.type = 'number';
    form.price.type = 'number';

    form.price.addEventListener('blur', e => {
        e.target.form.total.value = `$${form.count.value * form.price.value}`;
    });

    form.count.addEventListener('blur', e => {
        e.target.form.total.value = `$${form.count.value * form.price.value}`;
    });


    const fieldset = document.querySelector('.modal__fieldset');
    const createPreview = () => {
        const image = document.createElement('div');
        image.className = 'image-container';
        image.insertAdjacentHTML('beforeend', `<img class="preview">`);
        fieldset.append(image);
    };

    const file = document.querySelector('.modal__file');
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

    const warnText = document.createElement('div');
    warnText.style.cssText = `
    color: red;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    display: flex; 
    align-items: flex-end;
    `;
    warnText.textContent = "ИЗОБРАЖЕНИЕ НЕ ДОЛЖНО ПРЕВЫШАТЬ 1 МБ";

    file.addEventListener('change', async () => {
        if (file.files.length > 0 && file.files[0].size <= 1024) {
            warnText.remove();
            const src = URL.createObjectURL(file.files[0]);
            createPreview();
            const preview = document.querySelector('.preview');
            preview.parentElement.style.display = 'block';
            preview.src = src;
        }
        else if (file.files.length > 0 && file.files[0].size > 1024) {
            if (fieldset.contains(document.querySelector('.image-container'))) {
                document.querySelector('.image-container').style.display = 'none';
            }
            file.before(warnText);
        }
    });
};