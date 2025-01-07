interface Styles {
    containerLayout: object,
    containerLayoutMoovie: object
}

export const styles: Styles = {
    containerLayout: {
        display: 'flex',
        minHeight: '800px',
        marginTop: '-4px',
        '@media screen and (max-width: 500px)': {
            flexDirection: 'column'
        },
    },
    containerLayoutMoovie: {
        display: 'flex',
        // minHeight: '700px',    
    }
}