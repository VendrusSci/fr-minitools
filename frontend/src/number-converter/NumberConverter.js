import { useState } from "react";
import { NumericInput } from "../Utils/NumericInput";

export function NumberConverter(){

    const [separatorNumber, setSeparatorNumber] = useState("0");
    const [intNumber, setIntNumber] = useState(0);
    const [textNumber, setTextNumber] = useState("zero");
    const [gems, setGems] = useState(0);
    const [treasure, setTreasure] = useState(0);
    const [ratio, setRatio] = useState(1000);

    function separatorNumberChange(num){
        setSeparatorNumber(num);
        let plainNum = num.replace(/\D/g,'');
        setIntNumber(plainNum);
        setTextNumber(convert(plainNum));
    }

    function intNumberChange(num){
        setIntNumber(num);
        setSeparatorNumber(num.toLocaleString());
        setTextNumber(convert(num));
    }

    function treasureChange(num){
        setTreasure(num);
        setGems(num/ratio);
    }

    function gemChange(num){
        setGems(num);
        setTreasure(num*ratio);
    }

    function ratioChange(num){
        setRatio(num);
        setTreasure(gems*num);
    }

    return(
        <div>
            <h2 className="Minitools-title">NUMBER AND CURRENCY CONVERTER</h2>
            <br/>
            <div className="Minitools-body">
                <label className="Minitools-label">Currency Converter</label>
                1: <NumericInput min={0} value={ratio} onChange={(num) => ratioChange(num)} />
                <textarea value={gems} onChange={(e) => gemChange(e.target.value)}/>
                <textarea value={treasure} onChange={(e) => treasureChange(e.target.value)}/>
            </div>
            <br/>
            <div className="Minitools-body">
                <label className="Minitools-label">Number Parser</label>
                <NumericInput min={0} value={intNumber} onChange={(num) => intNumberChange(num)} />
                <textarea value={separatorNumber} onChange={(e) => separatorNumberChange(e.target.value)}/>
                <textarea readOnly value={textNumber}/>
            </div>
        </div>
    );
}

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } 
  else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } 
  else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    let andText = num % 100 === 0 ? "" : "and ";

    return ones[Math.floor(num / 100)] + " hundred " + andText + convert_tens(num % 100);
  } 
  else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num === 0) return "zero";
  else return convert_millions(num);
}
