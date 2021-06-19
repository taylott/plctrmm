const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container mx-auto">
                <a
                href="https://plectrumm.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                > <img src="https://a.storyblok.com/f/65144/1500x500/0da35053a1/plectrumm-logo.png" alt="Plectrumm Logo"/></a>
            </div>
            <style jsx>
                { `
                footer {
                    position:fixed;
                    bottom:10px;
                    right:10px;
                    width:100px;
                    text-align:right;
              
                }
                img {
                  width:100%:
                  height:auto;
                }
                ` }
            </style>
        </footer>
    )
}

export default Footer