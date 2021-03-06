import React, { useEffect, useRef, useState } from 'react';
import { getSymbolFromCode } from "currency-code-symbol-map";

// const sortByPosition = obj => {
//     const order = [], res = {};
//     Object.keys(obj).forEach(key => {
//        return order[obj[key]['position'] - 1] = key;
//     });
//     order.forEach(key => {
//        res[key] = obj[key];
//     });
//     return res;
//  }

function Input(props) {
    
    const resultValues = Object.values(props.ar)
    const resultCoinsName = Object.keys(props.ar)
    let selectRef = useRef();
    let selectRef2 = useRef();
    let inputRef = useRef();
    let [amount, setAmount] = useState(0);
    useEffect(() => {
        convert()

    }, [amount])

    const convert = () => {
        const value = selectRef2.current.options[selectRef2.current.selectedIndex].innerHTML;
        setAmount((inputRef.current.value / selectRef.current.value) * selectRef2.current.value)
        props.CollectConvert(amount,value)
        //  console.log(props.ar.sort());

    }

    return (
        < div className='my-5 w-50 mx-auto'>
            <input className='form-control w-75' defaultValue={1} ref={inputRef} type="number" onChange={convert} />
            <select className='form-select w-75  select	' onChange={convert} ref={selectRef}>
                <option value="" >Choose Coin</option>

                {resultCoinsName.map((item, i) => {
                    return (
                        <option key={i} value={resultValues[i]}>{item} {getSymbolFromCode(item)}</option>
                    )
                })}

            </select>
            <div className='mx-auto w-50 '>
                <button className='btn btn-dark text-center my-3' onClick={() => {
                    let temp = selectRef.current.value
                    selectRef.current.value = selectRef2.current.value
                    selectRef2.current.value = temp
                    convert()

                }}><i className="fa fa-arrows-v" aria-hidden="true"></i></button>
            </div>

            <select className='form-select w-75  select' onChange={convert} ref={selectRef2}>
                <option value="" >Choose Coin</option>
                {resultCoinsName.map((item, i) => {
                    return (
                        <option key={i} value={resultValues[i]}>{item} {getSymbolFromCode(item)}</option>
                    )
                })}

            </select>

        </div>
    )
}

export default Input
// const sortKeys = (obj) => {
//     return Object.assign(...Object.entries(obj).sort().map(([key, value])=> {
        
//         return {
//             [key]: value
//         }
//     }));
// };