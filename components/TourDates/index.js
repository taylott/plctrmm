import React from 'react'
import TourDate from './TourDate'

const TourDates = ({ block }) => {

  const cls = "event-list my-5";

  return (
    <div className={ cls }>
      {
        block.blockContent.events.map((item,index) => <TourDate key={ index + '_' + item.city } item={item}/>)
      }
    </div>
  )
}

export default TourDates