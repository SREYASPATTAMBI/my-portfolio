import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Database, Activity, Smartphone, Signal } from 'lucide-react';
import { useRef } from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Automated EDA & ML System",
            category: "GenAI & Python",
            description: "Flagship Project. An intelligent system powered by a local Gemma LLM that performs automated data cleaning, feature engineering, and model selection.",
            tags: ["GenAI", "Gemma LLM", "Python"],
            links: { demo: "#", github: "https://github.com/SREYASPATTAMBI/EDA_AND_MODEL_BUILDING" },
            icon: Database,
            color: "bg-blue-500",
            image: "/images/eda-ml.png?v=4", // Reverted to AI Man Analyzing
            live: true
        },
        {
            title: "Heart Disease Risk Analysis",
            category: "Healthcare Analytics",
            description: "Analyzed confidential clinical data to identify high-risk patients. Handled data privacy, severe imbalance, and messy real-world records.",
            tags: ["Healthcare", "Python", "Privacy"],
            links: { demo: "#", github: "https://github.com/SREYASPATTAMBI/heart-diease-analysis/blob/main/heart%2Cpy" },
            icon: Activity,
            color: "bg-red-500",
            image: "/images/heart-risk.png?v=3", // Cache bust
            live: true
        },
        {
            title: "Telecom Churn Prediction",
            category: "Predictive Modeling",
            description: "ML model to predict churn with 93% accuracy. Solved class imbalance using SMOTEENN and identified key churn drivers.",
            tags: ["ML", "Scikit-learn", "Pandas"],
            links: { demo: "#", github: "https://github.com/SREYASPATTAMBI/EDA_AND_MODEL_BUILDING/blob/main/FINISHED%20PROJECT.ipynb" },
            icon: Signal,
            color: "bg-purple-500",
            image: "/images/telecom-churn.png?v=3", // Cache bust
            live: false
        },
        {
            title: "Diabetes Risk Prediction",
            category: "HealthTech Application",
            description: "End-to-End ML application with a frontend UI and robust data pipeline. Focused on high Recall to ensure critical health risks aren't missed.",
            tags: ["Full Stack", "Web App", "Recall"],
            links: { demo: "#", github: "https://github.com/SREYASPATTAMBI/Diabetes-Risk-Prediction/blob/main/Disease%20Risk%20Prediction%20System.py" },
            icon: Smartphone,
            color: "bg-cyan-500",
            image: "/images/diabetes-risk.png?v=3", // Cache bust
            live: true
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-slate-100 dark:bg-tertiary border border-slate-200 dark:border-white/10 text-slate-600 dark:text-secondary text-xs font-bold uppercase tracking-widest">
                        Selected Works
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white tracking-tight mt-2">
                        FEATURED PROJECTS
                    </h2>
                </div>

                <div className="flex flex-col gap-8 pb-32">
                    {projects.map((project, index) => {
                        // Refined offsets: 80px start, 70px gap (User requested less than 120, but more than 40)
                        const stickyTop = 80 + (index * 70);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ top: `${stickyTop}px` }}
                                className="sticky z-0 bg-white dark:bg-tertiary rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-white/10 border-t-4 border-t-slate-100 dark:border-t-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden min-h-[500px] flex flex-col justify-center"
                            >
                                <div className="grid md:grid-cols-2 gap-12 h-full items-center">
                                    {/* Left Content */}
                                    <div className="flex flex-col justify-center h-full order-2 md:order-1 relative z-10">
                                        <div>
                                            {/* Header Row: Number + Category */}
                                            <div className="flex items-center gap-6 mb-8">
                                                {/* Darker Number Color for Visibility */}
                                                <span className="text-6xl font-black text-slate-300/80 dark:text-white/10 font-mono select-none">
                                                    0{index + 1}
                                                </span>
                                                <h4 className="text-blue-600 dark:text-secondary text-sm font-bold tracking-widest uppercase mb-1 bg-blue-50 dark:bg-black-100 px-3 py-1 rounded-full inline-block">
                                                    {project.category}
                                                </h4>
                                            </div>

                                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                                {project.title}
                                            </h3>

                                            <p className="text-lg text-slate-600 dark:text-secondary leading-relaxed mb-8 max-w-md font-medium">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-10">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-black-100 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-secondary text-xs font-bold uppercase tracking-wider rounded-lg">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-black-200 text-white dark:text-white rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 hover:bg-slate-800 dark:hover:bg-black-100 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                                            >
                                                <Github size={20} />
                                                VIEW CODE
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right Content / Image Area */}
                                    <div className="order-1 md:order-2 relative h-64 md:h-[400px] w-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-black-100 border border-slate-200 dark:border-white/5 group shadow-inner">
                                        {/* Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Decorative Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
