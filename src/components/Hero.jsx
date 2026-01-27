import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { BackgroundBoxes } from './ui/background-boxes';


const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative w-full overflow-hidden bg-white dark:bg-transparent flex-col transition-colors duration-300">
            {/* Aceternity Background Boxes (Light Mode Only) */}
            <div className="absolute inset-0 w-full h-full bg-slate-50 z-0 overflow-hidden dark:hidden">
                <BackgroundBoxes />
            </div>

            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full bg-transparent dark:bg-transparent z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_50%)]"></div>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/10 dark:bg-primary/90 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center pointer-events-none">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tight mb-8 relative z-20 pointer-events-auto"
                >
                    DATA <span className="text-slate-400 dark:text-secondary">×</span> DESIGN
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-600 dark:text-secondary max-w-2xl mx-auto text-xl md:text-2xl mb-12 leading-relaxed font-light relative z-20 pointer-events-auto"
                >
                    Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Sreyas</span>. I build intelligent systems and clean interfaces.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-6 relative z-20 pointer-events-auto"
                >
                    {[
                        { icon: Github, href: "https://github.com/sreyaspattambi" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/sreyas-kumar-765737372/" },
                        { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=sreyaspattambi@gmail.com" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm hover:shadow-md"
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-600 z-20"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
