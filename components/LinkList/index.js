import React from 'react'
import Link from "../Link"

const LinkList = ({ block }) => {

  const style = block.blockContent.style ?? ''

  let linkListCls
  let linkCls

  switch(style){
    case "socialLinks":
      linkListCls = `link-list flex justify-center`
      linkCls = `link-list-link mx-3 my-4 hide-text w-6`
    break;
    case "blockLinks":
      linkListCls = `link-list`
      linkCls = `link-list-link flex px-3 py-5`
    break;
  }

  return (
    <div className={ linkListCls }>
      {
        block.blockContent.links.map((item,index) => {
          const linkProps = {
            icon:item.icon.value,
            id:item.linkId,
            link:item.link.value,
            text:(style == 'socialLinks') ? '' : item.link.customText,
            cls:linkCls,
            style: {
              col:block.blockContent.linkColour,
              background:block.blockContent.linkBackgroundColour,
              hover: {
                background:block.blockContent.linkHoverBackgroundColour,
                col:block.blockContent.linkHoverColour
              }
            }
          }
          return <Link attr={linkProps} key={ index }/>
        }
          
      )
    }
    </div>
  )
}

export default LinkList