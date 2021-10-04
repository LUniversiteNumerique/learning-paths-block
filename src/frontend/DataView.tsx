import React, { useEffect, useState } from 'react';
import { baseURI } from '../utils/utils';
import strings from '../utils/strings.utils';
import { Resource } from '../types/Resource';
import { createRow, createHeader } from '../utils/table.utils';

const DataView = () => {
    const [html, setHTML] = useState<JSX.Element[]>([]);
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
            setHTML([]);
        } else {
            setHTML(rest => [...rest, data]);
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
            //buildHTML(<p>test</p>);
            fetch(`${baseURI}/wp-content/plugins/learning-paths-api/api.php/diploma/${diplomaId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const out = <article className="lpb-diploma">
                                    <h4 className="lpb-diploma-name">{data.name}</h4>
                                    <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
                                    <section className="lpb-diploma-body">
                                    { data.years && data.years.map((year : any) => {
                                        return (
                                            <>
                                                <h5>{year.name}</h5>
                                                <table>
                                                    <thead>
                                                        <tr>{createHeader(strings.thead)}</tr>
                                                    </thead>
                                                    { year.ue && year.ue.map((ue : any) => {
                                                        return ue.resources 
                                                            ? <tbody>
                                                                { ue.resources 
                                                                    && ue.resources.map((resource: Resource, i: number): JSX.Element => {
                                                                    return createRow(resource, ue, "resource", ue.resources.length, i)
                                                                }) }
                                                            </tbody> 
                                                            : null
                                                    }) }
                                                </table>
                                            </>
                                        )
                                    }) }
                                    </section>
                                </article>;
                    buildHTML(<>{out}</>);
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

    return(
        <div>
            { Object.values(html).map((element, index) => {
                return <div key={index}>{element}</div>;
            }) }
        </div>
    );
};

export default DataView;