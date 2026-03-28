import React, {use} from 'react';
import Aicard from "./Aicard";

const Aicards=({sentData}) => {

    const arrData=use(sentData)
    console.log( arrData )
    
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-[120px] ">
            {
                arrData.map(data => <Aicard data={data} key={data.name} ></Aicard>)
            }
        </div>
    );
};

export default Aicards;