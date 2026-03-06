import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. Main Wrapper
export function ProjectLayout({ children, nextProjectLink, nextProjectTitle, nextProjectBg = "bg-[#121212]" }) {
    return (
        <div className="w-full bg-[#F4F4F2] text-[#121212] font-pretendard pt-32 selection:bg-black selection:text-white">
            {children}

            {/* Next Project Footer */}
            {nextProjectLink && nextProjectTitle && (
                <section className={`w-full h-screen ${nextProjectBg} text-white flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden`}>
                    <Link to={nextProjectLink} onClick={() => window.scrollTo(0, 0)} className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center">
                        <motion.p
                            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Next Case
                        </motion.p>
                        <h2 className="text-[clamp(4rem,12vw,15rem)] font-black tracking-tighter leading-none transition-transform duration-700 ease-out text-center group-hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {nextProjectTitle}
                        </h2>
                    </Link>
                </section>
            )}
        </div>
    );
}

// 2. Hero Section
export function ProjectHero({ title, subtitle, bgImage }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="w-full h-[90vh] md:h-screen flex flex-col items-center px-4 md:px-12 relative overflow-hidden">
            <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[1800px] flex flex-col items-center text-center mt-12 md:mt-24 mb-16 md:mb-24">
                <motion.p
                    className="text-sm md:text-base font-bold tracking-[0.2em] mb-4 text-gray-500 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {subtitle}
                </motion.p>
                <motion.h1
                    className="text-[clamp(3.5rem,10vw,12rem)] font-black tracking-tighter leading-[0.9] text-[#121212]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {title}
                </motion.h1>
            </motion.div>

            {/* Hero Image with Parallax */}
            <div className="w-full max-w-[1800px] flex-1 relative rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200">
                <motion.img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover origin-center"
                    style={{ y, scale: 1.1 }}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        </section>
    );
}

// 3. Metadata Header (Client, Team, Services etc)
export function ProjectMeta({ description, link, metrics }) {
    return (
        <section className="w-full px-6 md:px-12 py-24 md:py-40 flex justify-center bg-[#F4F4F2]">
            <div className="w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                {/* Left: Huge description */}
                <div className="lg:col-span-8 pr-0 lg:pr-16">
                    <motion.h2
                        className="text-[clamp(1.75rem,3.5vw,3.5rem)] font-bold tracking-tight leading-[1.3] text-[#121212]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {description}
                    </motion.h2>
                    {link && (
                        <motion.a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-12 text-lg md:text-xl font-bold border-b-2 border-[#121212] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {link.text} ↗
                        </motion.a>
                    )}
                </div>

                {/* Right: Metrics / Details list */}
                <div className="lg:col-span-4 flex flex-col gap-10 border-t lg:border-t-0 border-gray-300 pt-10 lg:pt-0">
                    {metrics.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                        >
                            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">{item.label}</span>
                            <span className="text-base md:text-lg font-medium text-[#121212] whitespace-pre-line">{item.value}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 4. Full Width Media
export function FullMedia({ image, video, caption }) {
    return (
        <section className="w-full py-12 md:py-24 px-4 md:px-12 flex flex-col items-center">
            <motion.div
                className="w-full max-w-[1800px] aspect-video md:aspect-[21/9] bg-gray-200 rounded-[1rem] md:rounded-[2.5rem] overflow-hidden relative shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {video ? (
                    <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <img src={image} alt="Media" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                )}
            </motion.div>
            {caption && <p className="mt-6 text-sm text-gray-500 text-center font-medium max-w-2xl">{caption}</p>}
        </section>
    );
}

// 5. Split Media (50/50 Grid)
export function SplitMedia({ img1, img2 }) {
    return (
        <section className="w-full py-12 px-4 md:px-12">
            <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <motion.div
                    className="aspect-[4/5] bg-gray-200 rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={img1} alt="Split 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                </motion.div>
                <motion.div
                    className="aspect-[4/5] bg-gray-200 rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={img2} alt="Split 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                </motion.div>
            </div>
        </section>
    );
}

// 6. Big Text Block
export function TextBlock({ heading, paragraphs, theme = "light" }) {
    const isDark = theme === "dark";
    const bg = isDark ? "bg-[#121212]" : "bg-[#F4F4F2]";
    const textTitle = isDark ? "text-white" : "text-[#121212]";
    const textBody = isDark ? "text-gray-400" : "text-gray-600";

    return (
        <section className={`w-full py-24 md:py-48 px-6 md:px-12 flex justify-center ${bg} transition-colors duration-500`}>
            <div className="w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                <div className="lg:col-span-6 pr-0 lg:pr-16">
                    <motion.h2
                        className={`text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight leading-[1.1] ${textTitle}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {heading}
                    </motion.h2>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-8 justify-end pt-4 lg:pt-0">
                    {paragraphs.map((text, idx) => (
                        <motion.p
                            key={idx}
                            className={`text-lg md:text-2xl font-medium leading-[1.6] ${textBody}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 * idx }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
