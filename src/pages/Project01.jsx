import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectTreeChart, ProjectFullMediaWithTitle, ProjectImageMarquee, ProjectGrid3Col, ProjectPosterWithText, ProjectTwoColumnMedia } from '../components/ProjectLayout';

import imgM01 from '../images/project1-m01.webp';
import imgM02 from '../images/project1-m02.webp';
import inter01 from '../images/project1-inter01.webp';
import inter02 from '../images/project1-inter02.webp';
import inter03 from '../images/project1-inter03.webp';
import inter04 from '../images/project1-inter04.webp';
import inter05 from '../images/project1-inter05.webp';
import inter06 from '../images/project1-inter06.webp';
import inter07 from '../images/project1-inter07.webp';
import inter08 from '../images/project1-inter08.webp';
import inter09 from '../images/project1-inter09.webp';
import inter10 from '../images/project1-inter10.webp';
import pages01 from '../images/project1-pages01.webp';
import pages02 from '../images/project1-pages02.webp';
import pages03 from '../images/project1-pages03.webp';
import pages04 from '../images/project1-pages04.webp';
import pages05 from '../images/project1-pages05.webp';
import pages06 from '../images/project1-pages06.webp';
import pages07 from '../images/project1-pages07.webp';
import pos01 from '../images/project1-pos01.webp';

const interImages = [inter01, inter02, inter03, inter04, inter05, inter06, inter07, inter08, inter09, inter10];
const pagesImages = [pages01, pages02, pages03, pages04, pages05, pages06, pages07];

function Project01() {
    return (
        <ProjectLayout
            nextProjectLink="/project/2"
            nextProjectTitle="ARMATURE GOLF LEAGUE"
            nextProjectBg="bg-gradient-to-r from-[#2D343A] to-[#09122A]"
            nextProjectDesc="스마트스코어 앱 내에서 누구나 손쉽게 대회에 참여할 수 있도록, \n복잡한 참가 신청의 진입 장벽을 낮추고 직관적인 흐름으로 개선한 아마추어 골프 리그 선수 등록 UX/UI 고도화 프로젝트"
        >

            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE, RESULTS) */}
            <ProjectHeroExact
                title="골프장 통합 ERP 솔루션"
                subtitle="골프장 관리의 새로운 기준, 골프장 모든 프로세스를 한번에!"
                metaItems={[
                    {
                        label: "OVERVIEW",
                        value: "골퍼의 입장부터 결제·퇴장까지 모든 서비스를 제공하는 프론트 솔루션과, 회원·매출·코스 관리 등 골프장 운영 전반을 지원하는 B2B 백오피스를 하나로 통합한 ERP 시스템"
                    },
                    {
                        label: "SCOPE",
                        value: [
                            "UX설계",
                            "Design System 구축",
                            "UI화면설계",
                            "2023.03~2025.05"
                        ]
                    },
                    {
                        label: "RESULTS",
                        value: [
                            <span>
                                <strong>도입 현황</strong><br />
                                국내 500여 개 골프장 중 스마트스코어 태블릿·관제시스템이 도입된 350여 개 골프장을 중심으로 ERP 시스템을 순차 전환 중. <br />
                                <span style={{ color: '#9A9BA5' }}>2025년 킹즈락 컨트리클럽을 시작으로 연내 국내 30여 곳·해외 20여 곳 도입 예정</span>
                            </span>,
                            <span>
                                <strong>기술 방향성</strong><br />
                                CS의 구조적 한계를 걷어내고 웹(Web)기반으로 전면 재설계 유형·규모·국가를 가리지 않는 확장성을 핵심 원칙으로 모듈 단위 고도화 진행 중
                            </span>,
                            <span>
                                <strong>UX 핵심 성과</strong><br />
                                수십 개의 모듈, 수백 개의 기능. 그러나 사용자는 아무것도 배우지 않아도 되는 구조로 설계 <br /> <span style={{ backgroundColor: '#F2F7FE', color: '#457FF3', padding: '0 4px', borderRadius: '4px' }}>어떤 페이지에 진입하든 다음 행동이 보이는 일관된 UX 원칙 적용</span>하여 CS 환경에 익숙한 현장 사용자의 학습 시간 단축 및 업무 효율 향상에 기여
                            </span>
                        ]
                    }
                ]}
            />

            {/* 02 - 전체 화면을 채우는 풀사이즈 메인 이미지 영역 */}
            <ProjectFullMedia
                src={imgM01}
            />

            {/* 03 - 플로우차트 / 계층구조 다이어그램을 보여주는 ERP 트리 구조 영역 */}
            <ProjectTreeChart
                chip="Flowchart"
                title="골프장 업무관리에 대한 세분화 및 2Depth 기능분류"
                subtitle={
                    <>
                        서비스 내 모든 사용자 시나리오를 정밀하게 분석하여 분기 조건과 예외 케이스를 포함한 전략적 플로우차트(Flowchart)를 구축했습니다.
                        <br />14여 개의 방대한 업무 기능을 직관적인 2-Depth 계층 구조(Hierarchy)로 재배치하여 정보 구조(IA)의 가독성과 업무 효율을 극대화했습니다.
                        <br />
                        특히 전 직군이 동일한 기준으로 제품의 논리를 해석할 수 있는 협업 가이드라인을 제시함으로써, 신규 기능 확장 시에도 일관된 사용자 경험을 유지하고 커뮤니케이션 비용을 획기적으로 낮추는 시스템적 기반을 마련했습니다.
                    </>
                }
                rootNode="ERP"
                branches={[
                    { title: "대시보드", children: [] },
                    { title: "회원관리", children: ["회원관리", "블랙리스트 관리", "위약자관리", "휴면계정관리", "단체관리", "쿠폰관리", "할인정책", "혜택관리"] },
                    { title: "골프예약", children: ["골프 워크캘린더", "골프 요금설정", "예약시트관리", "대기예약/추첨", "골프예약현황", "대행사관리", "타임오픈관리"] },
                    { title: "프론트", children: ["내장", "정산", "미신"] },
                    { title: "경기관리", children: ["캐디관리", "캐디 지급품관리", "캐디 근태관리", "캐디 정산관리", "캐디배치", "경기진행", "고객의소리", "분실물관리", "기상정보관리"] },
                    { title: "업장관리", children: ["매출관리", "구매/발주 등록", "상품입고", "재고관리", "재고 마감관리", "업장관리", "POS(매출등록)"] },
                    { title: "마감관리", children: ["영업계획", "신고자료", "골프마감"] },
                    { title: "객실관리", children: ["객실 워크캘린더", "객실정보관리", "객실 예약관리", "객실 체크인/아웃", "객실 마감관리", "객실 매출관리", "대행사 예약관리", "타임오픈관리"] },
                    { title: "통계", children: ["통계 데이터"] },
                    { title: "마케팅", children: ["타겟 문자발송", "회원 문자발송", "문자발송 현황"] },
                    { title: "코스관리", children: ["작업관리", "장비관리", "수목관리", "저장품관리", "코스제원"] },
                    { title: "관리자", children: ["기본설정", "권한설정", "시스템 모니터링", "원격지원", "시스템 문의"] }
                ]}
            />

            {/* 04 - 텍스트(설명)와 여러 이미지(인터랙션/컴포넌트 등)가 좌우로 나뉘어 전환되는 영역 */}
            <ProjectFullMediaWithTitle
                chip="Design Framework"
                title="디자인 표준화와 모듈 자산화에서부터 인터렉션 원칙 수립까지"
                subtitle={
                    <>
                        서비스 전반에 파편화되어 있던 서치바, 필터, 테이블 등 핵심 UI 요소를 공통 규격으로 통합 정의하여 시각적 일관성과 구조적 확장성을 확보했습니다. 툴팁, 팝업 등 주요 컴포넌트의 노출 우선순위와 예외 상황에 대한 디자인 정책(Design Policy)을 정밀하게 수립하고 이를 모듈화·자산화함으로써, 기획의 생산성뿐만 아니라 개발 협업의 실질적인 효율을 극대화했습니다.
                        <br />
                        나아가 마우스 호버, 스크롤, 정렬 등 테이블 내 모든 조작 행위에 대한 기능 특화형 인터랙션 원칙을 규정하여, 어떤 복잡한 비즈니스 로직에서도 사용자에게 일관된 피드백을 보장하는 직관적이고 견고한 사용성(Robust Usability)을 구현했습니다.
                    </>
                }
                images={interImages}
                bgColor="bg-gray-50"
                layout="split"
            />

            {/* 05 - 슬라이드 형식으로 이미지가 무한 스크롤되는 마키(Marquee) 영역 */}
            <ProjectImageMarquee
                images={pagesImages}
                bgColor="bg-[#10182B]"
                speed={20}
            />

            {/* 06 - 강조할 핵심 기획/UX 사례 등을 3단 컬럼 형태로 설명하는 영역 */}
            <ProjectGrid3Col
                chip="UX CASE STUDY"
                bgColor="bg-[#10182B]"
                items={[
                    {
                        title: "기획적 설계 주안점",
                        description: "다양한 시간대와 각기 다른 직군(프런트, 경기과, 매출 관리 등)에서 발생하는 방대한 양의 데이터가 실시간으로 상호작용해야 하는 서비스의 특성을 고려하여, 시스템 전반의 유기적인 데이터 흐름을 설계하는 데 집중했습니다."
                    },
                    {
                        title: "사용자 중심의 정보 구조화",
                        description: "정보가 출력되는 위치와 조약 버튼 등 핵심 UI 요소들을 정교하게 모듈화함으로써, 서로 다른 업무 환경의 담당자들이 방대한 데이터 속에서도 혼란 없이 목표 과업을 가장 빠르게 완수할 수 있는 인터페이스를 구현했습니다."
                    },
                    {
                        title: "디자인을 통한 업무 효율 최적화",
                        description: "모든 화면에 일관된 디자인 시스템을 적용하여 신규 서비스 도입 시 발생할 수 있는 운영진의 학습 부담을 최소화하고, 실무 현장에서 즉각적인 대응이 가능한 직관적인 UX를 완성했습니다."
                    }
                ]}
            />

            {/* 07 - 포스터 스타일의 대형 이미지와 우측 캡션 설명 영역 */}
            <ProjectPosterWithText
                image={pos01}
                chip="MULTIPLE DEVICES UXUI"
                title={"다양한 디바이스와 \n기능을 담은 UXUI"}
                subtitle={"직군 간의 업무 연결성을 최우선으로 고려하여\n파트 간 전환이 매끄러운 사용자 여정을 설계하는 데 집중했습니다."}
            />

            {/* 08 - 좌측에는 타이틀 텍스트, 우측에 꽉 차는 이미지로 구성된 2단 레이아웃 영역 */}
            <ProjectTwoColumnMedia
                chip="erp app"
                title={"내 손안의 컨트롤, \n웹과 앱의 연동으로 사용성 강화"}
                image={imgM02}
                bgColor="bg-[#457FF3]"
            />

        </ProjectLayout>
    );
}

export default Project01;
