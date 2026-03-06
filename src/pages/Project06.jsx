import React from 'react';
import { ProjectLayout, ProjectHero, ProjectMeta, FullMedia, SplitMedia, TextBlock } from '../components/ProjectLayout';

function Project06() {
    return (
        <ProjectLayout nextProjectLink="/project/1" nextProjectTitle="ERP" nextProjectBg="bg-[rgb(64,122,255)]">

            <ProjectHero
                title="TALKAK"
                subtitle="랜덤 사진전송 서비스"
                bgImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2600&auto=format&fit=crop"
            />

            <ProjectMeta
                description="A minimalist social experiment focusing purely on the act of capturing and unpredictably sharing everyday moments."
                link={{ text: "View Concept", url: "#" }}
                metrics={[
                    { label: "Client", value: "Personal Project" },
                    { label: "Services", value: "Concept Design\nPrototyping" },
                    { label: "Role", value: "Product Designer" },
                    { label: "Year", value: "2022" }
                ]}
            />

            <TextBlock
                theme="light"
                heading="Capture, Send, Receive."
                paragraphs={[
                    "No likes, no algorithms, no infinite scrolls. Just three core actions stripped down to their absolute minimal form.",
                    "Talkak connects strangers globally through single, unfiltered frames of their current reality."
                ]}
            />

            <FullMedia
                image="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940&auto=format&fit=crop"
                caption="The viewfinder-only interface."
            />

            <SplitMedia
                img1="https://images.unsplash.com/photo-1554046920-53bcbaef00c1?q=80&w=1528&auto=format&fit=crop"
                img2="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1664&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project06;
