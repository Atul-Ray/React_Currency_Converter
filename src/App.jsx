import { useState } from "react";
import Input from "./component/Input";
import Fn from './Image/Fn.jpg'
import useCurrencyInfo from "./Custom_Hooks/useCuurencyInfo";



function App(){
  const [amount , setAmount]=useState(0);
  const [from , setFrom ]=useState("usd");
  const [to , setTo]=useState("inr");
 const [convertedAmount , setConvertedAmount]=useState(0);

const currencyInfo = useCurrencyInfo(from);
const options=Object.keys(currencyInfo.rates || {})

const swap = () =>{
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () =>{
  if (currencyInfo.rates) {
    setConvertedAmount(amount * currencyInfo.rates[to]);

  }
}


return (
  <><div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover px-2 sm:px-40 ">
    <img className="absolute bg-cover w-full h-full" src={Fn}></img>
    <div className="w-full  sm:p-8  backdrop-blur-sm">
      <form onSubmit={(e)=>{
        e.preventDefault();
  convert();
      }}>
   <div className="w-full mb-2  max-w-screen  rounded-lg  p-2 bg-white ">


    <Input  label="From"
    amount={amount}
    currencyOptions={options}
    onAmountChange={(amount) => setAmount(amount)}
    onCurrencyChange={(currency)=>{setFrom(currency)}}
    selectCurrency={from}
    />

</div>
<div className="flex justify-center">
    <button onClick={swap} className=" border bg-slate-400 -my-4  border-gray-60 rounded-lg overflow-visible p-2 ">
         Swap
     </button>
     </div>
     
     <div className="w-full  max-w-screen mt-2 rounded-lg  p-2 bg-white ">


    <Input  
    label="To"    
    amount={convertedAmount}
    onAmountChange={(amount)=>setConvertedAmount(amount)}
    currencyOptions={options}
    onCurrencyChange={(currency)=>setTo(currency)}
    selectCurrency={to}
    
    
    /> 
    
    </div>
<div >
<button type="submit" className="rounded-lg w-full mt-2 border-gray-400 bg-slate-800 text-slate-100 p-2 ">Convert</button>
</div>
    </form>
    </div>
    </div>
    </>
)


}



















export default App;
