import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            // Increased to 150 for a denser "galaxy" feel
            for (let i = 0; i < 150; i++) {
                newStars.push({
                    id: i,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    size: Math.random() * 2 + 1, // 1px to 3px
                    // Much larger delay range to ensure asynchronous twinkling
                    delay: Math.random() * 10,
                    duration: Math.random() * 3 + 2, // 2s to 5s duration
                    opacity: Math.random(), // Initial random opacity
                });
            }
            setStars(newStars);
        };
        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden dark:block">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        // Enhanced glow effect: white core, blueish/purple aura
                        backgroundColor: '#fff',
                        boxShadow: `0 0 ${star.size * 4}px ${star.size}px rgba(100, 100, 255, 0.5)`
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0, 1, 0], // Full blink cycle
                        scale: [0.5, 1.5, 0.5], // Pulse effect
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    }}
                />
            ))}

            {/* Deep Galaxy Gradient Overlay */}
            <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-[#050816]/80 to-[#050816] opacity-100 mix-blend-overlay" />

            {/* Meteors */}
            <Meteors number={7} />
        </div>
    );
};

const Meteors = ({ number = 20 }) => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const meteorStyles = new Array(number).fill(true).map(() => ({
            top: Math.floor(Math.random() * 100) + "%", // Random vertical position (0-100%)
            left: Math.floor(Math.random() * (window.innerWidth - -500) + -500) + "px",
            animationDelay: Math.random() * (1 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (8 - 2) + 2) + "s",
        }));
        setMeteors(meteorStyles);
    }, [number]);

    return (
        <>
            {meteors.map((style, idx) => (
                <span
                    key={"meteor" + idx}
                    className="pointer-events-none absolute left-1/2 top-1/2 -ml-1 -mt-1 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
                    style={style}
                >
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                </span>
            ))}
        </>
    );
};

export default StarBackground;
