import * as React from 'react';
import strings from '../../utils/strings.utils';
import { createRow, createHeader } from '../../utils/table.utils';
import type { ResourceDataProps } from './DataView';


export type UeProps =
    | {
        name: string;
        resources: Array<ResourceDataProps>
    };

const Ue = (ue: UeProps) => {
    return (
        <div className="column-wrapper">
            <h6 className="lpb-ue-name">{ue.name}</h6>
            <div className="column header">
                {createHeader(strings.thead)}
            </div>
            {ue.resources
                && ue.resources.map((resource: ResourceDataProps): JSX.Element => {
                    return createRow(resource, "resource")
                })}
        </div>
    );
};

export default Ue;
