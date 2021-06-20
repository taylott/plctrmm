const Theme = ( { theme } ) => {
    return <style jsx global>{`
          :root {
            --body-bg:${theme.backgroundColour ?? '#fff'};
            --body-bg-image:${theme.backgroundImage ? `url('${theme.backgroundImage}')` : 'none'};
            --body-bg-image-opacity:${theme.backgroundImageOpacity ? theme.backgroundImageOpacity/100 : '1'};
            --body-bg-image-blur:${theme.backgroundImageBlur ?? '0'}px;
            --text-color:${theme.textColour ?? '#000'};
            --link-color:${theme.linkColour ?? '#000'};
            --content-width:${theme.maxContentWidth ?? '600px'};
            --button-color:${theme.buttonTextColour ?? 'white'};
            --button-background-color::${theme.buttonBackgroundColour ?? 'black'};
            --button-border-color::${theme.buttonBackgroundColour ?? 'black'};
            --button-hover-color:${theme.buttonHoverTextColour ?? 'white'};
            --button-hover-background-color::${theme.buttonHoverBackgroundColour ?? 'black'};
            --button-hover-border-color::${theme.buttonHoverBackgroundColour ?? 'black'};
          }
        `}</style>
}

export default Theme;