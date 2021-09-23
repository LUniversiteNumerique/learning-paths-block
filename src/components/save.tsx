import * as React from 'react';

const Save = ({ ...props }: any) => {
    const content = props.attributes.content;
    
    return (
        <div>
            { content && content.map((row : any) => {
                return (
                    <>
                        <h3 className="diploma-name">{row.name}</h3>
                        { row.years && row.years.map((year : any) => {
                            return (
                                <>
                                    <h4 className="year-name">{year.name}</h4>
                                    { row.ue && row.ue.map((ue : any) => {
                                        return (
                                            <h5 className="ue-name">{ue.name}</h5>
                                        )
                                    }) }
                                </>
                            )
                        }) }
                    </>
                )
            }) }
        </div>
    )
};

export default Save;