export const ThemeSet = {

    color: {
        background: {
            body: '#191919',
            header: {
                header: '#191919',
                headerPopUp: '#3c3c3c'
            },
            card: {
                cardGradient: 'linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%)',
                card: '#363636'
            },
            button: {
                buttonGradient: 'linear-gradient(87deg, #E2A300 4.47%, #E29500 95.53%)',
                button: 'rgba(226, 158, 0, 0.48)'
            }
        },
        font: {
            headerLogo: 'rgba(57, 125, 140, 0.9)',
            yellow: {
                yellow90: 'rgba(255, 217, 102, 0.9)',
                yellow70: 'rgba(255, 217, 102, 0.7)',
                yellow50: 'rgba(255, 217, 102, 0.5)'
            },
            grey: {
                grey90: 'rgba(222, 222, 222, 0.9)',
                grey70: 'rgba(222, 222, 222, 0.7)'
            }
        },
        border: {
            form: {
                form: '#DEC14EFF',
                formFocus: '#DEC14EFF'
            }

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

    //===============================================================================================================================================================


    // old------------------------------------------------------------------------------------
    colors: {
        BackgroundMain: '#191919',
        BackgroundHeader: '#191919',
        MobileMenuBackground: `#3c3c3c`,
        BackgroundCard: '#363636',
        BackgroundCardGradient: 'linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%)',
        Font: '#EBE8E3',
        HeaderLogo: '#397D8C',
        ButtonBackground: 'linear-gradient(87deg, #E2A300 4.47%, #E29500 95.53%)',
        ButtonShadow: 'rgba(226, 158, 0, 0.48)',
        FormFocusBorderColor: '#DEC14EFF',
        FormFocusShadow: 'rgba(226, 158, 0, 0.48)'
    },

    fontOpacity: `0.9`,

    animations: {
        transition: '.2s ease'
    }

}