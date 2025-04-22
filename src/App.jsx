import { useState, useEffect } from 'react'
import UpgradeList from './UpgradeList.jsx'
import ActiveBonus from './ActiveBonus.jsx'
import planet0 from './assets/planet0.gif'
import planet1 from './assets/planet1.gif'
import planet2 from './assets/planet2.gif'
import planet3 from './assets/planet3.gif'
import planet4 from './assets/planet4.gif'

import './App.css'

const planetList = {
  0 : planet0,
  1 : planet1,
  2 : planet2,
  3 : planet3,
  4 : planet4
}

const nextPlanetClicks = {
  0 : 0,
  1000 : 1,
  5000 : 2,
  20000 : 3,
  100000 : 4
}

const planetClasses = {
  0: 'planet0-class',
  1: 'planet1-class',
  2: 'planet2-class',
  3: 'planet3-class',
  4: 'planet4-class',
}

function App() {
  const [clickVal, setClickVal] = useState(1)
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [planet, setPlanet] = useState(planetList[0])
  const [planetClass, setPlanetClass] = useState(planetClasses[0])
  const [floatingText, setFloatingText] = useState(null)
  const [floatingTexts, setFloatingTexts] = useState([])
  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (count === 0) return // para evitar que se dispare al principio
    setAnimate(true)
    const timeout = setTimeout(() => setAnimate(false), 300) // duración de la animación
    if(count in nextPlanetClicks){
      setPlanet(planetList[nextPlanetClicks[count]])
      setPlanetClass(planetClasses[nextPlanetClicks[count]])
    }
    return () => clearTimeout(timeout)
  }, [count])

  function handleClick(e){
    setCount((c) => Number((c + clickVal).toFixed(2)))
    setRotation((r) => r + 20)

    const id = crypto.randomUUID() // o Date.now() como fallback
    const x = e.clientX
    const y = e.clientY
    const newText = {
      id,
      value: `+${clickVal.toFixed(2)}`,
      x,
      y
    }
  
    // Añadir el nuevo texto al array
    setFloatingTexts(prev => [...prev, newText])
  
    // Quitarlo tras un tiempo
    setTimeout(() => {
      setFloatingTexts(prev => prev.filter(text => text.id !== id))
    }, 400)
  }

  return (
    <>
    <UpgradeList count={count} setCount={setCount} clickVal={clickVal} setClickVal={setClickVal}/>
    <div className="central-zone">
        {floatingTexts.map((text) => (
        <span
          key={text.id}
          className="floating-text"
          style={{
            position: 'fixed',
            left: text.x,
            top: text.y,
          }}
        >
          {text.value}
        </span>
      ))}

      <div className="card">
        <p>{count} seconds</p>
      </div>
      <div>
        <img
          src={planet}
          className={`logo react ${planetClass} ${animate ? 'animate' : ''}`}
          alt="React logo"
          style={{transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease-out' }}
          onClick={handleClick}
        />
      </div>
      <ActiveBonus></ActiveBonus>
    </div>
    
    </>
  )
}

export default App
