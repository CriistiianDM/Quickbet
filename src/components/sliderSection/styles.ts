interface Styles {
    containerCard: object,
    titlePrimary: object,
    containerSlider: object,
    dateText: object,
    cardActions: object
}

export const styles: Styles = {
    containerCard: { 
        width: 200, 
        height: '370px', 
        marginRight: '50px', 
        background: '#262626',
        borderRaduis: '10px',
        cursor: 'pointer',
        '@media screen and (max-width: 1290px)': {
            marginRight: '30px',
        },
        '@media screen and (max-width: 1024px)': {
            marginRight: '20px',
        },
        '@media screen and (max-width: 820px)': {
            marginRight: '20px',
        },
        '@media screen and (max-width: 500px)': {
            marginRight: '20px',
        }
    },
    containerCardRecommendation: {
        height: '260px', 
        background: '#3A3A3A',
        marginRight: 'unset !important',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    },
    titlePrimary: { 
        color: '#F6F6F6', 
        fontWeight: 800, 
        fontSize: '14px',
        display: '-webkit-box',
        '-webkit-line-clamp': '1',
        '-webkitBoxOrient': 'vertical',
        overflow: 'hidden',
    },
    dateText: { 
        color: '#F6F6F6', 
        fontSize: '9px'
    },
    cardActions: { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '25px',
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            '& button': {
                padding: 'unset',
                height: '30px'
            }
        }
    },
    containerSlider: { 
        padding: '40px 0',
        width: "100%", 
        margin: "0 auto", 
        paddingLeft: '40px', 
    },
    containerSliderRecommendation: {
        padding: '40px',
        '& > h4': {
            marginLeft: '20px'
        },
        '& > div > div > div > div': {
            display: 'flex !important',
            justifyContent: 'center'
        }
    },
    titlePrimaryContent: {
        padding: '10px 10px 0',
    },
    contentCard: {
        padding: 'unset !important',
    },
    sliderContainerPrimary: {
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available',
        maxWidth: 'calc(100% - 260px)',
        '@media screen and (max-width: 500px)': {
            maxWidth: 'unset',
        }
    }
}