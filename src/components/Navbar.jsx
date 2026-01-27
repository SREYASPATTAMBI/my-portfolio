import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold text-gray-900 dark:text-white tracking-tight cursor-pointer"
                >
                    Sreyas.
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        Let's Talk
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-white" />
                        ) : (
                            <Moon size={20} className="text-gray-900" />
                        )}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-white" />
                        ) : (
                            <Moon size={20} className="text-gray-900" />
                        )}
                    </button>
                    <div className="text-gray-900 dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-white/10"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-gray-900 dark:text-white"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )
            }
        </nav >
    );
};

export default Navbar;
