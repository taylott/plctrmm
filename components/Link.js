import Icon from './Icon';

const Link = ( { attr } ) => {
  const linkCls = attr.cls ?? "link"
  const linkTxt = attr.text ?? "Open"
  const linkId = attr.id ?? ""
  const linkBg = attr.style.background ?? 'inherit';
  const linkCol = attr.style.col ?? 'inherit';
  const linkHovBg = attr.style.hover.background ?? 'inherit';
  const linkHovCol = attr.style.hover.col ?? 'inherit';

  const linkIcon = attr.icon ? <Icon col={ linkCol } cls={attr.icon} /> : ''

  return (
    <a target="_blank" rel="noopener" id={ linkId } className={ linkCls } href={ attr.link }>
      { linkIcon }
      <span>{ linkTxt }</span>
     
      <style jsx>{`
        a {
          background:${linkBg};
          color:${linkCol};
          fill:${linkCol};
        }
        a:hover {
          background:${linkHovBg};
          color:${linkHovCol};
          fill:${linkHovCol};
        }
      `}
      </style>
    </a>
  )
}

export default Link