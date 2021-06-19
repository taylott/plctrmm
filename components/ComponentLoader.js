import TourDates from './TourDates'
import LinkList from './LinkList'
import TextArea from './TextArea'
import Image from './Image'
import Logo from './Logo'
import MediaPlayer from './MediaPlayer'

const Components = {
  'tourDates': TourDates,
  'linkList': LinkList,
  'textArea': TextArea,
  'image': Image,
  'mediaPlayer': MediaPlayer,
  'logo': Logo
}
 
const  ComponentLoader = ({block}) => {
  if (typeof Components[block.blockType] !== 'undefined') {
    const Component = Components[block.blockType]
    return <Component block={block}/>
  }
  return (<p>The component <strong>{block.blockType}</strong> has not been created yet.</p>)
}
 
export default ComponentLoader