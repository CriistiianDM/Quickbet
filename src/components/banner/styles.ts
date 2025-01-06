interface Styles {
    containerBanner: object,
    containerContentBanner: object
}

export const styles: Styles = {
    containerBanner: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        overflow: 'hidden',
        height: '560px'
    },
    containerContentBanner: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: 99,
        '& > div:first-of-type': {
            display: 'flex',
            width: '30%',
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
                padding: '10px 0'
            }
        }
    }
}