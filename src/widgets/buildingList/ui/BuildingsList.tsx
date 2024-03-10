import { useEffect, useState } from 'react'

import styles from './BuildingsList.module.scss'
import { BaseBuilding, Building, getAllBuildings } from 'entities/buildings'

interface BuildingsListProps {
    addBuilding: (newBuilding: Building) => void
}

const BuildingsList:React.FC<BuildingsListProps> = props => {
    const {
        addBuilding
    } = props

    const [buildings, setBuildings] = useState<Building[]>([])

    useEffect(() => {
        getAllBuildings().then(response => setBuildings(response))
    },[])
    


    return (
        <div className={styles.buildingsContainer}>
            {buildings.map(building => 
                <BaseBuilding
                    building={building}
                    onSubmit={addBuilding}
                />
            )}
        </div>
    )
}

export default BuildingsList