import { useState, useEffect } from 'react'
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
  5 : 1,
  10 : 2,
  20 : 3,
  30 : 4
}

const planetClasses = {
  0: 'planet0-class',
  1: 'planet1-class',
  2: 'planet2-class',
  3: 'planet3-class',
  4: 'planet4-class',
}

function App() {
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [planet, setPlanet] = useState(planetList[0])
  const [planetClass, setPlanetClass] = useState(planetClasses[0])

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

  function handleClick(){
    setCount((c) => c + 1)
    setRotation((r) => r + 20)

  }

  return (
    <>
      <h1>Time clicker</h1>
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
    </>
  )
}

export default App
