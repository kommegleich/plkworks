import React from 'react';
import { motion } from 'framer-motion';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectCenteredIntro } from '../components/ProjectLayout';
import imgHero from '../images/project4-m01.png';
import imgM02 from '../images/project4-m02.png';
import imgM03 from '../images/project4-m03.png';
import imgM04 from '../images/project4-m04.png';
import imgEf01 from '../images/project4-ef01.png';
import imgEf02 from '../images/project4-ef02.png';
import imgEf03 from '../images/project4-ef03.png';
import imgEf04 from '../images/project4-ef04.png';
import imgEf05 from '../images/project4-ef05.png';
import imgEf06 from '../images/project4-ef06.png';
import imgM05 from '../images/project4-m05.png';
import imgM06 from '../images/project4-m06.png';
import imgM07 from '../images/project4-m07.png';
import imgM08 from '../images/project4-m08.png';

const effectImages = [imgEf01, imgEf02, imgEf03, imgEf04, imgEf05, imgEf06];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: "easeOut" }
};

const fadeInSubtle = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.3 } },
    viewport: { once: true, margin: "-100px" }
};

function Project04() {
    return (
        <ProjectLayout
            nextProjectLink="/project/5"
            nextProjectTitle="충전결제 서비스 PAYIS"
            nextProjectBg="bg-gradient-to-r from-[#0073FF] to-[#263044]"
            nextProjectDesc="번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, \n개인정보 보호와 직관적인 결제 경험을 동시에 확보한 선불형 간편 결제 앱(App) 구축 프로젝트"
            bgColor="bg-white"
            textColor="text-[#121212]"
        >
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="골프와 선물하기 연계서비스"
                subtitle="골프 네트워크를 확장하는 선물하기 UX 전략"
                metaItems={[
                    {
                        label: "OVERVIEW",
                        value: "관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, 구매 프로세스를 단축해 전환율을 극대화한 골프 앱 내 커머스(선물하기) UX 전략 및 설계"
                    },
                    {
                        label: "SCOPE",
                        value: [
                            "UX 전략 수립",
                            "UI 화면 설계",
                            "선물하기 프로세스 최적화",
                            "약 4개월"
                        ]
                    },
                    {
                        label: "RESULTS",
                        value: [
                            <span>
                                <strong>구매 전환율 향상</strong><br />
                                복잡한 선물하기 단계를 간소화하고 직관적인 UI를 제공하여 실제 구매 완료율 상승 견인
                            </span>,
                            <span>
                                <strong>관계 기반 서비스 확장</strong><br />
                                리마인드 알림 시스템을 통해 사용자 간 소통 빈도를 높이고 서비스 체류 시간 연장
                            </span>,
                            <span>
                                <strong>큐레이션 만족도 제고</strong><br />
                                사용자 데이터를 기반으로 한 맞춤형 상품 추천을 통해 선물 선택의 편의성 및 쇼핑 경험 개선
                            </span>
                        ]
                    }
                ]}
                bgImage={imgHero}
                isFullHeight={true}
                textColor="text-white"
                subtitleColor="text-white/80"
                labelColor="text-white/50"
            />

            {/* 04 - 기획배경 배경 (Overlapping image and gradient background) */}
            <section className="w-full relative z-20 flex flex-col items-center pb-32 bg-gradient-to-br from-[#101010] to-[#021525]">
                {/* Overlapping Image Container */}
                <motion.div
                    className="w-full max-w-[1240px] px-6 md:px-12 lg:px-16 -mt-32 md:-mt-56 mb-20 md:mb-32 z-30"
                    {...fadeInSubtle}
                >
                    <img
                        src={imgM02}
                        alt="Project 4 Device Mockups"
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>

                {/* Text Content Area */}
                <motion.div
                    className="w-full max-w-[1000px] px-6 md:px-12 text-center text-white flex flex-col items-center"
                    {...fadeInUp}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">기획배경</h3>

                    <p className="text-[#A0A0A0] text-sm md:text-base leading-[2] mb-12 tracking-tight break-keep whitespace-pre-line">
                        연락처 기반으로 연동된 친구 목록은 존재했지만, 사용자 간 실질적인 교류를 이끌어내는 구조는 미흡했습니다.<br />
                        감정적 상호작용이나 반복적인 사용을 유도할 수 있는 트리거가 부족했고,<br />
                        이는 곧 앱 내 커뮤니티의 약화와 함께 마켓 등 상업적 기능으로의 자연스러운 유입 경로가 부족하다는 한계로 이어졌습니다.
                    </p>

                    <p className="text-white text-base md:text-lg leading-[1.8] tracking-tight break-keep whitespace-pre-line font-medium pb-24 w-full">
                        <span className="text-[#3DB6F4]">선물하기</span>는 유저 간 연결을 실질적 상호작용으로 전환시키는 감성 기반 인터페이스로써,<br />
                        커뮤니티 활성화와 매출 전환을 동시에 촉진할 수 있는 전략적 접점으로 기획되었습니다.
                    </p>

                    <motion.div 
                        className="w-full max-w-[1000px] mt-8"
                        {...fadeInSubtle}
                    >
                        <img
                            src={imgM03}
                            alt="Project 4 Planning Flow"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* 05 - 핵심개선 01 영역 (White background) */}
            <section className="w-full relative z-20 flex flex-col items-center py-24 md:py-32 px-6 md:px-12 bg-white text-[#222]">
                <motion.div
                    className="w-full max-w-[800px] text-center flex flex-col items-center"
                    {...fadeInUp}
                >
                    <h4 className="text-[#6563A4] text-lg md:text-xl font-bold mb-4">
                        핵심개선 01
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-[#111]">
                        골친서비스의 컨텐츠 강화
                    </h3>

                    {/* Sub Item 01 */}
                    <div className="mb-16 w-full flex flex-col items-center">
                        <h5 className="text-lg md:text-xl font-bold text-[#222] mb-6">서비스 내 스코어 기반 알림 기능 추가</h5>
                        <p className="text-[#666] text-[15px] md:text-base leading-[1.8] break-keep whitespace-pre-line text-center">
                            사용자 스코어 활동 데이터를 기반으로, 홀인원·알바트로스·버디러시·올림픽파 등 약 30여 종의 의미 있는 기록을 자동 탐지 및 큐레이션
                            이벤트 발생 시 실시간 알림을 통해 친구 간 축하·공유 흐름을 유도하며, 앱 내 재방문과 소셜 인게이지먼트를 자연스럽게 증가시킴
                            단순 기록을 넘어 감정적 연결을 강화하는 구조로, 친구 기반 커뮤니티의 질적 활성을 유도
                        </p>
                    </div>

                    {/* Sub Item 02 */}
                    <div className="w-full flex flex-col items-center">
                        <h5 className="text-lg md:text-xl font-bold text-[#222] mb-6">관계 기반 리마인드 알림 도입</h5>
                        <p className="text-[#666] text-[15px] md:text-base leading-[1.8] break-keep whitespace-pre-line text-center">
                            골친의 생일, 첫 라운드 기념일 등 의미 있는 관계 기반 이벤트를 자동 인식하여, 감성적인 리마인드 알림으로 전달
                            함께한 라운드 사진·기록과 연동되어 '추억 회상 + 선물 제안'으로 이어지는 감정적 흐름을 설계
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 06 - 개선 성과 영역 (Marquee + m04 Images) */}
            <section className="w-full relative flex flex-col items-center pt-24 md:pt-32 pb-32 md:pb-40 px-0 bg-white overflow-hidden">
                {/* Marquee Background */}
                <div className="absolute top-[35%] md:top-[42%] left-0 w-full flex z-10 pointer-events-none overflow-hidden pb-[100px]">
                    <div className="flex w-max" style={{ animation: 'custom-marquee 60s linear infinite' }}>
                        {/* Repeat 1 */}
                        <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                            {effectImages.map((img, idx) => (
                                <img key={`ef1-${idx}`} src={img} alt={`Effect ${idx}`} className="w-[180px] md:w-[320px] h-auto object-contain drop-shadow-sm shrink-0" />
                            ))}
                        </div>
                        {/* Repeat 2 */}
                        <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                            {effectImages.map((img, idx) => (
                                <img key={`ef2-${idx}`} src={img} alt={`Effect loop ${idx}`} className="w-[180px] md:w-[320px] h-auto object-contain drop-shadow-sm shrink-0" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Foreground Image */}
                <motion.div
                    className="w-full max-w-[1240px] px-6 md:px-12 relative z-20 flex justify-center mt-12 md:mt-16"
                    {...fadeInSubtle}
                >
                    <img
                        src={imgM04}
                        alt="Project 4 Results Phones"
                        className="w-[90%] md:w-full max-w-[840px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                    />
                </motion.div>
            </section>

            {/* 07 - 핵심개선 02 영역 (#F2F9FF background) */}
            <section className="w-full relative z-20 flex flex-col items-center py-24 md:py-32 px-6 md:px-12 bg-[#F2F9FF] text-[#222]">
                <motion.div
                    className="w-full max-w-[800px] text-center flex flex-col items-center"
                    {...fadeInUp}
                >
                    <h4 className="text-[#6563A4] text-lg md:text-xl font-bold mb-4">
                        핵심개선 02
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-[#111]">
                        선물하기 UI 및 구매 프로세스 최적화
                    </h3>

                    {/* Sub Item 01 */}
                    <div className="mb-16 w-full flex flex-col items-center">
                        <h5 className="text-lg md:text-xl font-bold text-[#222] mb-6">구매 흐름 단축 및 전환 유도형 인터페이스 설계</h5>
                        <p className="text-[#666] text-[15px] md:text-base leading-[1.8] break-keep whitespace-pre-line text-center">
                            선물하기 CTA 버튼을 이벤트 알림 하단 주요 접점에 고정 배치하여 클릭을 유도
                        </p>
                    </div>

                    {/* Sub Item 02 */}
                    <div className="w-full flex flex-col items-center">
                        <h5 className="text-lg md:text-xl font-bold text-[#222] mb-6">관계 기반 리마인드 알림 도입</h5>
                        <p className="text-[#666] text-[15px] md:text-base leading-[1.8] break-keep whitespace-pre-line text-center">
                            메시지 추가 기능을 통해 감정 표현이 가능한 개인화된 선물 경험을 제공
                            자주 선물한 아이템을 기반으로 한 '빠른 선물(원클릭)' 기능은 진입 장벽을 줄이고 반복 구매를 유도
                        </p>
                    </div>
                </motion.div>

                {/* Grouped 3-Column Area (Text + Image) */}
                <motion.div
                    className="w-full max-w-[1400px] mt-24 md:mt-32 px-6 md:px-12 relative z-10"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
                        {/* Column 1 */}
                        <motion.div className="flex flex-col items-center" variants={fadeInSubtle}>
                            <div className="text-center mb-12 h-32 flex flex-col justify-center">
                                <p className="text-[#888] text-[15px] md:text-lg leading-[1.6] mb-4 break-keep">
                                    선물 동선의<br />자연스러운 진입 유도
                                </p>
                                <h4 className="text-[#222] text-xl md:text-2xl font-semibold leading-[1.4] break-keep">
                                    활동 기반 알림에<br />선물 CTA를 직접 연결
                                </h4>
                            </div>
                            <img
                                src={imgM05}
                                alt="Project 4 Device 05"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                            />
                        </motion.div>

                        {/* Column 2 */}
                        <motion.div className="flex flex-col items-center" variants={fadeInSubtle}>
                            <div className="text-center mb-12 h-32 flex flex-col justify-center">
                                <p className="text-[#888] text-[15px] md:text-lg leading-[1.6] mb-4 break-keep">
                                    탐색 없이<br />바로 선택 가능
                                </p>
                                <h4 className="text-[#222] text-xl md:text-2xl font-semibold leading-[1.4] break-keep">
                                    관계 기반 큐레이션으로<br />개인화된 선물 제안
                                </h4>
                            </div>
                            <img
                                src={imgM06}
                                alt="Project 4 Device 06"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                            />
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div className="flex flex-col items-center" variants={fadeInSubtle}>
                            <div className="text-center mb-12 h-32 flex flex-col justify-center">
                                <p className="text-[#888] text-[15px] md:text-lg leading-[1.6] mb-4 break-keep">
                                    구매 완료까지<br />이탈률 감소
                                </p>
                                <h4 className="text-[#222] text-xl md:text-2xl font-semibold leading-[1.4] break-keep">
                                    메시지 선택 후 바로 결제,<br />전환율 최적화
                                </h4>
                            </div>
                            <img
                                src={imgM07}
                                alt="Project 4 Device 07"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* White Background Overlap Container (Bottom half) */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[450px] bg-white z-0"></div>
            </section>

            {/* 09 - 핵심개선 03 영역 (White background) */}
            <section className="w-full relative z-20 flex flex-col items-center py-24 md:py-32 px-6 md:px-12 bg-white text-[#222]">
                <motion.div
                    className="w-full max-w-[800px] text-center flex flex-col items-center"
                    {...fadeInUp}
                >
                    <h4 className="text-[#6563A4] text-lg md:text-xl font-bold mb-4">
                        핵심개선 03
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-[#111]">
                        실시간 인터랙션 기반 선물 트리거 설계
                    </h3>

                    <div className="w-full flex flex-col items-center">
                        <h5 className="text-lg md:text-xl font-bold text-[#222] mb-8">
                            태블릿 이벤트 기반 팝업 CTA로 즉시성 높은 사용자 행동 유도
                        </h5>
                        <p className="text-[#666] text-[15px] md:text-base leading-[1.8] break-keep whitespace-pre-line text-center">
                            라운드 중 실시간 이벤트(버디, 이글 등) 발생 시, 동반자에게 바로 선물할 수 있는 팝업 제공
                            개인 맞춤형 추천 선물 리스트를 자동 노출하여 선택 부담 최소화
                            현장감 있는 인터랙션으로 감정적 몰입 강화 시켰으며, 즉시성 기반 구매 전환 유도
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 10 & 11 - Overlapping m08 Image & Results */}
            <section className="w-full relative flex flex-col items-center border-none outline-none">
                {/* Image Area - z-30 so it sits on top */}
                <div className="w-full flex justify-center relative z-30 px-0 border-none outline-none">
                    <motion.img
                        src={imgM08}
                        alt="Project 4 Tablet Mockup"
                        className="w-full h-auto block object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-none outline-none"
                        {...fadeInSubtle}
                    />
                </div>

                {/* Background Section - z-10 so it goes behind the image using negative margin */}
                <div className="w-full relative bg-[#030303] overflow-hidden flex flex-col items-center -mt-[25%] md:-mt-[20%] pt-[35%] md:pt-[30%] pb-32 md:pb-48 lg:pb-64 z-10 border-none outline-none">
                    {/* Content Container */}
                    <div className="w-full max-w-[1240px] px-6 md:px-12 relative z-20 flex flex-col items-center -mt-8 md:mt-0 lg:mt-12">
                        <motion.div
                            className="w-full flex flex-col items-center"
                            {...fadeInUp}
                        >
                            <h4 className="text-[#6563A4] text-lg md:text-xl font-bold mb-4">
                                예상효과
                            </h4>
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-24 md:mb-32 text-center text-white leading-[1.3] break-keep">
                                서비스 연동을 통한 사용자 흐름 최적화와 매출 전환 가속
                            </h3>
                        </motion.div>

                        {/* Three Column Results */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 w-full"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Column 1 */}
                            <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                                <h5 className="text-white text-xl md:text-2xl font-bold mb-8 break-keep">
                                    마켓 상품 노출률 및<br />구매 전환율 증가
                                </h5>
                                <div className="text-[#A0A0A0] text-[15px] md:text-base leading-[1.8] flex flex-col gap-4 break-keep">
                                    <p>선물하기 CTA 확대로 마켓 유입 경로가 다각화되며,<br />상품 노출 빈도가 높아짐</p>
                                    <p>오픈 전 6개월 대비 평균 매출 약 24% 증가 기록</p>
                                </div>
                            </motion.div>

                            {/* Column 2 */}
                            <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                                <h5 className="text-white text-xl md:text-2xl font-bold mb-8 break-keep">
                                    골친 기반 체류 시간 및<br />상호작용 증가
                                </h5>
                                <div className="text-[#A0A0A0] text-[15px] md:text-base leading-[1.8] flex flex-col gap-4 break-keep">
                                    <p>활동 기반 알림과 축하 기능 도입으로<br />골친 탭 평균 체류 시간이 15% 이상 향상</p>
                                    <p>자연스러운 감정 교류가 이어지며 서비스 재방문율 증가</p>
                                </div>
                            </motion.div>

                            {/* Column 3 */}
                            <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                                <h5 className="text-white text-xl md:text-2xl font-bold mb-8 break-keep">
                                    마켓 콘텐츠 및<br />유입 구조 확장
                                </h5>
                                <div className="text-[#A0A0A0] text-[15px] md:text-base leading-[1.8] flex flex-col gap-4 break-keep">
                                    <p>선물 수요 증가에 따라 마켓 입점 상품 수가 확대되며<br />콘텐츠 다양성이 향상</p>
                                    <p>사용자 진입 경로가 늘어나며 마켓 전체 트래픽과 구매 전환율이 함께 상승</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </ProjectLayout>
    );
}

export default Project04;
