import React from 'react';

function CurrencyRow(props) {
    const { currencyOptions } = props;
    console.log(currencyOptions[1]);

    return (
        <div className='col-md-6 mx-auto'>

            <input className='form-control' type="number" />
            {currencyOptions[1] ?
                <select className='form-select'>
                    {currencyOptions[1].map((option, i) => {
                        return (
                            <option key={i} value={option}>{option}</option>
                        )
                    })}
                </select> : ""}
        </div>
    )
}

export default CurrencyRow









{/* <option value={currencyOptions[1][0]}>{currencyOptions[1][0]}</option>
          <option value={currencyOptions[1][1]}>{currencyOptions[1][1]}</option>
          <option value={currencyOptions[1][2]}>{currencyOptions[1][2]}</option>
          <option value={currencyOptions[1][3]}>{currencyOptions[1][3]}</option>
          <option value={currencyOptions[1][4]}>{currencyOptions[1][4]}</option> */}