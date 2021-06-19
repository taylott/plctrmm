import simpleIcons from 'simple-icons'
import createMarkup from "../../utilities/MarkUp"

const Icon = ( { cls, col } ) => {

    const icon = simpleIcons.Get(cls)
    const myHtml = createMarkup(icon.svg)
    const iconCol = col ?? 'inherit'

    return (
       <>
        <i className="icon mr-4" dangerouslySetInnerHTML={ myHtml }></i>
            <style jsx>{`
            i {
                color:${ iconCol };
                width:24px;
                height:24px;
            }
        `}</style>
        </>
    )
}

export default Icon