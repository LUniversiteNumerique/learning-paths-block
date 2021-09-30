if ($ != undefined) {
    $(function() {
        const diploma = $('.lpb-diploma');
        diploma.on('click', (e) => {
            e.preventDefault();
            console.log($(this));
            $(this).children().find('.lpb-diploma-body').toggle();
        });
    });
}
