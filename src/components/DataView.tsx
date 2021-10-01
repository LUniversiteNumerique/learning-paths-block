import * as React from 'react';

const DataView = (props : any) => {
    const content = props.content;
    return (
        <div className="lpb-container">
            <div id="lpb-modal">
                <div id="lpb-modal-content">
                    <span id="lpb-modal-close">&times;</span>
                    <div id="lpb-modal-content-body">...</div>
                </div>
            </div>
            <ul className="lpb-diploma-list">
                { content && content.map((row : any) => {
                    return (
                        <section className="lpb-field">
                            <h3 className="lpb-field-name">{row.name}</h3>
                            { row.diplomas && row.diplomas.map((diploma : any) => {
                                return (
                                    <article className="lpb-diploma">
                                        <h4 className="lpb-diploma-name" data-lpb-id={diploma.id}>{diploma.name}</h4>
                                    </article>
                                )
                            }) }
                        </section>
                    )
                }) }
            </ul>
        </div>
    )
};

export default DataView;