interface Styles {
    containerLogin: object,
    contentDialog: object,
    containerBtn: object,
    activeBtn: object,
    contentRegister: object,
    contentAlerts: object,
    containerMenssage: object,
    inputForm: object
}

export const styles: Styles = {
    containerLogin: {
        '& .MuiPaper-root': {
            width: '95%',
            maxWidth: '1300px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(30px)',
            // opacity: '0.9',
            height: '100%',
            maxHeight: '700px',
            '@media screen and (max-width: 1024px)': {
                maxHeight: '500px',
            }          
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
            width: '55%',
            '@media screen and (max-width: 500px)': {
                width: '100%'
            }    
        },
        '& > div:last-of-type': {
            width: '45%',
            height: '100%',
            background: 'rgba(28, 28, 28, 1)',
            '@media screen and (max-width: 500px)': {
                display: 'none',
            }            
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
            width: '70%',
            '@media screen and (max-width: 900px)': {
                fontSize: '11px'
            },
            '@media screen and (max-width: 500px)': {
                width: '100%',
            }
        }
    },
    contentAlerts: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        textAlign: 'center',
        '& span': {
            '@media screen and (max-width: 900px)': {
                fontSize: '13px',
                lineHeight: 1
            },
            '@media screen and (max-width: 500px)': {
                fontSize: '9px',
            }    
        }
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
            overflow: 'hidden',
            '@media screen and (max-width: 1024px)': {
                fontSize: '20px'
            }          
        },
        '& span': {
            maxWidth: '80%',
            textAlign: 'center',
            height: '20%',
            overflow: 'hidden',
        }
    },
    inputForm: {
        width: '70%',
        background: 'rgba(246, 246, 246, 1)',
        color: 'rgba(113, 113, 113, 1)',
        borderRadius: '5px',
        '@media screen and (max-width: 500px)': {
            width: '100%',
        }   
    }
}