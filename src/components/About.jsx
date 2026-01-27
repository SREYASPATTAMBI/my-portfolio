import { motion } from 'framer-motion';
import sreyasWorking from '../assets/sreyas_working.png';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                            Building logic into <br />
                            <span className="text-gray-400 dark:text-secondary">beautiful experiences.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-secondary leading-relaxed font-light">
                            <p>
                                Hello! I'm <span className="font-semibold text-gray-900 dark:text-white">Sreyas</span>. My journey sits at the intersection of logical data science and creative web development. I don't just build websites; I build intelligent interfaces that understand and adapt to users.
                            </p>
                            <p>
                                With a strong background in Machine Learning and a flair for modern UI/UX, I create applications that are both powerful "under the hood" and stunning on the surface.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { count: "10+", label: "Projects Completed" },
                                    { count: "93%", label: "Model Accuracy" },
                                    { count: "3", label: "Years Coding" },
                                    { count: "100%", label: "Client Satisfaction" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-2 border-gray-200 dark:border-zinc-800 pl-6">
                                        <h4 className="text-3xl font-bold text-black dark:text-white">{stat.count}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-tertiary relative">
                            <img
                                src={sreyasWorking}
                                alt="Sreyas Working"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Decorative Element */}
                            <div className="absolute bottom-6 right-6 bg-white dark:bg-tertiary p-6 rounded-xl shadow-xl dark:shadow-2xl dark:shadow-black/50 max-w-xs transition-colors duration-300">
                                <p className="text-gray-900 dark:text-white font-medium text-sm italic">
                                    "Code is poetry written for machines."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
