interface Styles {
    containerLayout: object
}

export const styles: Styles = {
    containerLayout: {
        display: 'flex',
        minHeight: '800px',
        marginTop: '-4px',
        '@media screen and (max-width: 500px)': {
            flexDirection: 'column'
        },
    }
}