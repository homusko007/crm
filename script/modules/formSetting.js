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
};