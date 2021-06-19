const Image = ( {block} ) => {
    //no width or height attributes yet
    return (
        
        <div className={`flex w-full justify-${block.blockContent.align}`}>
            <img src={block.blockContent.url} alt={block.blockContent.title}/>
        </div>
    )
}

export default Image;