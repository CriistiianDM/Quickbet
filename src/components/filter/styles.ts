interface Styles {
    containerFilter: object
}

export const styles: Styles = {
    containerFilter: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '260px',
        width: '30%',
        padding: '15px',
        background: 'var(--bg-filter)',
        heigth: '100%',
        '@media screen and (max-width: 500px)': {
            width: '100%',
            maxWidth: 'unset'
        },
    }
}