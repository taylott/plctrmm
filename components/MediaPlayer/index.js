const MediaPlayer = ({ block }) => {

    const q = block.blockContent.source.split('?')
    const params = new URLSearchParams(q[1])

    if (!params.has('v')) return <p>No Video Added</p>

    const id = params.get('v')
   
    return (
        <div className="media-player">
            <div className="poster" onClick={e => e.target.closest('.poster').classList.add('hide')}>
                <div className="play-button"></div>
                <img src={block.blockContent.image.url} alt={block.blockContent.image.title} />
            </div>
            <div className="player">
               
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <style jsx>{`
                .media-player {
                    width:100%;
                    position:relative;
                    cursor: pointer;
                }
                .poster {
                    position:relative;
                    z-index:5;
                }
                .poster.hide {
                    z-index:0;
                }
                .play-button {
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%) scale(1);
                    border: 0;
                    background: transparent;
                    box-sizing: border-box;
                    width: 0;
                    height: 74px;
                    border-color: transparent transparent transparent ${block.blockContent.buttonColour ?? 'black'};
                    transition: 100ms all ease;
                    
                    border-style: solid;
                    border-width: 37px 0 37px 60px;
                  }
                .play-button.paused {
                    border-style: double;
                    border-width: 0px 0 0px 60px;
                }
                .media-player:hover .play-button {
                    transform:translate(-50%,-50%) scale(1.05);
                }
                :global(.player > *) {
                    z-index:1;
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%!important;
                    height:100%!important;
                    max-width:100%!important;
                    max-height:100%!important;
                }
                .media-player:after {
                    padding-top:${block.blockContent.ratio};
                    display:block;
                    content:"";
                    width:100%;
                }
            `}</style>
        </div>
    )
}

export default MediaPlayer