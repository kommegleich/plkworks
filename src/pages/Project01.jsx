import React from 'react';
import { ProjectLayout, ProjectHero, ProjectMeta, FullMedia, SplitMedia, TextBlock } from '../components/ProjectLayout';

function Project01() {
    return (
        <ProjectLayout nextProjectLink="/project/2" nextProjectTitle="SAGL" nextProjectBg="bg-[#1D112A]">

            <ProjectHero
                title="ERP SYSTEM"
                subtitle="스마트스코어 골프장 통합 ERP"
                bgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            />

            <ProjectMeta
                description="A comprehensive B2B ERP system designed to unify fragmented golf course management tools into a single cohesive, high-performance module."
                link={{ text: "Visit Website", url: "https://smartscore.kr" }}
                metrics={[
                    { label: "Client", value: "Smartscore Inc." },
                    { label: "Services", value: "UX/UI Design\nDesign System\nPrototyping" },
                    { label: "Role", value: "Lead Product Designer" },
                    { label: "Year", value: "2023 - 2025" }
                ]}
            />

            <TextBlock
                theme="light"
                heading="Let’s make it happen"
                paragraphs={[
                    "Fragmented systems slow down daily operations. By consolidating booking, real-time course monitoring, and billing into one environment, we completely removed workflow friction.",
                    "Our goal was not just to redesign, but to rethink the entire operational context of a golf course from the ground up."
                ]}
            />

            <FullMedia
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                caption="The unified dashboard offering real-time insights into course operations."
            />

            <TextBlock
                theme="dark"
                heading="Systematic Architecture"
                paragraphs={[
                    "Handling massive amounts of data required a scalable and intuitive UI system. We established a rigorous design token system and component library.",
                    "This ensured consistency across hundreds of pages while significantly cutting down development time."
                ]}
            />

            <SplitMedia
                img1="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1528&auto=format&fit=crop"
                img2="https://images.unsplash.com/photo-1507238692062-710e53a54bde?q=80&w=1664&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project01;
