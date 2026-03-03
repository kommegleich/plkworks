import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="section-padding bg-[var(--bg-color)] pb-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Let's create <br /> something <br />
                            <span className="text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer">amazing.</span>
                        </h2>
                        <a
                            href="mailto:hello@example.com"
                            className="text-2xl md:text-3xl text-[var(--accent-color)] underline underline-offset-8 decoration-[var(--card-border)] hover:decoration-[var(--accent-color)] transition-colors font-medium"
                        >
                            hello@example.com
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex md:justify-end gap-6"
                    >
                        <a href="#" className="w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:scale-110 transition-all text-white group">
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:scale-110 transition-all text-white group">
                            <Dribbble size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:scale-110 transition-all text-white group">
                            <Github size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-secondary)]">
                    <p>© {currentYear} UX/UI Portfolio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
