import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const BoxesCore = ({ className, ...rest }) => {
    const rows = new Array(20).fill(1); // Balanced for coverage and performance
    const cols = new Array(40).fill(1); // Balanced for coverage and performance
    let colors = [
        "#7dd3fc", // sky-300
        "#f9a8d4", // pink-300
        "#86efac", // green-300
        "#fde047", // yellow-300
        "#fca5a5", // red-300
        "#d8b4fe", // purple-300
        "#93c5fd", // blue-300
        "#a5b4fc", // indigo-300
        "#c4b5fd", // violet-300
    ];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-50%,-50%) skewX(-48deg) skewY(14deg) scale(1.0) rotate(0deg) translateZ(0)`,
                willChange: 'transform',
            }}
            className={twMerge(
                "absolute left-1/2 top-1/2 p-4 flex w-[200%] h-[200%] z-0 ",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className="w-32 h-16 border-l border-slate-300 relative"
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: getRandomColor(),
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="w-32 h-16 border-r border-t border-slate-300 relative"
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-400 stroke-[1px] pointer-events-none"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export const BackgroundBoxes = React.memo(BoxesCore);
