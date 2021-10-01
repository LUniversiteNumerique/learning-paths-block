import { baseURI } from '../utils/utils';
import { createHeader } from '../utils/table.utils';
import strings from '../utils/strings.utils';
import { createElement } from '@wordpress/components/node_modules/@wordpress/element/build-types';

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
                const diplomaId = element.dataset.lpbId;

                if (parent) {
                    parent.classList.toggle('active');
                    let diplomaData = {} as any;

                    fetch(`${baseURI}/wp-content/plugins/learning-paths-api/api.php/diploma/${diplomaId}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            diplomaData = data;
                            console.log("data out : ", diplomaData.years);

                            const desc = document.createElement('p');
                            desc.className = 'lpb-diploma-description';
                            desc.innerHTML = data.description;

                            const theadTh = createHeader(strings.thead);
                            const table = document.createElement('table');
                            const thead = document.createElement('thead');
                            const tr = document.createElement('tr');
                            const tbody = document.createElement('tbody');

                            theadTh.forEach(el => tr.appendChild(el));
                            thead.appendChild(tr);
                            table.appendChild(thead);
                            table.appendChild(tbody);

                            modalContent.appendChild(desc);
                            modalContent.appendChild(table);
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
