import * as React from 'react';
import { Resource } from '../types/Resource';

export const createRow = (object: Resource, parent: any, name: string, length: number, iteration: number) => {
    const keys = Object.keys(object);
    const rows = keys.map(key => {
        return (
            <td className={`lpb-${name}-${key}`}>
                {object[key]}
            </td>
        );
    });
    return (
        <tr>
            { iteration === 0 
                ?   <th rowSpan={length+1} className="ue-name">
                        {parent.name}
                    </th>
                :   null }
            {rows}
        </tr>
    );
};
