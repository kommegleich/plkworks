import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. Main Wrapper
export function ProjectLayout({ children, nextProjectLink, nextProjectTitle, nextProjectBg = "bg-[#1f1d2e]" }) {
    return (
        <div className="w-full bg-white text-[#121212] font-pretendard selection:bg-[#4338ca] selection:text-white pb-0">
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
                        <h2 className="text-[clamp(4rem,12vw,15rem)] font-black tracking-[-0.09em] leading-none transition-transform duration-700 ease-out text-center group-hover:scale-105">
                            {nextProjectTitle}
                        </h2>
                    </Link>
                </section>
            )}
        </div>
    );
}

// 2. Exact Match Hero + Meta Section
export function ProjectHeroExact({ title, subtitle, metaItems }) {
    return (
        <section className="w-full bg-white pt-40 md:pt-56 pb-24 md:pb-40 px-6 md:px-12 lg:px-16 flex justify-center">
            <div className="w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

                {/* Left: Titles */}
                <motion.div
                    className="lg:col-span-7 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.07em] text-[#121212] whitespace-pre-line">
                        {title}
                    </h1>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.07em] text-gray-400 whitespace-pre-line">
                        {subtitle}
                    </h2>
                </motion.div>

                {/* Right: Meta Information */}
                <motion.div
                    className="lg:col-span-5 flex flex-col gap-12 lg:pl-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {metaItems.map((meta, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                            <div className="md:col-span-4">
                                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-gray-500 uppercase">
                                    {meta.label}
                                </h3>
                            </div>
                            <div className="md:col-span-8 flex flex-col gap-6">
                                {/* If value is array (like Scope/Results), render list */}
                                {Array.isArray(meta.value) ? (
                                    meta.value.map((v, i) => (
                                        <p key={i} className="text-sm md:text-[15px] font-medium leading-[1.6] text-[#121212]">
                                            {v}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-sm md:text-[15px] font-medium leading-[1.6] text-[#121212]">
                                        {meta.value}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

// 4. Split Layout (Text + Media) - NO BORDER RADIUS
export function ProjectSplit({ title, text, image, reverse = false }) {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16 flex justify-center">
            <div className={`w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
                <div className={`flex flex-col gap-8 ${reverse ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                    {title && <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.1] tracking-[-0.07em] text-[#121212]">{title}</h2>}
                    <div className="flex flex-col gap-6 text-lg md:text-xl text-gray-600 font-medium leading-[1.6]">
                        {text.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>
                <div className={`w-full bg-gray-100 ${reverse ? 'lg:order-1' : ''}`}>
                    {/* Notice: removed rounded classes */}
                    <img src={image} alt="Split Section" className="w-full h-full object-cover aspect-[4/5] md:aspect-square" />
                </div>
            </div>
        </section>
    );
}

// 5. Full Width Highlight (Usually color block)
export function ProjectHighlight({ text, bgColor = "bg-[#4338ca]", textColor = "text-white" }) {
    return (
        <section className={`w-full py-32 md:py-48 px-6 md:px-12 flex justify-center ${bgColor}`}>
            <div className="w-full max-w-[1400px] text-center">
                <h2 className={`text-[clamp(1.5rem,3vw,3.5rem)] font-medium tracking-[-0.06em] leading-[1.3] ${textColor}`}>
                    {text}
                </h2>
            </div>
        </section>
    );
}

// 6. Double Image Grid - NO BORDER RADIUS, FULL WIDTH
export function ProjectGrid({ images }) {
    return (
        <section className="w-full bg-white pb-6 flex justify-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-0 md:px-6">
                {images.map((img, idx) => (
                    <div key={idx} className="w-full bg-gray-200">
                        {/* Notice: removed rounded classes */}
                        <img src={img} alt={`Grid ${idx}`} className="w-full h-full object-cover aspect-[4/3] md:aspect-[4/5]" />
                    </div>
                ))}
            </div>
        </section>
    );
}

// 7. Huge Video/Image - NO BORDER RADIUS, FULL WIDTH 100vw
export function ProjectFullMedia({ src, isVideo = false }) {
    return (
        <section className="w-full mt-0">
            <div className="w-full mx-auto bg-gray-100 relative">
                {/* Notice: removed rounded classes */}
                {isVideo ? (
                    <video src={src} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
                ) : (
                    <img src={src} alt="Full Media" className="w-full h-auto object-cover" />
                )}
            </div>
        </section>
    );
}

// 8. Custom Responsive ERP Tree Chart
export function ProjectTreeChart({ chip = "Flowchart", title, rootNode, branches }) {
    return (
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center bg-[#151a24] text-[#457FF3]">
            {/* Header: Chip and Title */}
            <div className="w-full max-w-[1400px] mb-12 flex flex-col gap-4 items-start select-none">
                {chip && (
                    <div className="px-4 py-1.5 border border-[#2d4a82] bg-[#192233] text-[#718ebf] text-[11px] md:text-xs font-bold rounded-full uppercase tracking-widest">
                        {chip}
                    </div>
                )}
                {title && (
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-white tracking-[-0.04em]">
                        {title}
                    </h2>
                )}
            </div>

            <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center lg:items-start justify-start relative select-none">

                {/* Root Node (ERP) */}
                <div className="flex-shrink-0 flex items-center justify-center relative z-10 w-full lg:w-auto mb-8 lg:mb-0 lg:pr-12 lg:pt-2">
                    <div className="w-[140px] h-[48px] border border-[#2d4a82] rounded-[24px] flex items-center justify-center bg-[#151a24] text-sm md:text-sm font-semibold tracking-wide">
                        {rootNode}
                    </div>
                </div>

                {/* Branches Container */}
                <div className="w-full flex flex-col gap-8 md:gap-12 relative lg:pl-4 lg:py-0">

                    {branches.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center lg:items-start gap-3 md:gap-4 relative w-full">

                            {/* Branch Parent (Title) - Now centered above or acting as a clear header */}
                            <div className="flex-shrink-0 w-[140px] md:w-[160px] px-2 h-[44px] border-2 border-[#457FF3] flex items-center justify-center bg-[#192233] text-[13px] md:text-[14px] font-bold text-white shadow-lg mx-auto lg:mx-0">
                                {branch.title}
                            </div>

                            {/* Sub Nodes Row */}
                            {branch.children && branch.children.length > 0 && (
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 w-full pl-0 lg:pl-8">
                                    {branch.children.map((child, cIdx) => (
                                        <div key={cIdx} className="flex-shrink-0 w-[120px] md:w-[130px] px-2 h-[36px] border border-[#232d3f] flex items-center justify-center bg-[#1b2536] text-[#718ebf] text-[11px] md:text-[12px] whitespace-nowrap overflow-hidden text-ellipsis hover:bg-[#232d3f] transition-colors">
                                            {child}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
