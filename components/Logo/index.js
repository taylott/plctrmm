const Logo = ( {block} ) => {
    //no width or height attributes yet
    return (
        <div className={`logo mb-4 flex w-full justify-${block.blockContent.align}`}>
            <img src={block.blockContent.url} alt={block.blockContent.title}/>
            <style jsx>{`
                img {
                    max-width:${block.blockContent.maxWidth};
                }
            `}</style>
        </div>
    )
}

export default Logo;