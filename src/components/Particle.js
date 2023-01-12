import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    // <Particles
    //   id="tsparticles"
    //   params={{
    //     particles: {
    //       number: {
    //         value: 160,
    //         density: {
    //           enable: true,
    //           value_area: 1500,
    //         },
    //       },
    //       line_linked: {
    //         enable: false,
    //         opacity: 0.03,
    //       },
    //       move: {
    //         direction: "right",
    //         speed: 0.05,
    //       },
    //       size: {
    //         value: 1,
    //       },
    //       opacity: {
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.05,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onclick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //       },
    //       modes: {
    //         push: {
    //           particles_nb: 1,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }}
    // />

    <Particles
            id="tsparticles"
            params={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />


  );
}

export default Particle;
