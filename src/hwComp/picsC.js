import React, { useState } from 'react';

function PicsC(props) {
  
    let [counter, setcounter] = useState(200);

    let nextPic = () => {
        if(counter<400){setcounter(counter + 20)}
        
   
    }
    return (
        <div className="mx-auto  text-center">
            <div>
                <img style={{ height: `${counter}px` }} src="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050__480.jpg" alt="car" />
            </div>

            <button onClick={nextPic} className="btn btn-info">Next </button>
            <button onClick={()=>{
                setcounter((counter<200)?200:counter-20)
            }} className="btn btn-info">Back</button>
        </div>
    )
}

export default PicsC