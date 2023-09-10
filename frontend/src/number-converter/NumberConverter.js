import { useState } from "react";

export function NumberConverter(){

    const [separatorNumber, setSeparatorNumber] = useState("0");
    const [intNumber, setIntNumber] = useState(0);
    const [textNumber, setTextNumber] = useState("zero");
    const [gems, setGems] = useState('0');
    const [treasure, setTreasure] = useState('0');
    const [ratio, setRatio] = useState(1000);

    function separatorNumberChange(num){
        setSeparatorNumber(num);
        let plainNum = parseInt(num.replace(/\D/g,''));
        setIntNumber(plainNum);
        setTextNumber(convert(plainNum));
    }

    function intNumberChange(num){
        num = parseInt(num.replace(/\D/g,''));
        setIntNumber(num);
        setSeparatorNumber(num.toLocaleString());
        setTextNumber(convert(num));
    }

    function treasureChange(num){
        num = num.replace(/\D/g,'');
        num = parseInt(num);
        setTreasure(num.toLocaleString());
        setGems((num/ratio).toLocaleString());
    }

    function gemChange(num){
        num = num.replace(/\D/g,'');
        num = parseInt(num);
        setGems(num.toLocaleString());        
        setTreasure((num*ratio).toLocaleString());
    }

    function ratioChange(num){
        setRatio(num);
        let plainGems = parseInt(gems.replace(/\D/g,''));
        setTreasure((plainGems*num).toLocaleString());
    }

    return(
        <div>
            <h2 className="Minitools-title">NUMBER AND CURRENCY CONVERTER</h2>
            <br/>
            <div className="Minitools-body">
                <label className="Minitools-heading">Currency Converter</label>
                <table>
                    <tbody>
                        <tr>
                            <td className="Minitools-tdright"><label>Ratio:</label></td>
                            <td className="Minitools-tdleft">
                                <div className="Minitools-ratioflex">
                                    <label className="Minitools-ratiolabel">1:</label>
                                    <textarea className="Minitools-ratiotext" value={ratio} onChange={(e) => ratioChange(e.target.value)} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="Minitools-tdright"><label>Gems:</label></td>
                            <td className="Minitools-tdleft"><textarea className="Minitools-numbertext" value={gems} onChange={(e) => gemChange(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td className="Minitools-tdright"><label>Treasure:</label></td>
                            <td className="Minitools-tdleft"><textarea  className="Minitools-numbertext" value={treasure} onChange={(e) => treasureChange(e.target.value)}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div className="Minitools-body">
                <label className="Minitools-heading">Number Parser</label>
                <table>
                    <tbody>
                        <tr>
                            <td className="Minitools-tdright"><label>FR Style:</label></td>
                            <td className="Minitools-tdleft"><textarea className="Minitools-numbertext" value={intNumber} onChange={(e) => intNumberChange(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="Minitools-tdright"><label>Delimited:</label></td>
                            <td className="Minitools-tdleft"><textarea className="Minitools-numbertext" value={separatorNumber} onChange={(e) => separatorNumberChange(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td className="Minitools-tdright"><label>Text:</label></td>
                            <td className="Minitools-tdleft"><textarea className="Minitools-textnumbertext" readOnly value={textNumber}/></td>
                        </tr>
                    </tbody>
                </table>
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
