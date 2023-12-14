import * as React from 'react';
import Year from './Year';
import strings from '../../utils/strings.utils';
import { createHeader, createRow } from '../../utils/table.utils';
import type { UeProps } from './Ue';


export type YearData =
    | {
        name: string;
        ue: Array<UeProps>
    };

export type ResourceProps =
    | {
        [key: string]: string | number;
        [index: number]: string;
        name: string;
        type: string;
        volume: string;
        url: string;
        licence: string;
    };

export type DataProps =
    | {
        id: number;
        name: string;
        description: string;
        years: Array<YearData>;
        resources: Array<ResourceProps> | null;
    };

const DataView = (data: DataProps): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
                {data.resources
                    ? <div className="flex-table active">
                        <div className="column-wrapper">
                            <div className="column header">
                                {createHeader(strings.thead)}
                            </div>
                            {data.resources.map((resource: ResourceProps): JSX.Element => {
                                return createRow(resource, "resource")
                            })}
                        </div>
                    </div>
                    : null
                }
                {data.years && data.years.map((data: any) => {
                    return (<Year {...data} />);
                })}
            </section>
        </article>
    )
};

export default DataView;
