import Icon from '@/app/components/common/icon'
import Input from '@/app/components/common/input'
import { InputTypes } from '@/app/components/common/input/constants'
import { IconTypes } from '@/app/facts/icon-list'
import React from 'react'
import { useDays } from './DaysContext'

const Place = ({place, places, setPlaces, dayId}) => {
     const {id, name, link} = place;

     const handleLocationLinkChanged = (e) => {
        setPlaces(dayId, places.map(plc => plc.id === id ? {...plc, link: e.target.value} : plc));
      }
    
      const handleLocationNameChanged = (e) => {
        setPlaces( dayId, places.map(plc => plc.id === id ? {...plc, name: e.target.value} : plc));
      }
    
  return (
    <div className="day-loc" key={id}>
      
      <Icon icon={IconTypes.LOCATION_ON_OL}  className="loc-icon"/>
      <Input type={InputTypes.TEXT} variant="standard" label={"Location Name"} placeholder={"Location Name"} className="loc-name" value={name} onChange={handleLocationNameChanged}/>
      <Input type={InputTypes.TEXT} variant="standard" label={"Location Link"} className="loc-url" value={link} onChange={handleLocationLinkChanged}/>
      <div className='loc-rmv'>x</div>
    </div>
  )
}

export default Place
