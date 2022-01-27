import React from 'react';

function Score(props){

let{convert,currency}=props;
    return(
        <div className='text-center scoreDiv w-50 mx-auto p-3 my-4'>
            {convert?
            <>
            Your convert {convert.toLocaleString()} {currency} 
            </>
                :"You not Convert Nothing"}
        </div> 
    )
}

export default Score