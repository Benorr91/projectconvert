import React, { useEffect, useRef, useState } from 'react';

function Input(props) {
    const resultValues = Object.values(props.ar)
    const resultCoinsName = Object.keys(props.ar)
    // console.log(resultValues);
    // console.log(resultCoinsName);
    let selectRef = useRef();
    let selectRef2 = useRef();

    let inputRef = useRef();
    let [amount, setAmount] = useState(0);
    useEffect(()=>{
     convert ()

    },[amount])
    const convert = () => {
        setAmount((inputRef.current.value/selectRef.current.value)*selectRef2.current.value)
        props.CollectConvert(amount)

    }

    return (
        < div className='my-5 w-50 mx-auto'>
            <input className='form-control w-50' defaultValue={1} ref={inputRef} type="number" onChange={convert} />
            <select className='form-select w-50' onChange={convert}  ref={selectRef}>
                <option value="" >Choose Coin</option>

                {resultCoinsName.map((item, i) => {
                    return (
                        <option key={i} value={resultValues[i]}>{item}</option>
                    )
                })}

            </select>
            <select className='form-select w-50 ' onChange={convert}  ref={selectRef2}>
                <option value="" >Choose Coin</option>
                {resultCoinsName.map((item, i) => {
                    return (
                        <option key={i} value={resultValues[i]}>{item}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Input