import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from './input';
import Score from './score';

function ExchangeApp(props) {
    const [ar, setAr] = useState([]);
    const [convert, setConvert] = useState(0);


    useEffect(() => {
        doApi();
    }, [])
    const doApi = async () => {
        let url = "https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b"
        let resp = await axios.get(url);
        // console.log(resp.data.data);
        setAr(resp.data.data);
    }
    const CollectConvert = (amount) => {
        setConvert(amount);
    }


    return (
        <div className='container '>
            <h1>Currency conversion </h1>
            <Input ar={ar} CollectConvert={CollectConvert} />
            <Score convert={convert} />
        </div>
    )
}

export default ExchangeApp