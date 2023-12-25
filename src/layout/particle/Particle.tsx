import React from 'react'
import {useCallback} from 'react'
import type {Container, Engine} from 'tsparticles-engine'
import Particles from 'react-tsparticles'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import {loadSlim} from 'tsparticles-slim'
import {ThemeSet} from '../../styles/ThemeStyles.styled' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

//===============================================================================================================================================================

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 300,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: `${ThemeSet.color.font.yellow.yellow50}`
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 30
                    },
                    opacity: {
                        value: 1
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min: 1, max: 3}
                    }
                },
                detectRetina: true
            }}
        />
    )
}



