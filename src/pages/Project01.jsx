import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectTreeChart, ProjectFullMediaWithTitle } from '../components/ProjectLayout';

import imgM01 from '../images/project1-m01.webp';
import imgM02 from '../images/project1-m02.webp';
import inter01 from '../images/project1-inter01.png';
import inter02 from '../images/project1-inter02.png';
import inter03 from '../images/project1-inter03.png';
import inter04 from '../images/project1-inter04.png';
import inter05 from '../images/project1-inter05.png';
import inter06 from '../images/project1-inter06.png';
import inter07 from '../images/project1-inter07.png';
import inter08 from '../images/project1-inter08.png';
import inter09 from '../images/project1-inter09.png';
import inter10 from '../images/project1-inter10.png';

const interImages = [inter01, inter02, inter03, inter04, inter05, inter06, inter07, inter08, inter09, inter10];

function Project01() {
    return (
        <ProjectLayout nextProjectLink="/project/2" nextProjectTitle="SAGL" nextProjectBg="bg-[#1D112A]">

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

            <ProjectFullMedia
                src={imgM01}
            />

            <ProjectTreeChart
                chip="Flowchart"
                title="복잡한 도메인 지식을 관통하는 단일화된 설계 기준 수립"
                subtitle={
                    <>
                        서비스 내 모든 사용자 시나리오를 정밀하게 분석하여 분기 조건과 예외 케이스를 포함한 <strong>전략적 플로우차트(Flowchart)</strong>를 구축했습니다. 20여 개의 방대한 업무 기능을 직관적인 <strong>2-Depth 계층 구조(Hierarchy)</strong>로 재배치하여 정보 구조(IA)의 가독성과 업무 효율을 극대화했습니다.
                        <br /><br />
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

        </ProjectLayout>
    );
}

export default Project01;
