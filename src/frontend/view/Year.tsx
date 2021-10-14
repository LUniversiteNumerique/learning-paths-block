import * as React from 'react';
import Ue from './Ue';
import type { YearData } from '../../types/Data';

const Year = (year: YearData) => {
    return (
        <>
            <h5>{year.name}</h5>
            <div className="flex-table">
                { year.ue && year.ue.map((ue : any) => {
                    return ue.resources && ue.name
                        ?   <Ue {...ue} /> 
                        :   null
                }) }
            </div>
        </>
    );
};

export default Year;
