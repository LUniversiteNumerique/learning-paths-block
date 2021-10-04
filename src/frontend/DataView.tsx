import React, { useEffect, useState } from 'react';
import { baseURI } from '../utils/utils';

const DataView = () => {
    const [html, setHTML] = useState<JSX.Element>(<React.Fragment></React.Fragment>);
    const [diplomas, setDiplomas] = useState<NodeListOf<Element>>();
    const modal = document.getElementById('lpb-modal') as HTMLElement;
    const closeBtn = document.getElementById('lpb-modal-close') as HTMLElement;

    useEffect(() => {
        document.querySelectorAll('.lpb-diploma').forEach((item, index) => {
            if (index === 0) {
                item.classList.toggle('active');
            }
            item.removeEventListener('click', event => listenerEvent(event));
            item.addEventListener('click', event => listenerEvent(event));
        });
    }, []);

    const buildHTML = (data?: JSX.Element) => {
        if (data === undefined) {
            setHTML(<React.Fragment></React.Fragment>);
        } else {
            setHTML((rest: any) => rest + data);
        }
    }

    const listenerEvent = (event: any) => {
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
            buildHTML(); // Clear the html

            fetch(`${baseURI}/wp-content/plugins/learning-paths-api/api.php/diploma/${diplomaId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.description) {
                        buildHTML(<p>{data.description}</p>);
                    }
                })
                .catch(console.error);
    
            modal.style.display = 'block';
            document.body.style.overflowY = 'hidden';
        }
    };

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
    }

    return html;
};

export default DataView;