interface Styles {
    containerBanner: object,
    containerContentBanner: object,
    containerRate: object,
    circular: object,
    containerActions: object,
    cardMediaImg: object
}

export const styles: Styles = {
    containerBanner: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover !important',
        backgroundRepeat: 'no-repeat !important',
        overflow: 'hidden',
        minHeight: '560px',
        '@media screen and (max-width: 500px)': {
            minHeight: '800px',
        }
    },
    containerContentBanner: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: 99,
        '& > div:first-of-type': {
            display: 'flex',
            width: '30%',
            minWidth: '380px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            '& button': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '305px',
                background: '#F0B90B',
                color: '#343434',
                fontSize: '15px',
                fontWeight: 600,
                padding: '10px 0',
                '@media screen and (max-width: 500px)': {
                    width: '248px',
                }
            },
            '@media screen and (max-width: 500px)': {
                width: '100%'
            }
        },
        '& > div:last-of-type': {
            width: '70%',
            maxWidth: 'calc(100% - 380px)',
            padding: '20px',
            '& > div:first-of-type': {
                '& h4.MuiTypography-root': {
                    display: '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkitBoxOrient': 'vertical',
                    overflow: 'hidden',
                    fontWeight: 700,
                    width: 'fit-content',
                    maxWidth: '404px',
                    '@media screen and (max-width: 900px)': {
                        fontSize: '28px'
                    },
                    '@media screen and (max-width: 500px)': {
                        maxWidth: '100%',
                    }
                },            
                '& > div:nth-of-type(1)': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#fff',
                    maxWidth: '404px',
                    '@media screen and (max-width: 900px)': {
                        maxWidth: '333px',
                    }
                },
                '& > div:nth-of-type(2) > p': {
                    display: '-webkit-box',
                    '-webkit-line-clamp': '5',
                    '-webkitBoxOrient': 'vertical',
                    overflow: 'hidden',
                    fontWeight: 400,
                    maxWidth: '80%',
                    color: '#fff',
                    textAlign: 'justify',
                    '@media screen and (max-width: 900px)': {
                        '-webkit-line-clamp': '3',
                    },
                    '@media screen and (max-width: 500px)': {
                        '-webkit-line-clamp': '4',
                        maxWidth: '100%'
                    }
                }
            },
            '@media screen and (max-width: 500px)': {
                maxWidth: '100%',
                width: '100%'
            }
        }
    },
    containerRate: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '80%',
        marginTop: '20px',
        '@media screen and (max-width: 900px)': {
            maxWidth: '100%',
        },
        '& > div:first-of-type': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            '& h5': {
                maxWidth: '60px',
                margin: 'unset',
                lineHeight: 1.14
            }
        },
        '& > button:first-of-type svg': {
            fontSize: '30px'
        }
    },
    circular: {
        '& > span': {
            height: '80px !important',
            width: '80px !important'
        },
        '& > div': {
            height: '80px',
            '& > div': {
                fontSize: '20px',
            }
        }
    },
    containerActions: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        padding: '20px',
        maxHeight: '250px',
        gap: '25px',
        overflow: 'hidden',
        '& > div': {
            padding: '7px 10px',
            border: '1px solid #F1CB51',
            color: '#F1CB51',
            borderRadius: '9px'
        },
        '@media screen and (max-width: 900px)': {
            maxWidth: '100%',
            gap: '10px'
        },
        '@media screen and (max-width: 500px)': {
            display: 'none'
        }
    },
    cardMediaImg: {
        width: '305px', 
        height: '395px',
        padding: '10px',
        // backgroundSize: 'contain',
        '@media screen and (max-width: 500px)': {
            width: '250px', 
            height: '300px',
        }
    }
}