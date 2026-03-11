import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. Main Wrapper
export function ProjectLayout({ children, nextProjectLink, nextProjectTitle, nextProjectBg = "bg-[#1f1d2e]", nextProjectDesc, bgColor = "bg-white", textColor = "text-[#121212]" }) {
    return (
        <div className={`w-full ${bgColor} ${textColor} font-pretendard selection:bg-[#4338ca] selection:text-white pb-0 transition-colors duration-500`}>
            {children}

            {/* Next Project Footer */}
            {nextProjectLink && nextProjectTitle && (
                <section className={`w-full h-screen ${nextProjectBg} text-white flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden`}>
                    <Link to={nextProjectLink} onClick={() => window.scrollTo(0, 0)} className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center px-6">
                        <motion.p
                            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Next Project
                        </motion.p>
                        <h2 className="text-[clamp(2rem,6vw,7.5rem)] font-black tracking-[-0.02em] leading-none transition-transform duration-700 ease-out text-center group-hover:scale-105 mb-8">
                            {nextProjectTitle}
                        </h2>
                        {nextProjectDesc && (
                            <p className="max-w-2xl text-center text-sm md:text-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 break-keep transform translate-y-2 group-hover:translate-y-0 mt-6 px-4 text-white/90 whitespace-pre-line">
                                {nextProjectDesc.replace(/\\n/g, '\n')}
                            </p>
                        )}
                    </Link>
                </section>
            )}
        </div>
    );
}

// 2. Exact Match Hero + Meta Section
export function ProjectHeroExact({ title, subtitle, metaItems, bgColor = "bg-transparent", textColor = "text-[#121212]", subtitleColor = "text-gray-400", labelColor = "text-gray-500", bgImage, isFullHeight = false }) {
    return (
        <section className={`w-full ${bgColor} pt-40 md:pt-56 pb-24 md:pb-40 px-6 md:px-12 lg:px-16 flex justify-center ${isFullHeight ? 'min-h-[100svh] items-center' : ''} transition-colors duration-500 relative overflow-hidden`}>
            {bgImage && (
                <div className="absolute inset-0 w-full h-full z-0">
                    <img src={bgImage} alt="Hero Background" className="w-full h-full object-cover" />
                    {/* Optional gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/40 w-full h-full"></div>
                </div>
            )}
            <div className="w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative z-10">

                {/* Left: Titles */}
                <motion.div
                    className="lg:col-span-7 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={`text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.07em] ${textColor} whitespace-pre-line`}>
                        {title}
                    </h1>
                    <h2 className={`text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.07em] ${subtitleColor} whitespace-pre-line`}>
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
                                <h3 className={`text-[10px] md:text-xs font-bold tracking-[0.1em] ${labelColor} uppercase`}>
                                    {meta.label}
                                </h3>
                            </div>
                            <div className="md:col-span-8 flex flex-col gap-6">
                                {/* If value is array (like Scope/Results), render list */}
                                {Array.isArray(meta.value) ? (
                                    meta.value.map((v, i) => (
                                        <p key={i} className={`text-sm md:text-[15px] font-medium leading-[1.6] ${textColor}`}>
                                            {v}
                                        </p>
                                    ))
                                ) : (
                                    <p className={`text-sm md:text-[15px] font-medium leading-[1.6] ${textColor}`}>
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
export function ProjectSplit({ title, text, image, reverse = false, bgColor = "bg-transparent", textColor = "text-[#121212]", descColor = "text-gray-600" }) {
    return (
        <section className={`w-full ${bgColor} py-16 md:py-24 px-6 md:px-12 lg:px-16 flex justify-center transition-colors duration-500`}>
            <div className={`w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
                <div className={`flex flex-col gap-8 ${reverse ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                    {title && <h2 className={`text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.1] tracking-[-0.07em] ${textColor}`}>{title}</h2>}
                    <div className={`flex flex-col gap-6 text-lg md:text-xl ${descColor} font-medium leading-[1.6]`}>
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
export function ProjectGrid({ images, bgColor = "bg-transparent", rounded = "rounded-none", gap = "gap-6", itemBg = "bg-gray-200", fits = [], aspect = "" }) {
    return (
        <section className={`w-full ${bgColor} pb-6 flex justify-center transition-colors duration-500`}>
            <div className={`w-full grid grid-cols-1 md:grid-cols-2 ${gap} px-0 md:px-6`}>
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                        className={`w-full ${itemBg} overflow-hidden ${rounded}`}
                    >
                        <img
                            src={img}
                            alt={`Grid ${idx}`}
                            className={`w-full h-full ${fits[idx] || 'object-cover'} ${aspect || 'aspect-[4/3] md:aspect-[4/5]'}`}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// 7. Huge Video/Image - NO BORDER RADIUS, FULL WIDTH 100vw
export function ProjectFullMedia({ src, image, isVideo = false }) {
    const mediaSrc = src || image;
    return (
        <section className="w-full mt-0">
            <motion.div
                className="w-full mx-auto bg-gray-100 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {isVideo ? (
                    <video src={mediaSrc} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
                ) : (
                    <img src={mediaSrc} alt="Full Media" className="w-full h-auto object-cover" />
                )}
            </motion.div>
        </section>
    );
}

// 8. Custom Responsive ERP Tree Chart (Reference Design Match)
export function ProjectTreeChart({ chip, title, subtitle, rootNode, branches }) {
    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center bg-[#111622] overflow-hidden">
            {/* Header: Chip and Title */}
            <div className="w-full max-w-[1400px] mb-16 flex flex-col gap-6 items-center md:items-start select-none">
                {chip && (
                    <div className="px-5 py-1.5 border border-white text-[#111622] text-[11px] md:text-sm font-bold uppercase tracking-widest bg-white rounded-[4px]">
                        {chip}
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    {title && (
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-white tracking-[-0.04em] text-center md:text-left">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-[15px] md:text-base text-[#9A9BA5] font-normal leading-[1.7] text-center md:text-left opacity-90">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Chart Container */}
            <div className="w-full max-w-[1400px] pb-8">
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start relative select-none">

                    {/* Root Node (ERP) */}
                    <div className="flex-shrink-0 flex items-center justify-center relative w-[140px] mb-12 lg:mb-0 lg:mr-[100px] z-10 lg:mt-[24px]">
                        <div className="w-[140px] h-[48px] border-[1px] border-[#3E4C69] rounded-[24px] flex items-center justify-center bg-[#111622] text-[#6B89AC] text-[14px] font-medium tracking-wide">
                            {rootNode}
                        </div>
                    </div>

                    {/* Branches Container */}
                    <div className="flex flex-col gap-6 lg:gap-4 relative z-10 w-full lg:w-auto items-center lg:items-start">

                        {branches.map((branch, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 relative group w-full lg:w-auto lg:pl-[50px]">

                                {/* Branch Parent (Title) */}
                                <div
                                    className="flex-shrink-0 w-[140px] h-[40px] border-[1px] border-[#3E4C69] flex items-center justify-center bg-[#111622] text-white text-[13px] font-medium tracking-wide transition-all duration-300 cursor-default relative z-10 hover:z-20 group-hover:bg-[#457FF3] group-hover:border-[#457FF3] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(69,127,243,0.3)] hover:!scale-110"
                                >
                                    {branch.title}
                                </div>

                                {/* Sub Nodes Row */}
                                {branch.children && branch.children.length > 0 && (
                                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 lg:gap-3 w-full lg:w-auto px-4 lg:px-0 relative z-10">
                                        {branch.children.map((child, cIdx) => (
                                            <div key={cIdx} className="flex-shrink-0 px-3 lg:w-[140px] h-[36px] lg:h-[40px] border-[1px] border-[#3E4C69] flex items-center justify-center bg-[#111622] text-[#6B89AC] text-[11px] lg:text-[12px] font-normal tracking-wide transition-all duration-300 cursor-default whitespace-nowrap lg:whitespace-normal text-center leading-tight hover:z-20 group-hover:border-[#457FF3]/40 group-hover:text-white/90 group-hover:bg-[#457FF3]/5 hover:!scale-110 hover:!bg-[#457FF3]/20 hover:!border-[#457FF3] hover:!text-white"
                                            >
                                                {child}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

// 9. Full Media with Title & Chip
export function ProjectFullMediaWithTitle({ chip, title, subtitle, label, src, images, isVideo = false, bgColor = "bg-white", layout = "full", textColor = "text-[#121212]", objectFit = "object-contain", centered = false, parallax = true }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // 스크롤 시 위(-33%)에서 아래(10%)로 이동하는 패럴랙스 (위에서 3분의 1 배치 후 내려감)
    const y = useTransform(scrollYProgress, [0, 1], ["-33%", "10%"]);

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 1600); // 1.6s interval matches a 0.8s display and 0.8s transition
        return () => clearInterval(interval);
    }, [images]);

    const renderHeader = () => (
        <div className={`w-full flex flex-col gap-2 ${centered ? 'items-center text-center' : 'items-center md:items-start text-center md:text-left'} select-none ${layout === 'split' ? '' : 'max-w-[1400px] px-4 md:px-8 lg:px-16 mb-12'}`}>
            {label && (
                <p className={`text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-8 ${textColor}`}>
                    {label}
                </p>
            )}
            {chip && (
                <div className="px-5 py-1.5 border border-[rgb(17,22,34)] text-white text-[11px] md:text-sm font-bold uppercase tracking-widest bg-[rgb(17,22,34)] rounded-[4px] w-fit">
                    {chip}
                </div>
            )}
            <div className={`flex flex-col gap-4 ${centered ? 'items-center' : ''}`}>
                {title && (
                    <h2 className={`text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-[1.2] ${textColor}`}>
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className={`text-[15px] md:text-base font-normal leading-[1.7] max-w-3xl opacity-90 ${textColor === 'text-white' ? 'text-white/60' : 'text-[#9A9BA5]'}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );

    const renderMedia = () => (
        <div ref={ref} className={`w-full relative flex justify-center md:mt-8 ${layout === 'split' ? 'h-[40vh] md:h-[60vh]' : 'h-[50vh] md:h-[65vh]'}`}>
            {images && images.length > 0 ? (
                <div className={`w-full relative flex justify-center items-center h-full ${layout === 'split' ? 'w-full' : 'max-w-[1400px] px-4 md:px-8'}`}>
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Sequence ${currentIndex}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className={`w-full h-full ${objectFit} absolute mx-auto`}
                        />
                    </AnimatePresence>
                </div>
            ) : isVideo ? (
                <video src={src} autoPlay loop muted playsInline className={`w-full h-full ${objectFit}`} />
            ) : (
                <motion.img
                    style={parallax ? { y } : {}}
                    initial={{ opacity: 0, y: parallax ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={src}
                    alt="Section Media"
                    className={`w-full h-full ${objectFit} mx-auto`}
                />
            )}
        </div>
    );
    return (
        <section className={`w-full py-24 md:py-32 flex flex-col items-center overflow-hidden ${bgColor}`}>
            {layout === 'split' ? (
                <div className="w-full max-w-[1800px] px-4 md:px-8 lg:px-16 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {renderHeader()}
                    {renderMedia()}
                </div>
            ) : (
                <div className="w-full flex flex-col items-center">
                    {renderHeader()}
                    {renderMedia()}
                </div>
            )}
        </section>
    );
}

// 10. Infinite Image Marquee (Auto-Scroll)
export function ProjectImageMarquee({ images, speed = 40, bgColor = "bg-[#10182B]" }) {
    if (!images || images.length === 0) return null;

    return (
        <section className={`w-full pt-48 pb-12 overflow-hidden ${bgColor}`}>
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed, // use speed prop
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render images twice for seamless looping */}
                    <div className="flex gap-6 px-3 flex-shrink-0">
                        {images.map((img, idx) => (
                            <img
                                key={`marquee-1-${idx}`}
                                src={img}
                                alt={`Marquee ${idx}`}
                                className="h-[250px] md:h-[450px] w-[350px] md:w-[700px] object-contain rounded-md block bg-[#10182B]"
                            />
                        ))}
                    </div>
                    <div className="flex gap-6 px-3 flex-shrink-0">
                        {images.map((img, idx) => (
                            <img
                                key={`marquee-2-${idx}`}
                                src={img}
                                alt={`Marquee-loop ${idx}`}
                                className="h-[250px] md:h-[450px] w-[350px] md:w-[700px] object-contain rounded-md block bg-[#10182B]"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// 11. 3-Column Feature Grid (UX Case Study style)
export function ProjectGrid3Col({ chip, items, bgColor = "bg-[#111622]" }) {
    return (
        <section className={`w-full pt-20 pb-48 px-4 md:px-8 lg:px-16 flex flex-col items-center ${bgColor}`}>
            <div className="w-full max-w-[1400px] flex flex-col items-center md:items-start">
                {chip && (
                    <div className="px-4 py-1.5 bg-[#3B82F6] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-[4px] mb-16 w-fit">
                        {chip}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-8 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[15px] md:text-base text-[#9A9BA5] leading-[1.8] font-normal opacity-90">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 12. Poster with Text Overlay (Side-by-side style)
export function ProjectPosterWithText({ image, chip, title, subtitle, bgColor = "bg-[#F4F7FA]" }) {
    return (
        <section className={`w-full py-24 md:py-40 px-6 md:px-12 lg:px-16 flex justify-center relative ${bgColor}`}>
            {/* Background Split for visual transition */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-[#10182B] z-0" />

            <div className="w-full max-w-[1700px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                {/* Left: Image Area */}
                <motion.div
                    className="w-full relative flex justify-center items-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={image} alt="Project Poster" className="w-full h-auto object-contain max-h-[85vh]" />
                </motion.div>

                {/* Right: Text Area */}
                <motion.div
                    className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {chip && (
                        <div className="w-fit px-4 py-1.5 bg-[#457FF3] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-[2px] mb-2">
                            {chip}
                        </div>
                    )}
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium text-[#121212] tracking-[-0.04em] leading-[1.2] whitespace-pre-line">
                        {title}
                    </h2>
                    <p className="text-[15px] md:text-[17px] text-[#9A9BA5] font-normal leading-[1.8] opacity-90 whitespace-pre-line max-w-xl">
                        {subtitle}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

// 13. Two-Column Media Section (Full width split)
export function ProjectTwoColumnMedia({ chip, title, image, bgColor = "bg-white", textColor = "text-white" }) {
    return (
        <section className={`w-full flex flex-col lg:flex-row min-h-[60vh] ${bgColor}`}>
            {/* Left: Text Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 md:px-12 lg:px-24 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 items-center lg:items-start"
                >
                    {chip && (
                        <div className="px-5 py-1.5 border border-white text-[rgb(69,127,243)] text-[11px] md:text-sm font-bold uppercase tracking-widest bg-white rounded-[4px] w-fit">
                            {chip}
                        </div>
                    )}
                    <h2 className={`text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.04em] leading-[1.2] whitespace-pre-line text-center lg:text-left ${textColor}`}>
                        {title}
                    </h2>
                </motion.div>
            </div>

            {/* Right: Image Area */}
            <div className="w-full lg:w-1/2 relative overflow-hidden bg-black/5">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}

// 14. Simple Text Section (Title + Paragraphs)
export function ProjectSectionText({ title, text, bgColor = "bg-white", textColor = "text-[#121212]", descColor = "text-gray-600" }) {
    return (
        <section className={`w-full ${bgColor} py-24 md:py-32 px-6 md:px-12 lg:px-16 flex justify-center transition-colors duration-500`}>
            <div className="w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <motion.div
                    className="lg:col-span-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={`text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.04em] leading-[1.2] ${textColor}`}>
                        {title}
                    </h2>
                </motion.div>
                <motion.div
                    className="lg:col-span-8 flex flex-col gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {Array.isArray(text) ? (
                        text.map((p, i) => (
                            <p key={i} className={`text-[15px] md:text-[17px] font-normal leading-[1.8] ${descColor} break-keep`}>
                                {p}
                            </p>
                        ))
                    ) : (
                        <p className={`text-[15px] md:text-[17px] font-normal leading-[1.8] ${descColor} break-keep`}>
                            {text}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

// 15. Centered Intro Text
export function ProjectCenteredIntro({ title, text, bgColor = "bg-transparent", textColor = "text-white", descColor = "text-[#9A9BA5]" }) {
    return (
        <section className={`w-full py-24 md:py-32 px-6 flex justify-center text-center ${bgColor}`}>
            <motion.div
                className="w-full max-w-[1000px] flex flex-col gap-8 md:gap-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={`text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight whitespace-pre-line ${textColor}`}>
                    {title}
                </h2>
                <div className={`text-[14px] md:text-[16px] leading-[1.8] font-normal ${descColor} flex flex-col gap-1 whitespace-pre-line break-keep`}>
                    {text}
                </div>
            </motion.div>
        </section>
    );
}

// 16. Centered Highlight Block (Problem statement)
export function ProjectCenteredHighlightBlock({ label, title, text, bgColor = "bg-transparent", titleColor = "text-[#00FF00]", descColor = "text-[#9A9BA5]", labelColor = "text-[#555555]" }) {
    return (
        <section className={`w-full pt-24 md:pt-32 pb-12 md:pb-16 px-6 flex justify-center text-center ${bgColor}`}>
            <motion.div
                className="w-full max-w-[1000px] flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {label && (
                    <p className={`text-[13px] md:text-[14px] font-bold mb-6 ${labelColor}`}>
                        {label}
                    </p>
                )}
                <h2 className={`text-[clamp(1.5rem,2.5vw,2.2rem)] font-medium tracking-tight mb-8 whitespace-pre-line ${titleColor}`}>
                    {title}
                </h2>
                <div className={`text-[14px] md:text-[15px] leading-[1.8] font-normal ${descColor} whitespace-pre-line break-keep`}>
                    {text}
                </div>
            </motion.div>
        </section>
    );
}

// 17. Three Column Text Blocks (Search)
export function ProjectThreeColTextBlocks({ label, columns, bgColor = "bg-transparent", labelColor = "text-[#555555]" }) {
    return (
        <section className={`w-full pt-12 md:pt-16 pb-24 md:pb-40 px-6 md:px-12 flex justify-center ${bgColor}`}>
            <div className="w-full max-w-[1600px] flex flex-col items-center">
                {label && (
                    <motion.p
                        className={`text-[13px] md:text-[14px] font-bold mb-6 ${labelColor}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {label}
                    </motion.p>
                )}

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {columns.map((col, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center text-center gap-6 md:gap-10 pt-8 border-t border-[#333] border-opacity-30 md:border-none md:pt-0 mt-4 md:mt-0 first:border-none first:pt-0 first:mt-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                        >
                            <h3 className={`text-[20px] md:text-[24px] font-medium leading-[1.4] whitespace-pre-line ${col.titleColor || 'text-white'}`}>
                                {col.title}
                            </h3>
                            <div className={`text-[13px] md:text-[14px] leading-[1.8] font-normal whitespace-pre-line break-keep flex flex-col gap-4 items-center ${col.descColor || 'text-[#9A9BA5]'}`}>
                                {col.text}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 18. Phone with Background Keyword Marquee
const MarqueeContent = ({ items }) => (
    <div className="flex gap-4 md:gap-6 px-2 md:px-3">
        {items.map((kw, i) => (
            <div key={i} className="px-5 md:px-8 py-2 md:py-3 rounded-full bg-[#1A1A1A] text-[#888888] text-[14px] md:text-[16px] border border-[#333333] whitespace-nowrap font-medium flex-shrink-0">
                {kw}
            </div>
        ))}
    </div>
);

export function ProjectPhoneWithMarquee({ phoneImage, title, keywords, bgColor = "bg-[#010101]" }) {
    // Generate a repeating array for seamless marquee
    const REPEAT_COUNT = 15;
    const rowRepeated = Array(REPEAT_COUNT).fill(keywords).flat();

    return (
        <section className={`w-full relative py-32 md:py-48 overflow-hidden flex justify-center items-center min-h-[60vh] md:min-h-[80vh] ${bgColor}`}>
            {/* Background Marquee Area (Absolute) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col z-0 w-full pointer-events-none opacity-80">

                {/* Marquee Single Row (Right to Left) */}
                <div className="flex overflow-hidden w-full">
                    <motion.div
                        className="flex whitespace-nowrap flex-shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 400, repeat: Infinity }}
                    >
                        {/* Render twice for seamless loop - 50% translation shifts exactly one content block */}
                        <MarqueeContent items={rowRepeated} />
                        <MarqueeContent items={rowRepeated} />
                    </motion.div>
                </div>
            </div>

            {/* Content Area (Relative, Z-10) */}
            <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 relative z-10">
                {/* Left: Phone Image */}
                <div className="flex justify-center md:justify-end relative">
                    <motion.img
                        src={phoneImage}
                        className="w-full max-w-[280px] md:max-w-[360px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>

                {/* Right: Text */}
                <motion.div
                    className="flex flex-col justify-center text-center md:text-left md:pl-8 lg:pl-16 -mt-4 md:-mt-56"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h2 className="text-[#E0E0E0] text-[clamp(1.3rem,4vw,2.2rem)] md:text-[clamp(1.5rem,2.5vw,2.2rem)] leading-[1.4] md:leading-[1.6] font-medium whitespace-pre-line break-keep">
                        {title}
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}

