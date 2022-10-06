$(function () {
    $('.select').click((e) => {
        e.preventDefault();
        $(this).find('span:nth-child(2)').toggleClass('rot');
    })
})