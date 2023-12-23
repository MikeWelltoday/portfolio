import React from 'react'
import {useCallback} from 'react'
import type {Container, Engine} from 'tsparticles-engine'
import Particles from 'react-tsparticles'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import {loadSlim} from 'tsparticles-slim' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

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
                // background: {
                //     color: {
                //         value: '#0d47a1'
                //     }
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: 'push'
                        // },
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
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: 'rgba(192,168,85,0.39)'
                    },
                    links: {
                        color: 'rgba(232,201,61,0.76)',
                        distance: 200,
                        enable: true,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 20
                    },
                    opacity: {
                        value: 0.4
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min: 0.2, max: 1}
                    }
                },
                detectRetina: true
            }}
        />
    )
}