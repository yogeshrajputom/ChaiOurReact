import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/710ca010cc0bee2c05eaa236/latest/${currency}`)
            .then((res) => res.json())
            .then((json) => setData(json.conversion_rates))
    }, [currency]);

    return data;
}

export default useCurrencyInfo;