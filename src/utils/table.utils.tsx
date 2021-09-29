import * as React from 'react';
import { Resource } from '../types/Resource';

export const createRow = (
    object: Resource, 
    parent: any, 
    name: string, 
    length: number, 
    iteration: number
): JSX.Element => {
    const rows = Object.keys(object).map(key => {
        return key != 'url' 
            ? <td className={`lpb-${name}-${key}`}>
                { key === 'name'
                    ? <a href={object['url']} target="_blank">{object['name']}</a>
                    : object[key]
                }
            </td>
            : null;
    });
    return (
        <tr>
            { iteration === 0 
                ? <th rowSpan={length+1} className="ue-name">
                    {parent.name}
                </th>
                : null }
            {rows}
        </tr>
    );
};
