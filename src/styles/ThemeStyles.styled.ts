export const ThemeSet = {

    color: {
        background: {
            body: '#191919',
            header: {
                header: '#191919',
                headerPopUp: 'rgba(60, 60, 60, 0.95)'
            },
            card: {
                cardGradient: 'linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%)',
                card: '#363636'
            },
            button: {
                buttonGradient: 'linear-gradient(87deg, #E2A300 4.47%, #E29500 95.53%)',
                background: '#E2A300'
            }
        },
        font: {
            headerLogo: 'rgba(57, 125, 140, 0.9)',
            yellow: {
                yellow100: 'rgba(255, 217, 102, 1)',
                yellow90: 'rgba(255, 217, 102, 0.9)',
                yellow80: 'rgba(255, 217, 102, 0.8)',
                yellow70: 'rgba(255, 217, 102, 0.7)',
                yellow60: 'rgba(255, 217, 102, 0.6)',
                yellow50: 'rgba(255, 217, 102, 0.5)'
            },
            grey: {
                grey100: 'rgba(235, 232, 227, 1)',
                grey90: 'rgba(235, 232, 227, 0.9)',
                grey80: 'rgba(235, 232, 227, 0.8)',
                grey70: 'rgba(235, 232, 227, 0.7)',
                grey60: 'rgba(235, 232, 227, 0.6)',
                grey50: 'rgba(235, 232, 227, 0.5)',
                grey40: 'rgba(235, 232, 227, 0.4)',
                grey30: 'rgba(235, 232, 227, 0.3)',
                grey20: 'rgba(235, 232, 227, 0.2)',
                grey10: 'rgba(235, 232, 227, 0.1)'
            }
        },
        border: {
            form: {
                form: '#DEC14EFF',
                formFocus: '#DEC14EFF'
            }
        },
        button: {
            shadow: 'rgba(226, 158, 0, 0.48)'
        },
        form: {
            focusColor: '#DEC14EFF',
            focusShadow: 'rgba(226, 158, 0, 0.48)'
        },
        scrollbar: {
            track: '#232323',
            thumb: '#454545'
        }
    },

    media: {
        tablet: {
            media: 'screen and (max-width: 758px)',
            value: 758
        },
        mobile: {
            media: 'screen and (max-width: 576px)',
            value: 576
        },
        desktop: {
            media: 'screen and (min-width: 1030px)',
            value: 1030
        }
    },
    animations: {
        transition: '.2s ease'
    }
}