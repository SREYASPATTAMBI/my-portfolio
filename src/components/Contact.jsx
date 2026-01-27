import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Changed from userEmail to email to match FormSubmit standard
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/sreyaspattambi@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-black dark:bg-tertiary text-white dark:text-secondary text-xs font-bold uppercase tracking-widest">
                                Get in Touch
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                                Let's build something <br />
                                <span className="text-gray-400 dark:text-secondary">intelligent?</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-secondary leading-relaxed">
                                I'm currently looking for new opportunities in Data Science and Machine Learning. Whether you have a question or just want to say hi, I'm just a click away!
                            </p>
                        </div>

                        <div className="bg-white dark:bg-tertiary p-8 rounded-3xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Mail size={18} /> Shoot me an email
                            </h3>
                            <div className="relative group">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sreyaspattambi@gmail.com&su=Project%20Inquiry"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-bold transition-all hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                >
                                    <Mail size={20} />
                                    Contact via Gmail
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { icon: Github, href: "https://github.com/sreyaspattambi", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/sreyas-kumar-765737372/", label: "LinkedIn" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-tertiary border border-gray-200 dark:border-white/10 rounded-xl text-gray-600 dark:text-secondary font-medium shadow-sm hover:shadow-md hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
                                >
                                    <social.icon size={20} />
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-tertiary p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-black-100 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/20 focus:border-black dark:focus:border-white/30 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-secondary"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-black-100 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/20 focus:border-black dark:focus:border-white/30 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-secondary"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-black-100 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/20 focus:border-black dark:focus:border-white/30 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-secondary resize-none"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transform transition-all shadow-lg 
                                    ${isSubmitting ? 'bg-gray-800 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:shadow-xl active:scale-95'}`}
                            >
                                {isSubmitting ? (
                                    <>Sending...</>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 rounded-xl border border-green-100 dark:border-green-900 flex items-center gap-2"
                                >
                                    <Check size={18} />
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900"
                                >
                                    Something went wrong. Please try again or email me directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-400 dark:text-secondary text-sm">
                    <p>&copy; {new Date().getFullYear()} Sreyas Kumar K. Built with React.js & Tailwind.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
