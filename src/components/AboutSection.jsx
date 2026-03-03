import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "UI/UX Design", "Wireframing", "Prototyping", "Design Systems",
    "User Research", "Interaction Design", "Figma", "Web Design",
    "Mobile App Design", "Frontend Dev (Basic)"
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-[var(--card-bg)] relative border-y border-[var(--card-border)] relative overflow-hidden">

            {/* Decorative Blur */}
            <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-[var(--accent-glow)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Driven by empathy, <br />
                        <span className="text-[var(--accent-color)]">obsessed with details.</span>
                    </h2>
                    <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                        <p>
                            Hi, I'm a UX/UI designer with over 5 years of experience bridging the gap between human needs and business goals. I believe that the best products are those that feel invisible — where the user seamlessly achieves their goal without thinking about the interface.
                        </p>
                        <p>
                            My background in both psychology and graphic design allows me to deeply understand user behavior while crafting statistically beautiful digital environments.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                                className="px-5 py-3 rounded-full border border-[var(--card-border)] bg-[var(--bg-color)] text-sm font-medium hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <div className="mt-12 bg-[var(--bg-color)] p-8 rounded-2xl border border-[var(--card-border)]">
                        <div className="text-4xl font-black text-[var(--text-secondary)] mb-2 group">
                            <span className="text-white group-hover:text-[var(--accent-color)] transition-colors">50+</span>
                        </div>
                        <p className="text-[var(--text-secondary)] font-medium">Projects successfully delivered <br />worldwide.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
