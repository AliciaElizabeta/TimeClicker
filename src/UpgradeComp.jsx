import { useState } from 'react'
import './UpgradeComp.css'

function UpgradeComp({name}){
    const[lv, setLV] = useState(0)
    const[cost, setCost] = useState(100)
    
    return(
        <div>
            <button>
                <div className="UpgradeComp">
                    {name}
                    <span>{cost} sec.</span>
                    <span style={{position:"relative", left:"75%"}}>{lv}</span>
                </div>
            </button>
        </div>
    )
}

export default UpgradeComp;