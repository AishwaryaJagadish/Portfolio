import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "transparent"
          },
          opacity: 1
        },
        fullScreen: {
          enable: true,
          zIndex: 10
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#8d8d8d"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8d8d8d",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
            },
            attract: {
              enable: false
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground; 