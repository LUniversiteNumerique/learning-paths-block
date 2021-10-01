import { baseURI } from '../utils/utils';

document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById('lpb-modal') as HTMLElement;
    const closeBtn = document.getElementById('lpb-modal-close') as HTMLElement;
    const modalContent = document.getElementById('lpb-modal-content-body') as HTMLElement;
    
    if (closeBtn) {

        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflowY = 'auto';
            }
        }

        document.querySelectorAll('.lpb-diploma').forEach((item, index) => {
            if (index === 0) {
                item.classList.toggle('active');
            }

            item.addEventListener('click', event => {
                modalContent.innerHTML = ''; // Reset the modal content
                // Clean the active classes
                [].forEach.call(document.querySelectorAll('.lpb-diploma'), function(item) {
                    const element = item as HTMLElement;
                    element.classList.remove('active');
                });
                // Set the new active class
                const element = event.target as HTMLElement;
                const parent = element.parentElement as HTMLElement;
                
                if (parent) {
                    parent.classList.toggle('active');
                    fetch(`${baseURI}/wp-content/plugins/learning-paths-api/api.php/diploma/1`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(console.error);
                    modalContent.innerHTML = parent.innerHTML;
                    modal.style.display = 'block';
                    
                    document.body.style.overflowY = 'hidden';
                }
            })
        });

    }

});