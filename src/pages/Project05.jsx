import React from 'react';
import { ProjectLayout, ProjectHero, ProjectMeta, FullMedia, SplitMedia, TextBlock } from '../components/ProjectLayout';

function Project05() {
    return (
        <ProjectLayout nextProjectLink="/project/6" nextProjectTitle="TALKAK" nextProjectBg="bg-[#E25927]">

            <ProjectHero
                title="PAYIS"
                subtitle="선불형 간편 충전결제 서비스"
                bgImage="https://images.unsplash.com/photo-1556742059-47b93231f536?q=80&w=2940&auto=format&fit=crop"
            />

            <ProjectMeta
                description="A friction-less prepaid mobile wallet streamlining daily micro-transactions while prioritizing user data protection."
                link={{ text: "Download App", url: "#" }}
                metrics={[
                    { label: "Client", value: "Smartscore Inc." },
                    { label: "Services", value: "Financial UX\nApp Development" },
                    { label: "Role", value: "UX Designer" },
                    { label: "Year", value: "2023" }
                ]}
            />

            <TextBlock
                theme="light"
                heading="Zero Friction"
                paragraphs={[
                    "Card registrations often become drop-off points in fintech apps.",
                    "We bypassed the complex KYC checks with a prepaid model, allowing users to start paying within 30 seconds of app installation."
                ]}
            />

            <FullMedia
                image="https://images.unsplash.com/photo-1616077168079-7e0b5ce5389d?q=80&w=2940&auto=format&fit=crop"
                caption="Wallet top-up experience flow."
            />

        </ProjectLayout>
    );
}

export default Project05;
