document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.lpb-diploma').forEach(item => {
        item.addEventListener('click', event => {
            const element = event.target as HTMLElement;
            const parent = element.parentElement;
            if (parent) {
                const target = parent.querySelector('.lpb-diploma-body');
                target?.classList.toggle('active');
            }
        })
    });

});