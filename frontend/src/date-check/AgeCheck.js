import { useState } from "react";
import "../CSS/Minitools.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function AgeCheck(){
    const growDays = 6;
    const msPerDay = 24*60*60*1000;

    const[birthDate, setBirthDate] = useState(new Date());
    const[adultDate, setAdultDate] = useState(new Date(birthDate.getTime()+(growDays*msPerDay)));
    const[ahDays, setAhDays] = useState(calculateAHDays(new Date()));

    const nextSaturday = nextDate(6);
    const nextSunday = nextDate(0);
    const daysToSaturday = Math.abs(calculateAHDays(nextSaturday));
    const daysToSunday = Math.abs(calculateAHDays(nextSunday));
    
    function updateAdultDate(newDate){
        setBirthDate(newDate);
        setAdultDate(new Date(newDate.getTime()+(growDays*msPerDay)));
        setAhDays(calculateAHDays(newDate));
    }

    function updateBirthDate(newDate){
        setAdultDate(newDate);
        setBirthDate(new Date(newDate.getTime()-(growDays*msPerDay)));
        setAhDays(calculateAHDays(new Date(newDate.getTime()-(growDays*msPerDay))));
    }

    function calculateAHDays(date){
        let currentDate = new Date();
        return Math.floor((currentDate.getTime() - date.getTime()) / msPerDay)
    }

    function nextDate(dayIndex) {
        var today = new Date();
        today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
        return today;
    }

    return(
        <div>
            <h2 className="Minitools-title">AGE-UP DATE CHECKER</h2>
            <br/>
            <div className="Minitools-body">
                <div className="Minitools-dateblock">
                    <label>Hatch: </label>
                    <DatePicker dateFormat="yyyy/MM/dd" selected={birthDate} onChange={(date) => updateAdultDate(date)}/>
                </div>
                <div className="Minitools-dateblock">
                    <label>Age up:</label>
                    <DatePicker dateFormat="yyyy/MM/dd" selected={adultDate} onChange={(date) => updateBirthDate(date)}/>
                </div>
                {
                    ahDays >= 0 ?
                        ahDays !== 0 ? 
                            <p>AH age: {ahDays === 1 ? "some hours/minutes" : `${ahDays-1}`} or {`${ahDays} day${ahDays > 1 ? 's' : ""}`} old</p>
                            : <p>AH age: Some hours/minutes old</p>
                        : ""
                }
            </div>
            <br/>
            <label className="Minitools-heading"><b>Hatchlings that will age up on or before next saturday (dom week end):</b></label>
            <div>
            <label>{ daysToSaturday > 5 ? `Hatch on or before ${new Date(nextSaturday.getTime()-(growDays*msPerDay)).toLocaleDateString}` : ""}</label>
                <label>{ 5-daysToSaturday <= 0 ?
                        5-daysToSaturday === 0 ? `1 day old or born ${new Date(nextSaturday.getTime()-(growDays*msPerDay)).toLocaleDateString()}` : "All current hatchlings"
                        : `${6-daysToSaturday} day${6-daysToSaturday === 1 ? '' : 's'} old, or ${5-daysToSaturday} day${5-daysToSaturday === 1 ? '' : 's'} old and born ${new Date(nextSaturday.getTime()-(growDays*msPerDay)).toLocaleDateString()}`
                    }
                </label>
            </div>
            <br/>
            <label className="Minitools-heading"><b>Hatchlings that will age up on or before next sunday (dom week start):</b></label>
            <div>
                <label>{ daysToSunday > 5 ? `Hatch on or before ${new Date(nextSunday.getTime()-(growDays*msPerDay)).toLocaleDateString}` : ""}</label>
                <label>{ 5-daysToSunday <= 0 ?
                        5-daysToSunday === 0 ? `1 day old or born ${new Date(nextSunday.getTime()-(growDays*msPerDay)).toLocaleDateString()}` : "All current hatchlings"
                        : `${6-daysToSunday} day${6-daysToSunday === 1 ? '' : 's'} old, or ${5-daysToSunday} day${5-daysToSunday === 1 ? '' : 's'} old and born ${new Date(nextSunday.getTime()-(growDays*msPerDay)).toLocaleDateString()}`
                    }
                </label>
            </div>
        </div>
    );
}