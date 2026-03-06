import React from 'react';
import { ProjectLayout, ProjectHero, ProjectMeta, FullMedia, SplitMedia, TextBlock } from '../components/ProjectLayout';

function Project02() {
    return (
        <ProjectLayout nextProjectLink="/project/3" nextProjectTitle="GAMING" nextProjectBg="bg-[#1D112A]">

            <ProjectHero
                title="SAGL"
                subtitle="아마추어 골프 리그"
                bgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop"
            />

            <ProjectMeta
                description="A seamless competitive registration platform designed to lower the barrier to entry for amateur golf enthusiasts."
                link={{ text: "View App", url: "https://smartscore.kr" }}
                metrics={[
                    { label: "Client", value: "Smartscore Inc." },
                    { label: "Services", value: "Product Strategy\nUX/UI Design" },
                    { label: "Role", value: "Product Designer" },
                    { label: "Year", value: "2023" }
                ]}
            />

            <TextBlock
                theme="light"
                heading="Lowering the barrier"
                paragraphs={[
                    "Participating in amateur leagues used to be a frustrating process filled with redundant forms and complex rules.",
                    "We streamlined the flow into a conversational, step-by-step wizard, making signups effortless."
                ]}
            />

            <FullMedia
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                caption="Sample application mockups showcasing the new flow."
            />

            <TextBlock
                theme="dark"
                heading="Scalable Design System"
                paragraphs={[
                    "We introduced a dark mode specifically tailored for outdoor usage during golf matches, ensuring high contrast and readability under direct sunlight."
                ]}
            />

            <SplitMedia
                img1="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1528&auto=format&fit=crop"
                img2="https://images.unsplash.com/photo-1507238692062-710e53a54bde?q=80&w=1664&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project02;
