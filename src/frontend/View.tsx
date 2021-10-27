import React, { useEffect, useState } from 'react';
import FrontendView from './view/FrontendView';
import Loader from './view/Loader';
import { baseURI } from '../utils/utils';
import type { Data } from '../types/Data';


const View = () => {
    const [html, setHTML] = useState<JSX.Element[]>([]);
    const modal = document.getElementById('lpb-modal') as HTMLElement;
    const closeBtn = document.getElementById('lpb-modal-close') as HTMLElement;

    useEffect(() => {
        document.querySelectorAll('.lpb-field-name').forEach((item, _) => {
            item.addEventListener('click', event => fieldListenerEvent(event));
        });
        document.querySelectorAll('.lpb-diploma').forEach((item, _) => {
            item.removeEventListener('click', event => listenerEvent(event));
            item.addEventListener('click', event => listenerEvent(event));
        });
    }, []);

    const buildHTML = (data: JSX.Element): void => {
        setHTML([data]);
    };

    const fetchAPI = async (id: number): Promise<Data> => {
        const response = await fetch(`${baseURI}/data/${id}`);
        const data = await response.json();
        return data;
    };

    const fieldListenerEvent = (event: any): void => {
        // Clean the active classes
        [].forEach.call(document.querySelectorAll('.lpb-field-name'), function(item) {
            const element = item as HTMLElement;
            element.classList.remove('active');
        });
        // Set the new active class
        const element = event.target as HTMLElement;
        const parent = element.parentElement as HTMLElement;
        if (parent) {
            parent.classList.toggle('active');
        }
    };

    const listenerEvent = (event: any): void => {
        // Clean the active classes
        [].forEach.call(document.querySelectorAll('.lpb-diploma'), function(item) {
            const element = item as HTMLElement; 
            element.classList.remove('active');
        });
        // Set the new active class
        const element = event.target as HTMLElement;
        const parent = element.parentElement as HTMLElement;
        const diplomaId: number = element.dataset.lpbId ? parseInt(element.dataset?.lpbId) : 0;

        if (parent) {
            parent.classList.toggle('active');
            buildHTML(<Loader />); // Clear the html

            fetchAPI(diplomaId).then(data => {
                const out = <FrontendView {...data} />;
                buildHTML(<>{out}</>);
            });

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

    return(
        <div>
            { Object.values(html).map((element, index) => {
                return <div key={index}>{element}</div>;
            }) }
        </div>
    );
};

export default View;
