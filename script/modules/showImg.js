export const getImg = (tableBody) => {
    tableBody.addEventListener('click', async e => {
        const target = e.target;
        if (target.closest('.table__btn_pic')) {
            var x = (screen.width - 800) / 2;
            var y = (screen.height - 600) / 2;

            const btnPicUrl = target.closest('.table__btn_pic').getAttribute('data-pict');
            open(`https://amazing-navy-pirate.glitch.me/${btnPicUrl}`, '', `width=800, height=600, left=${x}, top=${y}`);

            };
    })
}