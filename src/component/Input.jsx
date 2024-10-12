import { useId } from "react";

function Input({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOptions=[],
selectCurrency="usd",
amountDisable=false,
currencyDisable=false,
className=""


}={}){
    

  const inputid=useId();

return (

<>
<div className={`flex flex-wrap bg-white rounded-lg ${className}` }>
  <div className="w-1/2 flex flex-wrap justify-start">
   <label htmlFor={inputid}>{label}</label>
   <input id={inputid} 
   type="number" 
   placeholder="Amount"
   disabled={amountDisable}
   value={amount}
  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
  
   
   />
   </div>

   <div className="w-1/2 flex flex-wrap justify-end ">
   <p className="w-full flex justify-center">Currency Type</p>
<select
 className=" px-1 py-1 rounded-lg bg-gray-100 outline-none"
 value={selectCurrency}
onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
 disabled={currencyDisable}
 >
    {
    currencyOptions.map((Currency)=>(
      <option
      key={Currency}
      value={Currency}
      >{Currency}</option>
    ))

    }
</select>
</div>
</div>
</>

)

}


export default Input;