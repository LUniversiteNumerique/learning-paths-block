if ($ != undefined) {
    $(function() {
        const list = $('.lpb-diploma-list');
        list.each(() => {
            $(this).on('click', () => {
                $('.lpb-body-data').show();
            });
        });
    });
}
