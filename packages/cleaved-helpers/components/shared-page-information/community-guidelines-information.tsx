import React, { FunctionComponent } from "react";

import { routeConstantsShared } from "../router-constants";
import { Bold, Link, Paragraph, SectionHeader } from "@cleaved/ui";

export const CommunityGuidelinesInformation: FunctionComponent = () => {
  return (
    <>
      <SectionHeader>Community Guidelines</SectionHeader>
      <Paragraph>Last Updated: January 1, 2022</Paragraph>

      <Paragraph>
        Our Guidelines govern your relationship with and use of Cleaved, as well as your access to our services and
        products. By accessing Cleaved, you agree to these terms.
      </Paragraph>

      <Paragraph>
        Our goal is to provide all users with a welcoming, inclusive, professional environment where we can help
        eachother learn and grow together.
      </Paragraph>

      <Paragraph>
        We prefer that removing users or user-provided content be kept to the absolute minimum. We prefer to leave
        decisions about what is seen and who is heard to each individual. In no case will Cleaved decide what content
        will be removed or filtered, or whose account will be removed, on the basis of the opinion expressed within the
        content at issue. Cleaved's policies are, to remain neutral.
      </Paragraph>

      <Paragraph>
        We do not curate your timeline; Your timeline is in the exact order of events. This is by design :)
      </Paragraph>

      <Paragraph>
        At Cleaved, we're committed to continuous improvement toward fulfilling our mission. Accordingly, these
        Guidelines are subject to modification, unilaterally by Cleaved, at any time.
      </Paragraph>

      <Paragraph>
        <Bold>Principle #1:</Bold>
      </Paragraph>

      <Paragraph>
        Cleaved will not knowingly allow itself to be used as a tool for crime, civil torts, or other unlawful acts. We
        will remove reported user content that a reasonable and objective observer would believe constitutes or
        evidences such activity. We may also remove the accounts of users who use our platform in this way.
      </Paragraph>

      <Paragraph>
        Sometimes the law properly requires us to exclude content from our platform once it is reported to us or to our
        Community Jury—content we would make it a priority to exclude anyway. Obvious examples include: child sexual
        abuse material, content posted by or on behalf of terrorist organizations, intellectual property theft.
      </Paragraph>

      <Paragraph>
        However, even when the law may not require us to flag or remove reported content, or to ban a user, we will
        nonetheless do so when we deem it necessary to prevent our services from being used by someone in the commission
        of a crime or civil tort—particularly when these are likely to interfere with our mission of providing a
        inclusive, professional environment where we can help eachother learn and grow together.. Examples include
        criminal solicitation, fraud, and nuisance.
      </Paragraph>

      <Paragraph>
        <Bold>Principle #2:</Bold>
      </Paragraph>

      <Paragraph>
        Posting spam and using bots are nuisances and are not conducive to productive and polite discourse. In addition,
        it is unjust to our users. The use of our remove features, by individual users, is often adequate to address
        problems with spam. But whenever it is not, Cleaved will remove accounts of those who engage in this behavior.
      </Paragraph>

      <Paragraph>
        A detailed discussion of the types of actions encompassed by these two principles is available here:{" "}
        <Link href={routeConstantsShared.elaborationOfCommunityGuidelines.route}>
          {routeConstantsShared.elaborationOfCommunityGuidelines.name}
        </Link>
      </Paragraph>

      <Paragraph>Reporting Violations</Paragraph>

      <Paragraph>
        In addition to other precautionary measures, Cleaved relies upon its community members to report violations of
        these Guidelines.
      </Paragraph>
    </>
  );
};
