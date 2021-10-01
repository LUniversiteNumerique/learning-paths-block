import * as React from 'react';
import { baseURI } from '../utils/utils';

const DataView = () => {
    const modal = document.getElementById('lpb-modal') as HTMLElement;
    const closeBtn = document.getElementById('lpb-modal-close') as HTMLElement;
    
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

                    fetch(`${baseURI}/wp-content/plugins/learning-paths-api/api.php/diploma/${diplomaId}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(console.error);
            
                    //modalContent.innerHTML = parent.innerHTML;
                    modal.style.display = 'block';
                    document.body.style.overflowY = 'hidden';
                }
            })
        });

    }

    return(<h1>Hello !</h1>)
};

export default DataView;