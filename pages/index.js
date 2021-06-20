import Head from 'next/head'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ComponentLoader from '../components/ComponentLoader'
import {extract} from 'oembed-parser'
import Theme from './Theme.js'

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
        <Theme theme={data.theme}/>
    </div>
  )
}

export async function getServerSideProps(context) {

  //hardcode the host for now because we're not ready for dynamic subdomains yet
  //const { host } = context.req.headers 

  const host = 'plctrmm'
  const slug = '__home__'
  const apiBase = process.env.API_BASE

  //do some request magic
  const res = await fetch(`${apiBase}/${host}/${slug}`)
  const data = await res.json()

  if (!data) {
    return {
      //notFound: true,
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