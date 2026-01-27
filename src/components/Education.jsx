import { motion } from 'framer-motion';
import { GraduationCap, School, Award, Calendar } from 'lucide-react';

const EducationCard = ({ edu, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center justify-between w-full mb-8 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Content Side */}
            <div className="w-5/12">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`p-6 bg-white dark:bg-tertiary rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10 relative ${isEven ? 'text-left' : 'text-right'}`}
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                    <h4 className="text-sm font-semibold text-blue-600 dark:text-neon-blue mb-4">{edu.institution}</h4>

                    <p className="text-gray-500 dark:text-secondary text-sm leading-relaxed mb-4">
                        {edu.desc}
                    </p>

                    <div className={`flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-secondary ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <Calendar size={14} />
                        {edu.year}
                    </div>

                    <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        {edu.achievements.map((item, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-50 dark:bg-black-200 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-secondary text-xs rounded-md">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Arrow for the timeline card */}
                    <div className={`absolute top-10 w-4 h-4 bg-white dark:bg-tertiary border-b border-r border-gray-100 dark:border-white/10 transform rotate-45 ${isEven ? '-left-2 border-l border-t-0 border-r-0 border-b-0' : '-right-2'}`} />
                </motion.div>
            </div>

            {/* Center Timeline Node */}
            <div className="w-2/12 flex justify-center relative">
                {/* Line Segment */}
                <div className="absolute top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -z-10" />

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-white dark:bg-primary border-4 border-blue-500 dark:border-neon-blue rounded-full flex items-center justify-center z-10 shadow-md"
                >
                    {index === 0 ? <Award size={18} className="text-blue-600 dark:text-neon-blue" /> : (index === 1 ? <GraduationCap size={18} className="text-blue-600 dark:text-neon-blue" /> : <School size={16} className="text-gray-500 dark:text-secondary" />)}
                </motion.div>
            </div>

            {/* Empty Side for alignment */}
            <div className="w-5/12" />
        </div>
    );
};

const Education = () => {
    const educationData = [
        {
            degree: "AI & Machine Learning (Student)",
            institution: "Brototype",
            year: "Present",
            desc: "Intensive training program focused on advanced AI concepts, practical machine learning implementation, and industry-standard coding practices.",
            achievements: ["AI/ML Specialization", "Practical Learning", "Industry Training"]
        },
        {
            degree: "Data Scientist Intern",
            institution: "Christ Infotech, Pune",
            year: "Jan 2024 - Present",
            desc: "Research & Development team. Spearheading healthcare analytics projects focusing on predictive heart disease models using confidential real-world datasets.",
            achievements: ["R&D Team", "Healthcare Analytics", "Real-world Data"]
        },
        {
            degree: "B.Sc. Artificial Intelligence & ML",
            institution: "Nehru Arts and Science College, Coimbatore",
            year: "2021 - 2024",
            desc: "Specialized in Deep Learning and Intelligent Systems. Comprehensive coursework in Python, NLP, and Data Mining with a focus on practical application.",
            achievements: ["CGPA: 7+", "Grade O in Project", "Deep Learning Focus"]
        },
        {
            degree: "Higher Secondary (Class 12)",
            institution: "Government of Kerala Board",
            year: "March 2021",
            desc: "Science Stream with focus on Computer Science and Mathematics. Built strong foundational logic in programming.",
            achievements: ["Score: 968/1200", "Top Grades in CS", "First Class"]
        },
        {
            degree: "SSLC (Class 10)",
            institution: "C.G.M. English Medium High School",
            year: "March 2019",
            desc: "Secondary education completed with outstanding academic performance.",
            achievements: ["Full A+ (All Subjects)", "School Topper"]
        }
    ];

    return (
        <section id="education" className="py-24 bg-gray-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-50 dark:bg-tertiary border border-blue-100 dark:border-white/10 text-blue-600 dark:text-secondary text-xs font-bold uppercase tracking-widest">
                        My Journey
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Education & Experience</h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Mobile version (Stacked) */}
                    <div className="md:hidden space-y-8 pl-8 border-l border-gray-200 dark:border-white/10">
                        {educationData.map((edu, index) => (
                            <div key={index} className="relative pl-4">
                                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white dark:bg-primary border-4 border-blue-500 dark:border-neon-blue" />
                                <div className="bg-white dark:bg-tertiary p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm">
                                    <span className="text-xs font-bold text-blue-600 dark:text-secondary bg-blue-50 dark:bg-primary px-2 py-1 rounded mb-2 inline-block">{edu.year}</span>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                                    <p className="text-gray-500 dark:text-secondary text-sm mb-2">{edu.institution}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {edu.achievements.map((tag, i) => (
                                            <span key={i} className="text-xs text-gray-400 dark:text-secondary bg-gray-50 dark:bg-black-100 px-2 py-1 rounded border border-gray-100 dark:border-white/10">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop version (Split Timeline) */}
                    <div className="hidden md:block relative">
                        {/* Continuous Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -z-10" />

                        {educationData.map((edu, index) => (
                            <EducationCard key={index} edu={edu} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
