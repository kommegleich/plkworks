import React from 'react';
import { motion } from 'framer-motion';
import {
    ProjectLayout,
    ProjectHeroExact,
    ProjectGrid,
    ProjectSplit,
    ProjectFullMedia,
    ProjectHighlight,
    ProjectCenteredIntro,
    ProjectCenteredHighlightBlock,
    ProjectThreeColTextBlocks,
    ProjectPhoneWithMarquee
} from '../components/ProjectLayout';

import imgHero from '../images/project3_backef.png';
import imgM01 from '../images/project3-m01.webp';
import imgM02 from '../images/project3-m02.webp';
import imgM03 from '../images/project3-m03.webp';
import imgM04 from '../images/project3-m04.webp';
import imgM05 from '../images/project3-m05.webp';
import imgM06 from '../images/project3-m06.webp';
import imgM07 from '../images/project3-m07.webp';
import imgM08 from '../images/project3-m08.webp';
import imgM09 from '../images/project3-m09.webp';
import vidProto from '../images/project3-proto.mov';

function Project03() {
    return (
        <ProjectLayout
            nextProjectLink="/project/4"
            nextProjectTitle="골프와 선물하기 연계서비스"
            nextProjectBg="bg-gradient-to-r from-[#F43DE5] to-[#9F2152]"
            nextProjectDesc="관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, \n구매 프로세스를 단축해 전환율을 극대화한 골프 앱 내 커머스(선물하기) UX 전략 및 설계"
            bgColor="bg-[#010101]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="스코어를 게이밍하다"
                subtitle="스마트스코어 프리미엄 멤버십 전용 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, 초개인화 리포트 서비스입니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 2개월"] }
                ]}
                bgImage={imgHero}
                isFullHeight={true}
                textColor="text-white"
                subtitleColor="text-white/80"
                labelColor="text-white/50"
            />

            {/* 02 - Overlapping phones image area */}
            <section className="w-full relative z-20 flex justify-center -mt-48 md:-mt-[35vh] px-6 md:px-12 lg:px-16 pb-24 mx-auto max-w-[2000px]">
                <motion.img
                    src={imgM01}
                    alt="Phones mockups"
                    className="w-full max-w-[1800px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </section>

            {/* 03 - 스코어 유료화 요청 - 중앙 정렬 텍스트 영역 */}
            <ProjectCenteredIntro
                title={'"스코어 유료화 요청, 단순한 출발"'}
                text={<>
                    서비스 내 핵심 기능인 '스코어'에 대해, CEO의 요청으로 유료화 가능성을 검토<br />
                    기존 무료로 제공되던 기능을 수익화 대상으로 전환하는 것을 1차 목표로 설정하고, 유료화의 방향성과 사용자 반응을 함께 고려한 전략 수립
                </>}
            />

            {/* 04 - Problem 섹션 - 중앙 정렬 강조 영역 */}
            <ProjectCenteredHighlightBlock
                label="Problem"
                title="기존 스코어 서비스의 유료화가 사용자에게 거부감을 줄 수 있지 않을까?"
                titleColor="bg-[linear-gradient(45deg,#17C350,#FBFF00)] bg-clip-text text-transparent"
                text={<>
                    단순 과금 모델은 사용자 이탈과 부정적 반응을 초래할 수 있다고 판단<br />
                    직접적인 유료 전환보다는, 부가적 가치를 제공하는 방향의 유료화가 필요하다는 결론에 도달
                </>}
            />

            {/* 05 - Search 섹션 - 3열 레이아웃 텍스트 영역 */}
            <ProjectThreeColTextBlocks
                label="Search"
                columns={[
                    {
                        title: "유료 전환을 가능하게 할\n새로운 가치는 무엇인가",
                        text: <>
                            <span>내부 논의를 통해 단순 유료화 대신,<br />새로운 경험이나 부가 기능을 통해 사용자가 <span className="bg-[linear-gradient(45deg,#17C350,#FBFF00)] bg-clip-text text-transparent font-semibold">지불할 만한 가치</span>를<br />느낄 수 있어야 한다는 점이 정리되었습니다.</span>
                            <span>이에 따라 어떤 가치가 유료화 대상이 될 수 있을지<br />시장과 사용자 데이터를 통해 탐색하기 시작했습니다.</span>
                        </>
                    },
                    {
                        title: "서비스 내에서 유료화 기회가\n가장 높은 기능은 무엇인가",
                        text: <>
                            <span>실제 사용자 로그를 분석한 결과,<br />전체 기능 중 가장 많이 사용되고 오랫동안 머무는 곳은<br /><span className="bg-[linear-gradient(45deg,#17C350,#FBFF00)] bg-clip-text text-transparent font-semibold">스코어</span>였습니다.</span>
                            <span>실제 핵심사용자, 즉 골퍼들은<br />자신의 플레이를 돌아보는 경향이 강했고,<br />기존 40-60대 중장년층 사용자 외에도 20-30대의 신규 유입 사용<br />자가 빠르게 증가하고 있었습니다.</span>
                        </>
                    },
                    {
                        title: "동종 업계 서비스는\n어떤 경험에 가치를 두고 있는가",
                        text: <>
                            <span>골프존, 카카오VX 등 유사 서비스를 조사한 결과,<br />최근 무료 기능은 <span className="bg-[linear-gradient(45deg,#17C350,#FBFF00)] bg-clip-text text-transparent font-semibold">단순 정보 제공보다 개인 맞춤형 분석</span>과 피드백<br />중심으로 설계되고 있었습니다.</span>
                            <span>플레이 이력 기반 성향 분석과 목표 제시가 과금 유도에 효과적이<br />며, 실질적인 인사이트 제공이 핵심 가치로 자리잡고 있음을 확인했<br />습니다.</span>
                        </>
                    }
                ]}
            />

            {/* 06 - 폰 목업과 무한 스크롤 키워드 (Marquee) 영역 */}
            <ProjectPhoneWithMarquee
                phoneImage={imgM02}
                title={"기존 데이터에서 가져 올 수 있는\n개인화 패턴 도출"}
                keywords={["평균 타수", "동반자의 정보", "홀 별 스코어", "핸디캡", "베스트 라운드", "동반자와의 평균 비교", "홀별 퍼포먼스 비교", "각 홀의 파 정보", "라운드 히스토리", "라운드별 타수 편차", "라운드별 스코어 변화 추이", "최악의 라운드", "홀 인원수", "코스별 성적 비교", "특정 파 유형"]}
                bgColor="bg-[#010101]"
            />

            {/* 07 - 스코어를 해석하다 / 기록하다 2단 이미지 레이아웃 */}
            <section className="w-full relative z-20 flex flex-col items-center px-6 md:px-12 lg:px-16 py-24 mx-auto max-w-[1400px]">
                {/* m03 title image */}
                <motion.img
                    src={imgM03}
                    alt="스코어를 해석하다 스코어를 기록하다"
                    className="w-full max-w-[800px] h-auto object-contain mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Two column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full">
                    {/* Left Column (Insight Layer) */}
                    <motion.div
                        className="flex flex-col items-center text-center h-full justify-between"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center">
                            <img src={imgM04} alt="나의 골프스토리 그 시절 그 라운드 (Insight)" className="w-[180px] md:w-[220px] h-auto object-contain mb-8 md:mb-12" />

                            <h4 className="text-[#8DBE36] text-sm md:text-base font-medium mb-4 tracking-widest uppercase">
                                PERFORMANCE INSIGHT LAYER
                            </h4>
                            <h3 className="text-[#E0E0E0] text-lg md:text-xl font-bold mb-6">
                                데이터 기반 성과 해석 중심 설계
                            </h3>
                            <p className="text-[#888888] text-[15px] md:text-base leading-[1.7] whitespace-pre-line mb-16 break-keep">
                                {`반복된 플레이 데이터를 기반으로 성향 분석과 성과 인식을\n가능하게 하는 분석형 서비스로 설계\n\n스코어를 개인화된 인사이트로 전환해\n사용자 성장 흐름을 시각화`}
                            </p>
                        </div>

                        <img src={imgM06} alt="Performance Insight Phone Mockup" className="w-full max-w-[420px] h-auto object-contain" />
                    </motion.div>

                    {/* Right Column (Emotional Memory Layer) */}
                    <motion.div
                        className="flex flex-col items-center text-center mt-12 md:mt-0 h-full justify-between"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center">
                            <img src={imgM05} alt="나의 골프스토리 그 시절 그 라운드 (Emotion)" className="w-[180px] md:w-[220px] h-auto object-contain mb-8 md:mb-12" />

                            <h4 className="text-[#D94F7B] text-sm md:text-base font-medium mb-4 tracking-widest uppercase">
                                EMOTIONAL MEMORY LAYER
                            </h4>
                            <h3 className="text-[#E0E0E0] text-lg md:text-xl font-bold mb-6">
                                감정 회상을 위한 감성 중심 설계
                            </h3>
                            <p className="text-[#888888] text-[15px] md:text-base leading-[1.7] whitespace-pre-line mb-16 break-keep">
                                {`플레이 당시의 시간, 장소, 동반자를 중심으로\n감정적 기억을 구조화한 경험 기록형 서비스\n\n정서적 몰입과 회상을 위한 타임라인 기반 UI로 설계`}
                            </p>
                        </div>

                        <img src={imgM07} alt="Emotional Memory Phone Mockup" className="w-full max-w-[420px] h-auto object-contain" />
                    </motion.div>
                </div>
            </section>

            {/* 08 - Data driven golf experience. 2단 분할 레이아웃 (비디오 & 이미지 크로스페이드) */}
            <section className="w-full relative z-20 flex flex-col items-center px-6 md:px-12 lg:px-16 py-24 mx-auto max-w-[1600px] bg-[#010101]">
                <div className="w-full text-center md:text-left mb-12 md:mb-16">
                    <h2 className="text-[#E0E0E0] text-[clamp(2.5rem,5vw,5rem)] leading-tight font-bold tracking-tight">
                        Data driven golf experience.
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column: Full Screen Video */}
                    <div className="w-full h-auto aspect-square md:aspect-[4/5] rounded-[40px] md:rounded-[80px] overflow-hidden relative bg-[#111]">
                        <video
                            src={vidProto}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Column: Cross-fading Images */}
                    <div className="w-full h-auto aspect-square md:aspect-[4/5] rounded-[40px] md:rounded-[80px] overflow-hidden relative bg-[#111]">
                        <motion.div
                            className="absolute inset-0 w-full h-full bg-[#111]"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                        >
                            <img src={imgM08} alt="Data Driven 골프 경험 1" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 w-full h-full bg-[#111]"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                        >
                            <img src={imgM09} alt="Data Driven 골프 경험 2" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </ProjectLayout>
    );
}

export default Project03;
