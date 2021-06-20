import {extract} from 'oembed-parser'

const PageContent = ( { apiBase, site, slug } ) => {
  const res = await fetch(`${apiBase}/${site}/${slug}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  let embeds = {};

  if (data.oembeds) {
    for (let i = 0; i < data.oembeds.length; i++) { 
      let o = await extract(data.oembeds[i].source).then((oembed) => {
        return oembed
      }).catch((err) => {
        console.trace(err)
      });
      let assoc = data.oembeds[i].assoc;
      embeds[assoc] = o
    }
  }

  return (
      <div> 
        {
          data.content.map( (block, index) => {
              if (block.blockType == 'mediaPlayer') {
                block.blockEmbed = embeds[block.blockID]
              }
              return <ComponentLoader key={ 'block_' + index } block={block}/>
            }
          )}
      </div>
  )
}

export default PageContent