import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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

// 8. Custom Responsive ERP Tree Chart (Reference Design Match)
export function ProjectTreeChart({ chip, title, rootNode, branches }) {
    const [isClicked, setIsClicked] = React.useState(false);

    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center bg-[#111622] overflow-hidden">
            {/* Header: Chip and Title */}
            <div className="w-full max-w-[1400px] mb-16 flex flex-col gap-4 items-center md:items-start select-none">
                {chip && (
                    <div className="px-5 py-1.5 border border-white text-[#111622] text-[11px] md:text-sm font-bold uppercase tracking-widest bg-white">
                        {chip}
                    </div>
                )}
                {title && (
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-white tracking-[-0.04em] text-center md:text-left">
                        {title}
                    </h2>
                )}
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
                                    onClick={() => setIsClicked(!isClicked)}
                                    className={`flex-shrink-0 w-[140px] h-[40px] border-[1px] border-[#3E4C69] flex items-center justify-center text-white text-[13px] font-medium transition-colors cursor-pointer relative z-10 ${isClicked ? 'bg-[#11101C]' : 'bg-[#111622]'}`}
                                >
                                    {branch.title}
                                </div>

                                {/* Sub Nodes Row */}
                                {branch.children && branch.children.length > 0 && (
                                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 lg:gap-3 w-full lg:w-auto px-4 lg:px-0 relative z-10">
                                        {branch.children.map((child, cIdx) => (
                                            <div key={cIdx} className="flex-shrink-0 px-3 lg:w-[140px] h-[36px] lg:h-[40px] border-[1px] border-[#3E4C69] flex items-center justify-center bg-[#111622] text-[#6B89AC] text-[11px] lg:text-[12px] font-normal transition-colors cursor-default whitespace-nowrap lg:whitespace-normal text-center leading-tight">
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
export function ProjectFullMediaWithTitle({ chip, title, subtitle, src, images, isVideo = false, bgColor = "bg-white" }) {
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

    return (
        <section className={`w-full py-24 md:py-32 flex flex-col items-center overflow-hidden ${bgColor}`}>
            {/* Header: Chip, Title, Subtitle */}
            <div className="w-full max-w-[1400px] px-4 md:px-8 lg:px-16 mb-12 flex flex-col gap-6 items-center md:items-start text-center md:text-left select-none">
                {chip && (
                    <div className="px-5 py-1.5 border border-[#111622] text-white text-[11px] md:text-sm font-bold uppercase tracking-widest bg-[#111622] rounded-none">
                        {chip}
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    {title && (
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium text-[#121212] tracking-[-0.04em] leading-[1.2]">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-base md:text-lg text-gray-500 font-normal md:font-medium leading-[1.6] max-w-3xl">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Media Container without Parallax Window */}
            <div ref={ref} className="w-full relative flex justify-center h-[50vh] md:h-[65vh] md:mt-8">
                {images && images.length > 0 ? (
                    <div className="w-full relative max-w-[1400px] flex justify-center items-center h-full px-4 md:px-8">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt={`Sequence ${currentIndex}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full md:w-[90%] max-w-[1400px] h-full object-contain absolute mx-auto"
                            />
                        </AnimatePresence>
                    </div>
                ) : isVideo ? (
                    <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <motion.img
                        style={{ y }}
                        src={src}
                        alt="Section Media"
                        className="w-[95%] md:w-[80%] max-w-[1200px] h-auto object-contain origin-top mx-auto"
                    />
                )}
            </div>
        </section>
    );
}
