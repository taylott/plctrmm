import Link from "../Link"

const TourDate = ( { item} ) => {
    const d = new Date(item.startDate.date);
    const out = d.toLocaleDateString();

    const attr = {
      text:item.eventLink.customValue ?? 'Tickets',
      link:item.eventLink.value,
      cls:'button rounded-full py-1 px-3',
      style:{
        hover:{}
      }
    }
    
    return (
      <div className="flex event flex-wrap py-3">
        <div className="event-date w-1/5">
          { out }
        </div>
        <div className="event-location w-2/5">
          {`${item.venue}, ${ item.city}`}
        </div>
        <div className="event-country w-1/5">
          {item.country}
        </div>
        <div className="event-ticket w-1/5 text-right">
            <Link attr={attr}/>
        </div>
      </div>
    )
  }

  export default TourDate