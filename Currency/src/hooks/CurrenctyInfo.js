import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/710ca010cc0bee2c05eaa236/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;