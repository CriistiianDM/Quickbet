interface Styles {
    containerLogin: object,
    contentDialog: object
}

export const styles: Styles = {
    containerLogin: {
        '& .MuiPaper-root': {
            background: 'red',
            width: '95%',
            maxWidth: '100%',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(30px)',
            // opacity: '0.9',
            height: '100%',
            maxHeight: '700px'
        }
    },
    contentDialog: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '2px',
        '& > div:first-of-type': {
            display: 'flex',
            flexDirection: 'column',
            width: '55%'
        },
        '& > div:last-of-type': {
            width: '45%',
            height: '100%',
            background: 'rgba(28, 28, 28, 1)'
        }
    },
    containerBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        '& button': {
            background: 'rgba(38, 38, 38, 1)',
            textTransform: 'capitalize'
        }
    },
    activeBtn: {
        background: 'rgba(240, 185, 11, 1)'
    },
    contentRegister: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        '& form': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '25px',
            padding: '10px',
            width: '100%',
        },
        '& form > button': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(240, 185, 11, 1)',
            color: 'rgba(52, 52, 52, 1)',
            width: '70%'
        }
    },
    contentAlerts: {
        height: '20%',
        textAlign: 'center'
    },
    containerMenssage: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '30px',
        gap: '20px',
        '& h4': {
            maxWidth: '80%',
            textAlign: 'center',
            height: '13%',
            overflow: 'hidden'
        },
        '& span': {
            maxWidth: '80%',
            textAlign: 'center',
            height: '20%',
            overflow: 'hidden'
        }
    },
    inputForm: {
        width: '70%',
        background: 'rgba(246, 246, 246, 1)',
        color: 'rgba(113, 113, 113, 1)',
        borderRadius: '5px'
    }
}