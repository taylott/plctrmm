import Head from 'next/head'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ComponentLoader from '../components/ComponentLoader'
import {extract} from 'oembed-parser'

export default function Home({ data, embeds }) {

  return (
    <div className="wrap">
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Header/>
        <main className="site-content w-full mx-auto my-5 rounded-md overflow-hidden">
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
        </main>
        <Footer/>
        <style jsx>{`
          :global(body) {
            background: ${data.theme.backgroundColour ?? '#fff'};
            display:flex;
            flex-direction:column;
            justify-content:center;
            min-height:100vh;
            color:${data.theme.textColour ?? '#000'};
          }
          :global(a) {
            color:${data.theme.linkColour ?? '#000'};
          }
          main {
            max-width:${data.theme.maxContentWidth ?? '600px'};
          }
          :global(.button) {
            color:${data.theme.buttonTextColour ?? 'white'};
            background-color:${data.theme.buttonBackgroundColour ?? 'black'};
            border-color:${data.theme.buttonBackgroundColour ?? 'black'};
          }
          :global(.button):hover {
            color:${data.theme.buttonHoverTextColour ?? 'white'};
            background-color:${data.theme.buttonHoverBackgroundColour ?? 'black'};
            border-color:${data.theme.buttonHoverBackgroundColour ?? 'black'};
          }
        `}</style>
    </div>
  )
}

export async function getServerSideProps(context) {
  
  const { slug } = context.query
  const apiBase = process.env.API_BASE

  console.log(apiBase)

  const res = await fetch(`${apiBase}/page/${slug}`);
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  let embeds = {};

  for (let i = 0; i < data.oembeds.length; i++) { 
    let o = await extract(data.oembeds[i].source).then((oembed) => {
      return oembed
    }).catch((err) => {
      console.trace(err)
    });
    let assoc = data.oembeds[i].assoc;
    embeds[assoc] = o
  }

  return {
    props: {data, embeds}, // will be passed to the page component as props
  }
}