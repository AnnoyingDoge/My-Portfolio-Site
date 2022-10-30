import { HeroSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';
import React from 'react';

export default function ProjectAboutSection() {
    return (
            <Animation type="fadeUp">
                <Section heading="About My Projects">
                    <p>All articles, up to those dated as October 2022, were written in October 2022. Some projects are dated earlier than this. For organizational reasons, I decided to list each project by its completion date. In the case of ongoing projects, they are listed by the date of their most recent edits.</p>
                </Section>
            </Animation>
    );
}
