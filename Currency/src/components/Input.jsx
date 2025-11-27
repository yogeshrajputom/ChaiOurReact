import React, { useId } from "react";

const Input = ({
    label,
    amount,
    onAmountChang,
    onCurrencyChang,
    currencyOptions = [],
    selectCurrency = "INR",
    amountDisable = false,
    cureencyDissable = false,
    className = ""
}) => {

    const amountInputId = useId();
    return (
        <>
            <div className={`container mx-auto bg-white p-3 rounded-xl text-sm flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={amountInputId}
                        className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                        type="number"
                        id={amountInputId}
                        className="outline-none w-full transparent py-1.5"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => { onAmountChang && onAmountChang(Number(e.target.value)); }}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 w-full mb-2">Currency Type</p>
                    <select
                        className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChang && onCurrencyChang(e.target.value)}
                        disabled={cureencyDissable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                              {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Input;