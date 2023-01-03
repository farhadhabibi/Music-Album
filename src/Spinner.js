import React from 'react';
import { Oval } from 'react-loader-spinner';

function Spinner() {
    return (
        <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{ justifySelf: 'center', gridColumn: '1 / -1', alignSelf: 'center', marginBottom: '10px' }}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    )
}
export default Spinner;