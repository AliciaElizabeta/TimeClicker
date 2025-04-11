import './UpgradeList.css'
import UpgradeComp from './UpgradeComp.jsx'

const Upgrades = ['Crono', 'DinoClicker', 'SpaceLaserClick']

function UpgradeList() {
    return (
        <div className='UpgradeList-container'>
            {Upgrades.map(upg => (
                <UpgradeComp key={upg} name={upg} />
            ))}
        </div>
    )
}

export default UpgradeList
