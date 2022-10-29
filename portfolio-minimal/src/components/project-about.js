import { HeroSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';
import React from 'react';

export default function ProjectAboutSection() {
    return (
            <Animation type="fadeUp">
                <Section heading="About My Projects">
                    <p>All articles, up to those dated as October 2022, were written in October 2022. You might notice that some are dated earlier than this. For organizational reasons, I have decided to date each project with its completion date. In the case of ongoing projects, the are simply dated with the date of most recent edits. This keeps everything in order, with proper context of which projects came first, with the trade off of adding some confusion to their dating.</p>
                </Section>
            </Animation>
    );
}
