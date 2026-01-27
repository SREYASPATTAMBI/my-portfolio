import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, Globe, Server, Eye, MessageSquareText, Search, Terminal } from 'lucide-react';
import { SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiPython, SiPandas, SiNumpy, SiPostgresql, SiTableau, SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiGithub, SiFramer } from 'react-icons/si';
import { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState("Machine Learning");

    const skillCategories = [
        {
            id: "Machine Learning",
            title: "Machine Learning",
            icon: Brain,
            description: "Designing intelligent agents and predictive models.",
            skills: [
                { name: "Scikit-learn", icon: SiScikitlearn },
                { name: "TensorFlow", icon: SiTensorflow },
                { name: "Keras", icon: SiKeras },
                { name: "Deep Learning", icon: Brain },
                { name: "NLP", icon: MessageSquareText },
                { name: "Computer Vision", icon: Eye },
                { name: "Model Deployment", icon: Server },
                { name: "PyTorch", icon: SiPytorch }
            ]
        },
        {
            id: "Data Science",
            title: "Data Science",
            icon: Database,
            description: "Transforming raw data into strategic insights.",
            skills: [
                { name: "Python", icon: SiPython },
                { name: "Pandas", icon: SiPandas },
                { name: "NumPy", icon: SiNumpy },
                { name: "SQL", icon: SiPostgresql },
                { name: "Matplotlib", icon: SiPython },
                { name: "Seaborn", icon: SiPython },
                { name: "Tableau", icon: SiTableau },
                { name: "EDA", icon: Search },
                { name: "Data Mining", icon: Database }
            ]
        },
        {
            id: "Web Development",
            title: "Web Development",
            icon: Globe,
            description: "Building fast, responsive, and modern applications.",
            skills: [
                { name: "React.js", icon: SiReact },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "JavaScript (ES6+)", icon: SiJavascript },
                { name: "Node.js", icon: SiNodedotjs },
                { name: "HTML5", icon: SiHtml5 },
                { name: "CSS3", icon: SiCss3 },
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "REST APIs", icon: Terminal },
                { name: "Framer Motion", icon: SiFramer }
            ]
        }
    ];

    const activeContent = skillCategories.find(cat => cat.id === activeTab);

    return (
        <section id="skills" className="py-32 bg-slate-50 dark:bg-transparent relative transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-slate-100 dark:bg-tertiary border border-slate-200 dark:border-white/10 text-slate-600 dark:text-secondary text-xs font-bold uppercase tracking-widest">
                        Technical Arsenal
                    </div>
                    <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Skills & Expertise</h2>
                </div>

                {/* Premium Tabs moved to Center */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white dark:bg-tertiary rounded-full border border-slate-200 dark:border-white/10 inline-flex shadow-sm">
                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === category.id
                                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                                    : 'bg-transparent text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <category.icon size={16} />
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white dark:bg-tertiary rounded-[2rem] border border-slate-200 dark:border-white/5 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
                    >
                        <div className="flex flex-col md:flex-row gap-8 md:items-center mb-10 border-b border-slate-100 dark:border-white/10 pb-10">
                            <div className="w-16 h-16 bg-slate-50 dark:bg-black-200 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white border border-slate-100 dark:border-white/10 shrink-0">
                                <activeContent.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{activeContent.title}</h3>
                                <p className="text-slate-500 dark:text-gray-400 mt-1">{activeContent.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {activeContent.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="h-full flex items-center gap-3 p-4 bg-slate-50 dark:bg-black-100 rounded-xl border border-slate-100 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30 hover:shadow-sm transition-all group">
                                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-tertiary flex items-center justify-center text-slate-600 dark:text-secondary group-hover:text-black dark:group-hover:text-white transition-colors shrink-0 shadow-sm border border-slate-100 dark:border-white/5">
                                            <skill.icon size={16} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 dark:text-secondary group-hover:text-slate-900 dark:group-hover:text-white">{skill.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
