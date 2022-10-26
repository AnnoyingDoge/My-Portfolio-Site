import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import * as styles from "../gatsby-theme-portfolio-minimal/globalStyles/global.css";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
