import { useState } from 'react';
import ToggleSwitch from '../Utils/ToggleSwitch.js'

export function GenCheck(){

    //Generations
    // Pair of lines of text entry boxes - id? could provide links
    // alternatively full tree
    // option to check 'include breeding bug'
    // male/female toggle that removes last box
    // make last box green

    const [useBreedBug, setUseBreedBug] = useState(false);
    const [isLeftMale, setIsLeftMale] = useState(false);
    const [isRightMale, setIsRightMale] = useState(false);

    return(
        <div>
            <h2 className="Minitools-title">BREEDING GENERATIONS CHECKER</h2>
            <br/>
            <label className='Minitools-malelabel'>Common Ancestor</label>
            <br/>
            <input/>
            <br/>
            <br/>
            <div className="Minitools-gendiv">
                {
                    useBreedBug ? 
                        <div className='Minitools-toggle Minitools-maletoggle'>
                            <label className='Minitools-malelabel'>Male</label>
                            <ToggleSwitch isToggled={isLeftMale} setIsToggled={setIsLeftMale}/>
                        </div> : ""
                }
                
                <div className="Minitools-genlist">
                    <input/>
                    <input/>
                    <input/>
                    <input className={useBreedBug && isLeftMale ? "canbreed" : ""}/>
                    <input className={!useBreedBug || !isLeftMale ? "canbreed" : ""}/>
                </div>
                <div className="Minitools-genlist">
                    <input/>
                    <input/>
                    <input/>
                    <input className={useBreedBug && isRightMale ? "canbreed" : ""}/>
                    <input className={!useBreedBug || !isRightMale ? "canbreed" : ""}/>
                </div>
                {
                    useBreedBug ? 
                        <div className='Minitools-toggle Minitools-maletoggle'>
                            <ToggleSwitch isToggled={isRightMale} setIsToggled={setIsRightMale}/>
                            <label className='Minitools-malelabel'>Male</label>
                        </div>: ""
                }
            </div>
            <br/>
            <div className='Minitools-toggle'>
                <label>Check with breeding bug:</label>
                <ToggleSwitch isToggled={useBreedBug} setIsToggled={setUseBreedBug}/>
            </div>
            <p><label>WARNING: Making use of the breeding bug is risky. As Mutron says <a href="https://www1.flightrising.com/forums/bug/2013509#post_23331142">here</a>, this may be fixed at some point.</label></p>
            
        </div>
    );
}