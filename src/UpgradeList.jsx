import './UpgradeList.css'
import UpgradeComp from './UpgradeComp.jsx'

const Upgrades = [
    { name: 'Crono', cost: 3, cps: 0.01 },            // Clicks por segundo
    { name: 'DinoClicker', cost: 200, cps: 5 },
    // { name: 'SpaceLaserClick', cost: 800, cps: 15 },
    // { name: 'AlienAutoclicker', cost: 2500, cps: 50 },
    // { name: 'QuantumProcessor', cost: 10000, cps: 150 }
];

function UpgradeList({count, setCount, clickVal, setClickVal, setRotation}) {
    return (
        <div className='UpgradeList-container'>
            {Upgrades.map(upg => (
                <UpgradeComp
                    key={upg.name}
                    name={upg.name}
                    UpgCost={upg.cost}
                    cps={upg.cps}
                    count={count}
                    setCount={setCount}
                    clickVal={clickVal}
                    setClickVal={setClickVal}
                    setRotation={setRotation}
                />
            ))}
        </div>
    )
}

export default UpgradeList
