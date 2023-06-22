import * as React from 'react';
import Modal from './Modal';
import Field from './Field';

const DataView = (props: any) => {
    const content = props.content;

    return (
        <div className="lpb-container">
            <Modal />
            <ul className="lpb-diploma-list">
                {content && content.map((row: any) => {
                    return (<Field {...row} key={row.id} />);
                })}
            </ul>
        </div>
    )
};

export default DataView;