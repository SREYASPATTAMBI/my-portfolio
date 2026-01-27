import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = window.localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        // Check if View Transitions API is supported
        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }



        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        transition.ready.then(() => {
            const maxDim = Math.hypot(window.innerWidth, window.innerHeight);
            const steps = 60; // More points for smoothness
            const startPoints = [`0px 0px`];
            const endPoints = [`0px 0px`];

            // Generate a Smooth Wavy Edge using Sine Waves
            for (let i = 0; i <= steps; i++) {
                const ratio = i / steps;
                const angle = ratio * Math.PI / 2; // 0 to 90 degrees quadrant

                // Start: Collapsed at corner
                startPoints.push("0px 0px");

                // End: Expanded Wave
                const baseR = maxDim * 1.5;
                // Add Smooth Wave: 3 full waves along the arc
                const waveFactor = Math.sin(ratio * Math.PI * 6) * 150;
                const r = baseR + waveFactor;

                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;

                endPoints.push(`${x}px ${y}px`);
            }

            // Close the polygon back to 0,0
            startPoints.push(`0px 0px`);
            endPoints.push(`0px 0px`);

            const startClip = `polygon(${startPoints.join(',')})`;
            const endClip = `polygon(${endPoints.join(',')})`;

            document.documentElement.animate(
                {
                    clipPath: [startClip, endClip],
                },
                {
                    duration: 2500, // Slow liquid flow
                    easing: 'ease-in-out',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    };

    return { theme, toggleTheme };
};
