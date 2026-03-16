import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 뷰포트 768px 미만 시 모바일 레이아웃 활성화
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  // 모바일 전용 My Approach 클릭 상태 (null = 닫힘, 0/1/2 = 인덱스)
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (idx) => {
    if (isMobile) setActiveCard(prev => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 01 - Main Hero (PLK) */}
      <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
        <div
          className="relative z-10 flex flex-col items-center py-8 px-4"
          onMouseEnter={() => !isMobile && setIsHovering(true)}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
        >
          {/* PLK — 크기 키움 (전체) */}
          <motion.div
            className="text-[clamp(8rem,20vw,22rem)] font-black tracking-tighter cursor-default text-[#121212] mb-8 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: (!isMobile && isHovering) ? 1.25 : 1,
              rotateX: (!isMobile && isHovering && typeof window !== 'undefined') ? (mousePosition.y / window.innerHeight - 0.5) * -90 : 0,
              rotateY: (!isMobile && isHovering && typeof window !== 'undefined') ? (mousePosition.x / window.innerWidth - 0.5) * 90 : 0
            }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              transformPerspective: 500,
              transformStyle: "preserve-3d"
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 3, ease: [0.16, 1, 0.3, 1] },
              rotateX: { type: "spring", stiffness: 80, damping: 20 },
              rotateY: { type: "spring", stiffness: 80, damping: 20 }
            }}
          >
            PLK
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-gray-600 text-sm md:text-lg font-normal text-center leading-relaxed max-w-2xl mt-6 md:mt-12 px-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: isMobile ? 1 : (isHovering ? 1 : 0),
              y: isMobile ? 0 : (isHovering ? 0 : 15)
            }}
            transition={{
              duration: 0.8,
              delay: (!isMobile && isHovering) ? 0.2 : 0,
              ease: "easeOut"
            }}
          >
            <p className="tracking-tight">기획, 설계, 마케팅, 운영까지 전체 흐름을 이해하고 움직이는 UXUI디자이너입니다.</p>
            <p className="tracking-tight">사용자 경험은 물론, 기획부터 운영까지의 흐름을 이해하며, <br /><span className="font-extrabold">제품의 <span className="text-[#121212]">맥락</span></span>을 중심에 두고 설계합니다.</p>
          </motion.div>
        </div>
      </section>


      {/* 02 - Projects List Section */}
      <section id="projects" className="w-full bg-[#0d0d0d] pt-24 md:pt-64 pb-32 md:pb-96 text-white">
        <div className="w-full px-4 md:px-8 mb-12 md:mb-24 flex justify-center">
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center">PROJECTS.</h2>
        </div>
        <div className="flex flex-col w-full border-t border-gray-800">
          {[
            {
              title: "골프장 통합관리 시스템",
              desc: "골퍼의 입장부터 결제, 퇴장까지의 전 과정을 아우르며,\n파편화된 기존 관리 시스템의 UI를 표준화하여 실무자의 업무 효율을 극대화한 골프장 B2B 통합 ERP 시스템 설계 프로젝트",
              tags: ["UX 설계", "Design System 구축", "UI 화면설계", "2023.03~2025.05"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#457FF3] hover:to-[#10182B]"
            },
            {
              title: "ARMATURE GOLF LEAGUE (SAGL)",
              desc: "스마트스코어 앱 내에서 누구나 손쉽게 대회에 참여할 수 있도록, \n복잡한 참가 신청의 진입 장벽을 낮추고 직관적인 흐름으로 개선한 아마추어 골프 리그 선수 등록 UX/UI 고도화 프로젝트",
              tags: ["UX 설계", "UI 화면설계", "2023.01~2023.03"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#2D343A] hover:to-[#09122A]"
            },
            {
              title: "스코어를 게이밍하다",
              desc: "단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, \n스마트스코어 프리미엄 멤버십 전용 초개인화 리포트 서비스",
              tags: ["UX 설계", "UI 화면설계", "약 2개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#00FF37] hover:to-[#FF00FB]"
            },
            {
              title: "골프와 선물하기 연계서비스",
              desc: "관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, \n구매 프로세스를 단축해 전환율을 극대화한 골프 앱 내 커머스(선물하기) UX 전략 및 설계",
              tags: ["UX 설계", "UI 화면설계", "약 4개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#716CA6] hover:to-[#5A4ED7]"
            },
            {
              title: "충전결제 서비스 PAYIS",
              desc: "번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, \n개인정보 보호와 직관적인 결제 경험을 동시에 확보한 선불형 간편 결제 앱(App) 구축 프로젝트",
              tags: ["UX 설계", "UI 화면설계", "약 6개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#0073FF] hover:to-[#263044]"
            },
            {
              title: "TALKAK 랜덤 사진전송 서비스",
              desc: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, \n복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있는 심플한 랜덤 사진 공유 소셜 서비스",
              tags: ["UX 설계", "UI 화면설계", "약 6개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#FD723B] hover:to-[#F26027]"
            }
          ].map((project, index) => (
            <Link
              key={index}
              to={`/project/${index + 1}`}
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-16 px-4 md:px-8 border-b border-gray-800 transition-all duration-500 overflow-hidden ${project.bgClass}`}
            >
              {/* Default Title
                  모바일: clamp(2.2rem,...) → 데스크탑: 원래 크기 clamp(1.8rem,6vw,5rem) */}
              <h3 className="text-[2.2rem] md:text-[clamp(1.8rem,6vw,5rem)] leading-[1.1] font-pretendard font-black tracking-tighter text-white break-words w-full md:w-5/12 mb-4 md:mb-0 group-hover:hidden transition-colors">
                {project.title}
              </h3>

              {/* Marquee Title */}
              <div className="hidden group-hover:flex overflow-hidden w-full md:w-5/12 mb-4 md:mb-0 mr-0 md:mr-8 items-center h-full">
                <div className="flex w-max animate-custom-marquee">
                  <div className="flex shrink-0">
                    {[...Array(2)].map((_, i) => (
                      <h3 key={i} className="text-[2.2rem] md:text-[clamp(1.8rem,6vw,5rem)] leading-[1.1] font-pretendard font-black tracking-tighter text-white/90 pr-12 shrink-0">
                        {project.title}
                      </h3>
                    ))}
                  </div>
                  <div className="flex shrink-0">
                    {[...Array(2)].map((_, i) => (
                      <h3 key={i + 2} className="text-[2.2rem] md:text-[clamp(1.8rem,6vw,5rem)] leading-[1.1] font-pretendard font-black tracking-tighter text-white/90 pr-12 shrink-0">
                        {project.title}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtitle & Chips */}
              <div className="w-full md:w-1/2 flex flex-row items-center justify-between mt-2 md:mt-0">
                <div className="flex flex-col w-full">
                  {/* desc: 모바일 text-base, 데스크탑 원래 크기 */}
                  <p className="text-gray-500 font-pretendard font-normal tracking-tight text-base md:text-sm lg:text-lg xl:text-xl break-keep whitespace-pre-line group-hover:text-white transition-colors line-clamp-3 md:line-clamp-none">
                    {project.desc}
                  </p>

                  {/* Chips: 모바일 text-xs, 데스크탑 원래 크기 */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 md:mt-0 md:max-h-0 md:opacity-0 md:overflow-hidden group-hover:mt-6 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs md:text-sm font-pretendard text-white border border-white/20 bg-black/10 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hover Chip - 데스크탑 전용 */}
      <AnimatePresence>
        {!isMobile && isHovering && (
          <motion.div
            className="fixed pointer-events-none z-50 text-sm md:text-base px-4 py-1.5 rounded-lg font-extrabold tracking-wide shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            맥락
          </motion.div>
        )}
      </AnimatePresence>

      {/* 03 - Expertise Section */}
      <section id="expertise" className="relative w-full h-[200vh] bg-[#fff] text-[#121212]">
        <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
          <div className="w-full px-4 md:px-8 mb-8 md:mb-16 xl:mb-24 flex justify-center">
            <h2 className="text-[clamp(3rem,12vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center">EXPERTISE.</h2>
          </div>

          <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center justify-center xl:items-start gap-10 md:gap-16 xl:gap-8 mt-2 md:mt-10 xl:mt-20">
            {/* Figma Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Design Tool</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F2F2F2] rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-5 shrink-0">
                  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] md:w-[30px] h-full object-contain">
                    <path d="M19 28.5C19 23.25 14.75 19 9.5 19C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38C14.75 38 19 33.75 19 28.5Z" fill="#1ABCFE" />
                    <path d="M0 9.5C0 4.25 4.25 0 9.5 0H19V19H9.5C4.25 19 0 14.75 0 9.5Z" fill="#F24E1E" />
                    <path d="M19 0H28.5C33.75 0 38 4.25 38 9.5C38 14.75 33.75 19 28.5 19H19V0Z" fill="#FF7262" />
                    <path d="M19 19H28.5C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38H19V19Z" fill="#A259FF" />
                    <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0AC170" />
                  </svg>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Figma</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["UI Design", "Prototyping", "Design System", "Collaboration"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Adobe Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Creative Cloud</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF0000] rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-5 shrink-0 shadow-lg shadow-red-100">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-[24px] md:w-[30px] h-full object-contain">
                    <path d="M14.653 3H21v17.402l-6.347-17.402zm-5.306 0H3v17.402L9.347 3zM12 10.367l4.184 10.035h-3.265l-1.429-3.714H8.714L7.286 20.402H4L12 10.367z" />
                  </svg>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Adobe</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["Photoshop", "Illustrator", "After Effects", "Premiere Pro"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Development Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Tech Stack</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2D2D2D] rounded-xl md:rounded-2xl flex items-center justify-center p-3 shrink-0">
                  <div className="flex gap-0.5 max-w-full justify-center">
                    <svg viewBox="0 0 24 24" fill="#E34F26" xmlns="http://www.w3.org/2000/svg" className="w-[18px] md:w-[22px] h-[18px] md:h-[22px]">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="#1572B6" xmlns="http://www.w3.org/2000/svg" className="w-[18px] md:w-[22px] h-[18px] md:h-[22px]">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Dev</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["HTML5", "CSS3 / Tailwind", "React.js", "JavaScript"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - My Approach Section */}
      <section id="approach" className="w-full bg-[#0d0d0d] pt-16 md:pt-32 pb-24 md:pb-48 text-white relative">
        <div className="w-full px-4 md:px-8 mb-12 md:mb-24 flex flex-col items-center">
          <div className="mb-8 md:mb-12">
            <span className="text-[16px] md:text-[30px] font-normal text-gray-400 border border-gray-700 px-5 py-2.5 md:px-10 md:py-5 rounded-[4rem] backdrop-blur-sm tracking-[-0.05em]">about</span>
          </div>
          <h2 className="text-[clamp(2.5rem,10vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center uppercase">
            MY APPROACH.
          </h2>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 origin-center max-w-sm sm:max-w-lg md:max-w-2xl xl:max-w-none mx-auto">

            {/* ─── Card 1: INTUITION (white) ─── */}
            {(() => {
              const isActive = isMobile && activeCard === 0;
              return (
                <div
                  className="group relative w-full aspect-[4/5] sm:aspect-[3.5/5] bg-[#ffffff] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer hover:scale-[1.05] md:hover:scale-[1.15] hover:z-50 transition-transform duration-300 ease-out shadow-2xl"
                  onClick={() => handleCardClick(0)}
                >
                  {/* Layer 0 — 이미지: 데스크탑 group-hover, 모바일 클릭 */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <img src={`${import.meta.env.BASE_URL}assets/profile.jpg`} alt="pulip kim" className="w-full h-full object-cover scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Layer 1 — 기본 콘텐츠: 숫자 + 제목 + 설명 */}
                  <div className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-2">
                    <span className={`flex-none text-2xl md:text-3xl lg:text-4xl font-light tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[#121212] group-hover:text-white'
                    }`}>(01)</span>

                    <div className="flex-1 flex items-center">
                      <h3 className={`text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter text-[#121212] uppercase leading-none transition-opacity duration-300 ${
                        isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                      }`}>INTUITION</h3>
                    </div>

                    <div className={`flex-none flex flex-col gap-1 transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}>
                      <span className="text-lg md:text-2xl lg:text-3xl text-[#121212] font-normal tracking-tighter">직관</span>
                      <p className="text-lg md:text-2xl lg:text-3xl text-[#121212] font-normal tracking-tighter break-keep leading-snug">첫 진입부터 다음 행동이 보이는 구조</p>
                    </div>
                  </div>

                  {/* Layer 2 — 열렸을 때 콘텐츠: 카드 전체 기준 absolute, 하단 정렬 */}
                  <div className={`absolute inset-0 z-20 p-6 md:p-10 lg:p-12 flex flex-col justify-end transition-opacity duration-500 ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'opacity-0 group-hover:opacity-100 delay-75'
                  }`}>
                    <span className="font-normal tracking-tighter uppercase leading-tight text-[clamp(2rem,6vw,4rem)] text-white mb-1">PULIP KIM</span>
                    <p className="font-normal uppercase text-xs md:text-sm lg:text-base text-gray-300">ARBEITERINPILITA@GMAIL.COM</p>
                  </div>
                </div>
              );
            })()}

            {/* ─── Card 2: FLOW (red) ─── */}
            {(() => {
              const isActive = isMobile && activeCard === 1;
              return (
                <div
                  className="group relative w-full aspect-[4/5] sm:aspect-[3.5/5] bg-[#d9331d] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer hover:scale-[1.05] md:hover:scale-[1.15] hover:z-50 transition-transform duration-300 ease-out shadow-2xl"
                  onClick={() => handleCardClick(1)}
                >
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <img src={`${import.meta.env.BASE_URL}assets/card2_hover_new.jpg`} alt="flow" className="w-full h-full object-cover scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-2">
                    <span className="flex-none text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">(02)</span>

                    <div className="flex-1 flex items-center">
                      <h3 className={`text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter text-white uppercase leading-none transition-opacity duration-300 ${
                        isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                      }`}>FLOW</h3>
                    </div>

                    <div className={`flex-none flex flex-col gap-1 transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}>
                      <span className="text-lg md:text-2xl lg:text-3xl text-white font-normal tracking-tighter">흐름</span>
                      <p className="text-lg md:text-2xl lg:text-3xl text-white font-normal tracking-tighter break-keep leading-snug">사용자의 목적과 제품의 구조가 일치하는 지점</p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 z-20 p-6 md:p-10 lg:p-12 flex flex-col justify-end transition-opacity duration-500 ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'opacity-0 group-hover:opacity-100 delay-75'
                  }`}>
                    <a href="#projects" className="w-fit group/link">
                      <span className="font-normal tracking-tighter text-white uppercase leading-tight text-[clamp(2rem,6vw,4rem)] group-hover/link:underline underline-offset-[8px] decoration-4">MORE WORKS</span>
                    </a>
                  </div>
                </div>
              );
            })()}

            {/* ─── Card 3: CONTEXT (dark) ─── */}
            {(() => {
              const isActive = isMobile && activeCard === 2;
              return (
                <div
                  className="group relative w-full aspect-[4/5] sm:aspect-[3.5/5] bg-[#1b1b1b] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer hover:scale-[1.05] md:hover:scale-[1.15] hover:z-50 transition-transform duration-300 ease-out shadow-2xl"
                  onClick={() => handleCardClick(2)}
                >
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <img src={`${import.meta.env.BASE_URL}assets/card3_hover_new.jpg`} alt="context" className="w-full h-full object-cover scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-2">
                    <span className="flex-none text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white/80 group-hover:text-white transition-colors duration-300">(03)</span>

                    <div className="flex-1 flex items-center">
                      <h3 className={`text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter text-white uppercase leading-none transition-opacity duration-300 ${
                        isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                      }`}>CONTEXT</h3>
                    </div>

                    <div className={`flex-none flex flex-col gap-1 transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}>
                      <span className="text-lg md:text-2xl lg:text-3xl text-white font-normal tracking-tighter">맥락</span>
                      <p className="text-lg md:text-2xl lg:text-3xl text-white font-normal tracking-tighter break-keep leading-snug">화면이 아닌 제품 전체의 구조를 먼저 읽는 것</p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 z-20 p-6 md:p-10 lg:p-12 flex flex-col justify-end gap-2 transition-opacity duration-500 ${
                    isMobile ? (isActive ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'opacity-0 group-hover:opacity-100 delay-75'
                  }`}>
                    <a href="mailto:arbeiterinpilita@gmail.com" className="w-fit group/link">
                      <span className="font-normal tracking-tighter text-white uppercase leading-tight text-[clamp(2rem,6vw,4rem)] group-hover/link:underline underline-offset-[8px] decoration-4">GET IN TOUCH</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-fit group/link2">
                      <span className="font-normal tracking-tighter text-white uppercase leading-tight text-[clamp(2rem,6vw,4rem)] group-hover/link2:underline underline-offset-[8px] decoration-4">LINKEDIN</span>
                    </a>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>
    </>
  );
}

function RollingSkills({ skills, color }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="relative h-6 md:h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className={`${color} text-lg md:text-xl font-medium tracking-tight whitespace-nowrap`}
        >
          {skills[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default Home;
