import { useState } from "react";
import React from "react";
import "../CSS/Minitools.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { datesChristian, datesHindu, datesIslam, datesJewish, datesSeason, datesOther, datesFest } from "../Data/major-dates";

export function HatchCheck(){

    const nestDays = 6;

    const nestDateToday = new Date(new Date().getTime()+(nestDays*24*60*60*1000));
    const [date, setDate] = useState(nestDateToday);
    const [nestDate, setNestDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("tab1");
    
    function updateNestDate(newDate){
        setDate(newDate);
        setNestDate(new Date(newDate.getTime()-(nestDays*24*60*60*1000)));
    }

    function updateDate(newDate){
        setNestDate(newDate);
        setDate(new Date(newDate.getTime()+(nestDays*24*60*60*1000)));
    }

    function getNestDate(hatchDateString){
        let hatchDate = new Date(hatchDateString);
        return new Date(hatchDate.getTime()-(nestDays*24*60*60*1000)).toLocaleDateString();
    }

    function getOtherTableRows(){
        let rows = datesSeason.map(item => {
            return (
                <tr key={item[0]}>
                    <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                    <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                    <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                </tr>
            );
        });

        rows = rows.concat(React.createElement("tr", {key: "other1"}, React.createElement("td", {}, '\u00A0')));
    
        rows = rows.concat(datesOther.map(item => {
            return (
                <tr key={item[0]}>
                    <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                    <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                    <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                </tr>
            )
        }));
        
        return rows;
    }

    function getReligionTableRows(){
        let rows = datesChristian.map(item => {
            return (
                <tr key={item[0]}>
                    <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                    <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                    <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                </tr>
            );
        });

        rows = rows.concat(React.createElement("tr", {key: "rel1"}, React.createElement("td", {}, '\u00A0')));
    
        rows = rows.concat(datesJewish.map(item => {
            return (
                <tr key={item[0]}>
                    <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                    <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                    <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                </tr>
            )
        }));

        rows = rows.concat(React.createElement("tr", {key: "rel2"}, React.createElement("td", {}, '\u00A0')));
    
        rows = rows.concat(datesIslam.map(item => {
            return (
                <tr key={item[0]}>
                    <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                    <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                    <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                </tr>
            )
        }));
        
        return rows;
    }

    return(
        <div>
            <h2 className="Minitools-title">NEST DATE CHECKER</h2>
            <br/>
            <div className="Minitools-body">
                <div className="Minitools-dateblock">
                    <label>Will hatch on:</label>
                    <div className="Minitools-datepicker">
                        <DatePicker dateFormat="yyyy/MM/dd" selected={date} onChange={(date) => updateNestDate(date)}/>
                    </div>
                </div>
                <div className="Minitools-dateblock">
                    <label>Will nest on:</label>
                    <DatePicker dateFormat="yyyy/MM/dd" selected={nestDate} onChange={(date) => updateDate(date)}/>
                </div>
            </div>
            <br/>
            <div>
                <label className="Minitools-heading"><b>Major Events and Nesting Dates</b></label>
                <div className="Minitools-tabs">
                    <ul className="Minitools-tabnav">
                        <li key={"tab1"} className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab("tab1")}>FR Only</li>
                        <li key={"tab2"} className={activeTab === "tab2" ? "active" : ""} onClick={() => setActiveTab("tab2")}>Religious</li>
                        <li key={"tab3"} className={activeTab === "tab3" ? "active" : ""} onClick={() => setActiveTab("tab3")}>Other</li>
                    </ul>
                    <div className="Minitools-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Event Date</th>
                                    <th>Nesting Date</th>
                                </tr>
                            </thead>
                            
                                {
                                    activeTab === "tab1" ? 
                                        <tbody>{
                                            datesFest.map(item => {
                                                return (
                                                    <tr key={item[0]}>
                                                        <td key={item[0]+"_n"} className="Minitools-eventname">{item[0]}</td>
                                                        <td key={item[0]+"_d"}>{new Date(item[1]).toLocaleDateString()}</td>
                                                        <td key={item[0]+"_nd"}>{getNestDate(item[1])}</td>
                                                    </tr>
                                                );
                                            })
                                        }</tbody>
                                    : null
                                    
                                }
                                {
                                    activeTab === "tab2" ? <tbody>{ getReligionTableRows() }</tbody> : null
                                }
                                {
                                    activeTab === "tab3" ? <tbody>{ getOtherTableRows() }</tbody> : null
                                }
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
    );
}