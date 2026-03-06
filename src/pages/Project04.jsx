import React from 'react';
import { ProjectLayout, ProjectHero, ProjectMeta, FullMedia, SplitMedia, TextBlock } from '../components/ProjectLayout';

function Project04() {
    return (
        <ProjectLayout nextProjectLink="/project/5" nextProjectTitle="PAYIS" nextProjectBg="bg-[#263044]">

            <ProjectHero
                title="GIFTING"
                subtitle="골프와 선물하기 연계서비스"
                bgImage="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop"
            />

            <ProjectMeta
                description="An integrated social commerce platform connecting golf enthusiasts through curated gifting and relationship-based reminders."
                link={{ text: "Visit Store", url: "#" }}
                metrics={[
                    { label: "Client", value: "Smartscore Inc." },
                    { label: "Services", value: "Commerce UX\nService Design" },
                    { label: "Role", value: "Product Designer" },
                    { label: "Year", value: "2024" }
                ]}
            />

            <TextBlock
                theme="light"
                heading="Social Context"
                paragraphs={[
                    "By leveraging the social connections already established within the app, we created an ecosystem where users can easily celebrate golf milestones with gifts.",
                    "Checkout flows were reduced from 5 steps to just 2, dramatically increasing conversion rates."
                ]}
            />

            <SplitMedia
                img1="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2430&auto=format&fit=crop"
                img2="https://images.unsplash.com/photo-1577741630138-0deae466e3b5?q=80&w=2487&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project04;
