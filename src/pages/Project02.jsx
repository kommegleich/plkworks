import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectFullMediaWithTitle, ProjectSectionText } from '../components/ProjectLayout';

import imgM01 from '../images/project2-m01.png';
import imgM02 from '../images/project2-m02.png';
import imgM03 from '../images/project2-m03.png';
import imgFC from '../images/project2-fc.png';
import imgFC2 from '../images/project2-fc2.png';

function Project02() {
    return (
        <ProjectLayout
            nextProjectLink="/project/3"
            nextProjectTitle="스코어를 게이밍하다"
            nextProjectBg="bg-gradient-to-r from-[#00FF37] to-[#FF00FB]"
            nextProjectDesc="단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, \n스마트스코어 프리미엄 멤버십 전용 초개인화 리포트 서비스"
            bgColor="bg-gradient-to-b from-[#10182B] to-[#030303]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰, 성과 지표(RESULTS) 내용이 적혀있음 */}
            <ProjectHeroExact
                title="ARMATURE GOLF LEAGUE (SAGL)"
                subtitle="앱에서 참가 가능한 아마추어 골프리그"
                metaItems={[
                    { label: "Goal", value: "누구나 손 쉽게 참가할 수 있는 아마추어 골프 대회" },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "2023.01~2023.03"] },
                    {
                        label: "RESULTS",
                        value: [
                            <span>
                                <strong>신규 선수 등록률 개선</strong><br />
                                복잡한 불필요 필드를 제거하고 단계별 시각적 피드백을 강화하여, 기존 대비 중도 이탈률 35% 감소 및 최종 등록 완료율 20% 향상
                            </span>,
                            <span>
                                <strong>참가 신청 프로세스 최적화</strong><br />
                                대회 조회부터 결제까지 이어지는 동선을 단일 흐름으로 재설계하여 사용자 평균 체류 시간 및 태스크 완수 시간 대폭 단축
                            </span>,
                            <span>
                                <strong>사용성 만족도 확보</strong><br />
                                연령대가 높은 아마추어 골퍼들도 별도의 가이드 없이 직관적으로 이용 가능한 UI 컴포넌트 구성을 통해 고객센터 문의 및 불만 접수 건수 감소
                            </span>
                        ]
                    }
                ]}
                textColor="text-white"
                subtitleColor="text-white/60"
                labelColor="text-white/40"
            />

            {/* 02 - 나란히 배치되는 2장의 모바일/포스터 이미지 영역 (여백 없음) */}
            <ProjectGrid
                images={[
                    imgM01,
                    imgFC
                ]}
                fits={[
                    'object-cover',
                    'object-cover'
                ]}
                aspect="aspect-square"
                rounded="rounded-[40px]"
                bgColor="bg-transparent"
                gap="gap-0"
                itemBg="bg-transparent"
            />

            {/* 03 - 플로우차트와 라벨이 들어간 전체 너비 이미지 영역 */}
            <ProjectFullMediaWithTitle
                label="FLOWCHART"
                src={imgFC2}
                bgColor="bg-transparent"
                textColor="text-white"
                objectFit="object-cover"
                centered={true}
                parallax={false}
            />

            {/* 04 - 텍스트 단락으로 구성된 섹션 (기획/개선 주안점 등 설명) */}
            <ProjectSectionText
                title="간편한 선수등록 프로세스 UX"
                text={[
                    <span>
                        <strong className="block text-white mb-2">진입 장벽 분석</strong>
                        인증 절차를 포함한 기존의 복잡하고 까다로운 신청 단계가 아마추어 골퍼들의 중도 이탈과 저조한 대회 참여율의 핵심 원인임을 파악했습니다.
                    </span>,
                    <span>
                        <strong className="block text-white mb-2">프로세스 개선</strong>
                        '대회 신청도 예약처럼 쉽게'라는 컨셉 하에, 불필요한 군더더기 단계를 과감히 삭제하고 익숙한 골프장 예약 시스템의 UX 패턴을 적용하여 사용성을 극대화했습니다.
                    </span>,
                    <span>
                        <strong className="block text-white mb-2">참여 유도 및 성과</strong>
                        인증 과정을 사용자 흐름에 맞게 재배치하고 허들을 낮추는 전략적 UX 설계를 통해, 사용자의 심리적 부담을 줄이고 실질적인 대회 참가율 상승을 견인했습니다.
                    </span>
                ]}
                bgColor="bg-transparent"
                textColor="text-white"
                descColor="text-[#9A9BA5]"
            />

            {/* 05 - 나란히 배치되는 2장의 목업(Mockup) 테두리 없는 이미지 영역 */}
            <ProjectGrid
                images={[
                    imgM03,
                    imgM02
                ]}
                fits={[
                    'object-contain',
                    'object-contain'
                ]}
                aspect="aspect-square"
                rounded="rounded-[40px]"
                bgColor="bg-transparent"
                gap="gap-0"
                itemBg="bg-transparent"
            />
        </ProjectLayout>
    );
}

export default Project02;
