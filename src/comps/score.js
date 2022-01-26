import React from 'react';

function Score(props){

let{convert}=props;
    return(
        <div className='text-center scoreDiv w-50 mx-auto p-3 my-4'>
            {convert?
            <>
            Your convert {convert.toLocaleString()}
            </>
                :""}
        </div> 
    )
}

export default Score