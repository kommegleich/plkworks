import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectFullMediaWithTitle, ProjectSectionText } from '../components/ProjectLayout';

import imgM01 from '../images/project2-m01.png';
import imgFC from '../images/project2-fc.png';
import imgFC2 from '../images/project2-fc2.png';

function Project02() {
    return (
        <ProjectLayout
            nextProjectLink="/project/3"
            nextProjectTitle="스코어 리포트"
            nextProjectBg="bg-[#2D343A]"
            bgColor="bg-[#09122A]"
            textColor="text-white"
        >
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
                bgColor="bg-[#09122A]"
                gap="gap-0"
                itemBg="bg-[#030303]"
            />
            <ProjectFullMediaWithTitle
                label="FLOWCHART"
                src={imgFC2}
                bgColor="bg-[#09122A]"
                textColor="text-white"
                objectFit="object-cover"
                centered={true}
                parallax={false}
            />
            <ProjectSectionText
                title="Challenge"
                text={[
                    "아마추어 골프 리그인 SAGL은 다양한 연령대의 사용자가 참여하는 서비스로, 복잡한 신청 절차와 단계별 안내 부족으로 인해 신규 사용자들의 중도 이탈률이 높은 과제를 안고 있었습니다.",
                    "특히 대회 정보 조회부터 선수 등록, 그리고 최종 참가 신청까지 이어지는 사용자 경험이 파편화되어 있어, 모바일 환경에서의 직관적인 흐름 설계가 절실히 필요한 상황이었습니다.",
                    "저희는 이러한 퍼널 전반의 문제점을 진단하고, 핵심 태스크를 최소화하여 사용자가 자신의 대회 진행 상황을 한눈에 파악하고 막힘없이 신청을 완료할 수 있는 통합 UI/UX 솔루션을 목표로 하였습니다."
                ]}
                bgColor="bg-white"
                textColor="text-[#121212]"
                descColor="text-[#6B6B75]"
            />
        </ProjectLayout>
    );
}

export default Project02;
