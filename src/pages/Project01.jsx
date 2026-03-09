import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectTreeChart } from '../components/ProjectLayout';

import imgM01 from '../images/project1-m01.webp';
import imgM02 from '../images/project1-m02.webp';

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
                title="모듈 아키텍처"
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
                    { title: "코스관리", children: ["객실 워크캘린더", "객실정보관리", "객실 예약관리", "객실 체크인/아웃", "객실 마감관리", "객실 매출관리", "대행사 예약관리", "타임오픈관리"] },
                    { title: "관리자", children: ["기본설정", "권한설정", "시스템 모니터링", "원격지원", "시스템 문의"] }
                ]}
            />

            <ProjectGrid
                images={[
                    imgM02,
                    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
                ]}
            />

            <ProjectSplit
                title="A frictionless path to care."
                text={[
                    "When users arrive seeking help, the last thing they need is a convoluted booking process. We streamlined the onboarding, cutting unnecessary steps and grouping information logically.",
                    "The result is a calm, guided experience that reassures patients that they are in safe hands, even before their session begins."
                ]}
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project01;
