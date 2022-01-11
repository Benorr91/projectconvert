import axios from 'axios';
import React , { useEffect, useState } from 'react';
import CurrencyRow from './currencyRow';

function AppConvert(props) {
   let [currencyOptions,setCurrencyOptions]=useState([])
    
   
    useEffect(()=>{
        doApi();
    
      },[])
      const doApi=async()=>{
           let url="http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb";
           let resp=await axios.get(url)
          setCurrencyOptions([resp.data,[...Object.keys(resp.data.quotes)]])    
      }    
   
    return (
        <div className='container '>
            
            <h1 className='text-center my-3'>Convetr Currency</h1>
            <CurrencyRow currencyOptions={currencyOptions} />
            <div className='col-md-6 mx-auto my-3 text-center'>=</div>
            <CurrencyRow currencyOptions={currencyOptions} />
        
        </div>
    )
}

export default AppConvert