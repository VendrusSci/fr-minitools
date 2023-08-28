import { useState } from "react";
import "../CSS/Minitools.css"
import { exalt_payout } from "../Data/exalt-payout";
import { NumericInput } from "../Utils/NumericInput";

export function ExaltCheck(){

    const maxPrice = [5000, 6000, 7000, 8500, 9250];
    const lvl7baseExalt = 11250;
    const [lvl7Exalt, setLvl7Exalt] = useState(11250);
    const [baseDifference, setBaseDifference] = useState(0);

    function updatePrices(lvl7payout){
        setLvl7Exalt(lvl7payout);
        setBaseDifference(lvl7payout - lvl7baseExalt);
    }

    return(
        <div>
            <h2 className="Minitools-title">OPTIMAL EXALT LEVEL CHECKER</h2>
            <br/>
            <div className="Minitools-body">
                <div className="Minitools-dateblock">
                    <label>Lvl 7 payout:</label>
                    <NumericInput min={lvl7baseExalt} max={30000} onChange={(e) => updatePrices(e)} value={lvl7Exalt}></NumericInput>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><b>Fodder LAH</b></th>
                            <th><b>Optimal level</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Free-{maxPrice[0]-1+baseDifference}</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>{maxPrice[0]+baseDifference}-{maxPrice[1]-1+baseDifference}</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>{maxPrice[1]+baseDifference}-{maxPrice[2]-1+baseDifference}</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>{maxPrice[2]+baseDifference}-{maxPrice[3]-1+baseDifference}</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>{maxPrice[3]+baseDifference}-{maxPrice[4]-1+baseDifference}</td>
                            <td>8</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="Minitools-body">
                <label className="Minitools-heading">Average Exalt Payout</label>
                <table>
                    <thead>
                        <tr>
                            <th><b>Level</b></th>
                            <th><b>Average payout</b></th>
                            <th><b>Payout range</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exalt_payout.map((level, index) => {
                                return(
                                    <tr key={index}>
                                        <td key={index + "_lvl"}>{index + 1}</td>
                                        <td key={index + "_avg"}>{level[0]}</td>
                                        <td key={index + "_rng"}>{level[1]} - {level[2]}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}