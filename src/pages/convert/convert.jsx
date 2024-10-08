
import {TokenFocus} from "./TokenFocus.jsx";
import {useLocation} from "react-router-dom";
import {ConfirmationMsg} from "../../common/ConfirmationMsg.jsx";
import {useEffect, useState} from "react";
import {calculateTokenConversionRate} from "../../lib.js";
import {ConfirmDeny} from "../../common/ConfirmDeny.jsx";



function Convert() {

    const location = useLocation();
    const {leftCoin, rightCoin} = location.state;

    const [amount, setAmount] = useState(0.00);
    const [conversionValue, setConversionValue] = useState(0.00);

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    useEffect(() => {
        setConversionValue(calculateTokenConversionRate(amount, leftCoin.balanceToken.conversionValue, rightCoin.coin.conversionValue));
    }, [amount]);



    return (
       <div className={"convert-box"}>
           <TokenFocus leftCoin={leftCoin} rightCoin={rightCoin}/>
           <ConfirmationMsg msg={`Convert ${amount} ${leftCoin.balanceToken.shortName} to ${conversionValue} ${rightCoin.coin.shortName}`}/>
              <h3>Amount To Convert</h3>
           <input
               type="number"
               value={amount}
               onChange={handleInputChange}
               placeholder="Enter amount"
           />
           <ConfirmDeny />
       </div>
    );
};

export {Convert}