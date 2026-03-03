import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center section-padding relative overflow-hidden pt-32">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[120px] opacity-50 z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[var(--accent-color)] font-semibold tracking-widest uppercase mb-4 text-sm"
                    >
                        Digital Product Designer
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
                        Designing <br />
                        <span className="text-glow text-white">experiences</span><br />
                        that matter.
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed font-light">
                        I craft intuitive, beautiful, and user-centric digital products that solve real problems and drive business growth.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 bg-[var(--accent-color)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all hover:scale-105"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-transparent border border-[var(--card-border)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--card-border)] transition-all"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
