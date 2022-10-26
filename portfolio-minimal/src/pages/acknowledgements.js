import React from "react";
import { LegalSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';

export default function AcknowledgementsPage() {
    return (
        <Page>
            <Animation type="fadeUp">
                <Section heading="Acknowledgements">
                <LegalSection sectionId="acknowledgements" heading="" />
                </Section>
            </Animation>
        </Page>
    );
}

// export default function AcknowledgementsPage() {
//     return (
//         <Page>
//             <Animation type="fadeUp">
//                 <Section heading="Acknowledgements">
//                     <p>
//                         This site is built using a template by <a href="https://github.com/konstantinmuenster/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link"><u>Konstantin Münster.</u></a>
//                     </p>
//                     <p>
//                         Check out their <a href="https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link"><u>Github Repository!</u></a>
//                     </p>
                    
//                 </Section>
//             </Animation>
//         </Page>
//     );
// }