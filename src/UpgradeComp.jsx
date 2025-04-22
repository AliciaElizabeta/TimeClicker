import { useState, useEffect, useRef } from 'react'
import './UpgradeComp.css'

function UpgradeComp({ name, UpgCost = 100, cps = 1, multiplier = 1.15, count, setCount, clickVal, setClickVal, setRotation }) {
    const [level, setLevel] = useState(0)
    const [cost, setCost] = useState(UpgCost)
    const buttonRef = useRef(null)


    const handleUpgrade = () => {
        if (count < cost) return  // ❌ No tienes suficiente
    
        setLevel(prev => prev + 1)
        setCount(prev => Number((prev - cost).toFixed(2)))  // 💸 Pagar la mejora
        const newClickVal = clickVal + cps
        setClickVal(newClickVal)
    
        if (setRotation) {
            setRotation(prev => prev - 20) // ⬅️ Rotar en sentido contrario
        }
    
        const newCost = Math.floor(UpgCost * Math.pow(multiplier, level + 1))
        setCost(newCost)
    }

    useEffect(() => {
        console.log("G")
        if (!buttonRef.current) return
        if (count < cost) {
            buttonRef.current.classList.add('unabled')
        } else {
            buttonRef.current.classList.remove('unabled')
        }
    }, [count, cost])
    

    return (
        <div className="UpgradeComp-container">
            <button ref={buttonRef} className="UpgradeComp-button" onClick={handleUpgrade}>
                <div className="UpgradeComp">
                    <span className="upgrade-name">{name}</span>
                    <span className="upgrade-cost">{cost} sec.</span>
                    <span className="upgrade-lv">Lv {level}</span>
                </div>
            </button>
        </div>
    )
}

export default UpgradeComp
