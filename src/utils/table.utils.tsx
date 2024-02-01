import * as React from 'react';
import type { ResourceProps } from '../frontend/components/DataView';


export const createHeader = (obj: object): JSX.Element[] => {
    return Object.entries(obj).map(([id, v]) => <div key={id} className="cell th">{v}</div>);
}

export const createRow = (
    object: ResourceProps,
    name: string
): JSX.Element => {
    const rows = Object.keys(object).map(key => {
        return key != 'url'
            ? <div className={`cell lpb-${name}-${key}`}>
                {key === 'name'
                    ? <a href={object['url']} target="_blank" rel="noreferrer">{object['name']}</a>
                    : key === 'licence'
                        ? object[key] != null
                            ? Object.values(object[key]).map((licence: any) =>
                                <img src={licence['image']} width="80" title={licence['name']} alt={licence['name']} />
                            )
                            : ""
                        : object[key]
                }
            </div>
            : null;
    });
    return <div className="column">{rows}</div>;
};
