import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Fintech Mobile App',
        category: 'UX / UI Design',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        color: '#8B5CF6'
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
        color: '#3B82F6'
    },
    {
        id: 3,
        title: 'Health Tracking Dashboard',
        category: 'Product Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        color: '#10B981'
    },
    {
        id: 4,
        title: 'Smart Home Interface',
        category: 'UI / Interaction',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        color: '#F59E0B'
    }
];

const ProjectGallery = () => {
    return (
        <section id="work" className="section-padding relative z-10 bg-[var(--bg-color)]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                        <p className="text-[var(--text-secondary)] max-w-md">A collection of my recent projects focusing on user-centered design and seamless experiences.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-[var(--card-bg)] border border-[var(--card-border)]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full flex justify-between items-center">
                                        <span className="text-white font-medium">View Case Study</span>
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2">
                                <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold mb-2 block" style={{ color: project.color }}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--accent-color)] transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
