import React, { FunctionComponent } from "react";

import { routeConstantsShared } from "../router-constants";
import {
  Bold,
  Box,
  Link,
  OrderedListCounters,
  OrderedListItemCounters,
  OrderedListLowerAlpha,
  OrderedListItem,
  Paragraph,
  SectionHeader,
} from "@cleaved/ui";

export const TermsOfServiceInformation: FunctionComponent = () => {
  return (
    <Box>
      <SectionHeader>Terms of Service - User Agreement</SectionHeader>
      <Paragraph>Last Updated: January 1, 2022</Paragraph>

      <OrderedListCounters>
        <OrderedListItemCounters>
          <Bold>This Agreement governs your relationship with Cleaved</Bold> and your use of and access to all services
          and products provided by Cleaved (collectively, the Services). You agree that by accessing or using any part
          of the Services you are bound by the terms of this Agreement (the Terms), including the applicable{" "}
          <Link href={routeConstantsShared.privacyPolicy.route}>{routeConstantsShared.privacyPolicy.name}</Link> and{" "}
          <Link href={routeConstantsShared.communityGuidelines.route}>
            {routeConstantsShared.communityGuidelines.name}{" "}
          </Link>
          incorporated herein.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>You may not use the Services unless all of the following apply to you,</Bold> and you affirm that all of
          the following apply to you:
          <OrderedListCounters>
            <OrderedListItemCounters>You are at least 18 years old;</OrderedListItemCounters>
            <OrderedListItemCounters>
              You are legally allowed to use the Services where you live;
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              You are not using the Services or accepting the Terms on behalf of any other entity, such as a company or
              organization, unless you have authority to bind that entity to these Terms;
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              You have not been banned by Cleaved from using the Services.
            </OrderedListItemCounters>
          </OrderedListCounters>
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>The Cleaved Privacy Policy</Bold> describes what Cleaved can do with information about you received by
          Cleaved when you use the Services. You agree to the terms of the Privacy Policy, including the transfer of
          information to other countries for storage, processing, and use, if applicable.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Any content that you post to the Services must satisfy all of the following criteria,</Bold> and you
          affirm that any content posted, submitted, or otherwise provided by you to the Services satisfies these
          criteria:
          <OrderedListCounters>
            <OrderedListItemCounters>
              You have the legal right to post the content to the Services.
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              The content and the purpose for posting it complies with all laws, rules, and regulations that may apply.
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              The content does not infringe the intellectual property rights (such as copyrights and trademark rights)
              of any other person or entity.
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              The content does not include non-public personal private information belonging to someone else, such as
              another person's birthdate, home address, or telephone number.
            </OrderedListItemCounters>
            <OrderedListItemCounters>
              The content complies with the Cleaved Community Guidelines. You are responsible for your use of the
              Services and for any content that you post. Cleaved does not endorse, support, represent, or affirm the
              completeness, truthfulness, accuracy, or reliability of any of the content posted through the Services,
              nor does Cleaved endorse any opinions expressed through the Services. All content is the sole
              responsibility of the person who originated the content, and Cleaved does not take responsibility for such
              content.
            </OrderedListItemCounters>
          </OrderedListCounters>
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Right to Distribute.</Bold> You grant to Cleaved a license to any content posted by you to the Services,
          including a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy,
          reproduce, process, adapt, modify, publish, transmit, display and distribute your content. You agree that
          Cleaved or its service providers or partners may display advertising in connection with your content and
          otherwise monetize your content without compensation to you. You warrant that you have all rights necessary to
          grant these rights to Cleaved and other members of the Cleaved community. You also grant a limited
          non-exclusive, royalty-free license to any Cleaved community member to use, copy, reproduce, process, adapt,
          modify, publish, transmit, display, and distribute any content posted by you to the Services solely in
          connection with that member's use of the Services. The licenses granted by you hereunder do not include any
          moral rights or right of attribution.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Copyright infringement is not allowed on the Services,</Bold> and Cleaved will, in appropriate
          circumstances, terminate the account of any repeat infringer. If your copyright has been infringed by any
          content on the Services and you did not grant a license for this use by uploading your copyrighted work to the
          Services, you may submit a notice that meets all of the requirements of the Digital Millennium Copyright Act
          (DMCA), 17 U.S.C 512(c)(3), to our Copyright Manager at abuse@cleaved.com or 209 S. Stephanie St., B212,
          Henderson, NV 89012. Your notice must include: (1) electronic or physical signature of the copyrighted work
          owner (or person authorized by the copyright owner), (2) a description of the copyrighted work, including the
          URL where the infringing content is available, or a copy of it, (3) contact details of the person submitting
          the notice, including email address, telephone, and mailing address, (4) statement in "good faith belief" that
          the work is not authorized by the copyright owner, and (5) a statement by the sender that all of the above
          information is accurate, and that the person sending the notice is either the copyright owner or is authorized
          to act on behalf of the copyright owner. Upon receiving a notice satisfying these requirements, Cleaved will
          take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged
          content from the services.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>You may not interfere with the Services in any way,</Bold> such as by accessing the Services through
          automated means in a manner that puts excessive demand on the Services; by hacking the Services; by accessing
          without authorization areas of the Services that are protected by technical measures designed to prevent
          unauthorized access; by testing the vulnerability of the Services; by impersonating Cleaved on the Services;
          by accessing the Services for any purpose that competes with the interests of Cleaved; by spamming Cleaved
          community members; by failing to respond to operational communications or requests from Cleaved; or through
          any other type of interference with the Services or Cleaved's relationships with others.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Cleaved may remove any content and terminate your access to the Services</Bold> at any time and for any
          reason to the extent Cleaved reasonably believes (a) you have violated these Terms or Cleaved's Community
          Guidelines, (b) you create risk or possible legal exposure for Cleaved, or (c) you are otherwise engaging in
          unlawful conduct—although Cleaved endeavors to allow all free speech that is lawful and does not infringe the
          legal rights of others. Any invitation made by Cleaved to you to use the Services or submit content to the
          Services, or the fact that Cleaved may receive a benefit from your use of the Services or provision of content
          to the Services, will not obligate Cleaved to maintain any content or maintain your access to the Services.
          Cleaved will have no liability to you for removing any content, for terminating your access to the Services,
          or for modifying or terminating the Services. In addition, accounts which are inactive (without login) for
          nine (9) months are subject to username relinquishment or account removal.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>You agree to receive communications from Cleaved,</Bold> including communications sent by phone, email,
          text message, or other means of communication. If you provided a phone number to Cleaved, you are required to
          notify Cleaved when you cease to own or control that number to help prevent Cleaved from sending
          communications to others who may acquire that number.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>The Services are provided to you as-is and at your own risk.</Bold> The Services come with no express or
          implied warranties, except those that cannot be disclaimed under the law. CLEAVED DISCLAIMS ALL EXPRESS OR
          IMPLIED WARRANTIES AND CONDITIONS, SUCH AS MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. Cleaved makes no representation or endorsement about the function of the Services or any
          content available through the Services. Cleaved has no responsibility or liability to you arising from your
          use of the Services. Cleaved has no responsibility or liability to you arising from content provided by you or
          any other person, even if such content is untrue, harmful, damaging, offensive, inappropriate, fraudulent,
          tortious, unlawful, contrary to social norms, etc. Although Cleaved may make efforts to review or monitor
          content, you agree that you will not rely on this fact for any purpose. Cleaved has no responsibility or
          liability to you arising from hacking event, data breach, theft, misuse of information, conspiracy, racket,
          fraud, act of terrorism, misappropriation of information, technical malfunction, interruption of service, or
          similar event that may cause you to suffer damage, loss, or injury, including without limitation any damage to
          or loss of your personal property, data, operations, information, reputation, goodwill, profits, etc. TO THE
          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AND REGARDLESS OF THE NATURE OF THE CAUSE OF ACTION, CLEAVED WILL
          NOT BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR FOR
          ANY LOST PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR FOR INTANGIBLE LOSSES, ARISING FROM (a) YOUR
          ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICES; (b) FROM THE ACTS OR OMISSIONS OF ANY OTHER
          PERSON OR THIRD PARTY, INCLUDING, WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER
          PERSONS OR THIRD PARTIES; (c) ANY CONTENT OBTAINED FROM THE SERVICES; OR (d) UNAUTHORIZED ACCESS, USE, OR
          ALTERATION OF YOUR CONTENT OR COMMUNICATIONS THROUGH THE SERVICES. IN NO EVENT SHALL THE AGGREGATE LIABILITY
          OF CLEAVED ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED THE GREATER OF TWO HUNDRED U.S.
          DOLLARS (U.S. $200.00) OR THE AMOUNT YOU PAID CLEAVED, IF ANY, IN THE PAST SIX MONTHS FOR THE SERVICES GIVING
          RISE TO THE CLAIM. THE LIMITATIONS OF THIS SECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON
          WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND SHALL FURTHER APPLY WHETHER OR NOT
          CLEAVED HAS BEEN INFORMED OF THE POSSIBLITY OF ANY SUCH DAMAGES AND EVEN IF A REMEDY LAID OUT IN THESE TERMS
          IS FOUND TO HAVE FAILED ITS ESSENTIAL PURPOSE.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Applicable law and dispute resolution procedure.</Bold>
          <OrderedListLowerAlpha>
            <OrderedListItem>
              The laws of Deleware will govern these Terms and any dispute that arises between you and Cleaved. You
              agree that all disputes related to these Terms or the Services will first be mediated, in good faith,
              within sixty (60) days of the demanding party's provision of a written demand, unless expressly agreed
              otherwise in a signed writing. In the event that a full settlement is not achieved during mediation, you
              agree that any dispute, action or proceeding seeking to enforce any provision of, or based on any right
              arising out of these Terms or otherwise, shall then be settled exclusively by arbitration as set forth
              hereunder and you hereby waive the right to a jury trial before any court of competent jurisdiction.
            </OrderedListItem>

            <OrderedListItem>
              Jury Trial Waiver. IN USING THE SERVICES, YOU THEREBY WAIVE A TRIAL BY JURY IN ANY ACTION, PROCEEDING, OR
              COUNTER-CLAIM BROUGHT OR ASSERTED BY EITHER YOU OR CLEAVED AGAINST THE OTHER ON ANY MATTERS WHATSOEVER
              RELATING TO OR ARISING OUT OF THE FORMATION OF AN AGREEMENT BETWEEN THE PARTIES BASED ON THESE TERMS.
            </OrderedListItem>

            <OrderedListItem>
              Requirement. All claims, controversies, disputes and other matters in question arising out of, or relating
              to these Terms, the breach hereof or the rights, privileges, responsibilities or duties between or among
              you and Cleaved, shall be decided by confidential arbitration in Deleware, USA in accordance with the
              Commercial Arbitration Rules of the American Arbitration Association ("AAA") then existing, unless all
              parties to any such claim, controversy or dispute, or other matter in question, unanimously agree to the
              contrary. The provisions contained in this Paragraph shall be specifically enforceable under the
              prevailing arbitration law.
            </OrderedListItem>

            <OrderedListItem>
              Procedure. The arbitrator or arbitrators for any proceeding conducted hereunder shall be a person or
              persons with experience in the social media business, selected in accordance with the AAA's Commercial
              Arbitration Rules then in effect. The parties will be entitled to conduct discovery in accordance with the
              provisions of Deleware's applicable code of civil procedure. The remedial authority of the arbitrator or
              arbitrators will be the same as, but no greater than, would be the remedial power of a court having
              jurisdiction over the Parties and their dispute. The arbitrator or arbitrators will render a written
              opinion based on Deleware law, and specifying an award, which will be final and binding upon the Parties.
            </OrderedListItem>
          </OrderedListLowerAlpha>
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>You affirm that you are competent to agree to be bound by this Agreement,</Bold> meaning that you are
          over the age of 18 and, if applicable, have the consent of any designated guardian.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Cleaved cannot waive any right to enforce this Agreement,</Bold> unless it does so expressly in writing.
          No waiver of any part of this Agreement, will be a further or continuing waiver of that part or any other
          part, and no failure to enforce any part of this Agreement will be deemed a waiver of any kind.
        </OrderedListItemCounters>

        <OrderedListItemCounters>
          <Bold>Cleaved may modify the Terms of this Agreement</Bold> in any way and at any time without notice to you,
          and you agree to be responsible for making yourself aware of any modification of the Terms and to be bound by
          any modification of the Terms when you continue to access or use the Services after any such modification. As
          a matter of courtesy, Cleaved endeavors to inform its community members of any such changes. These Terms
          supersede all prior agreements between you and Cleaved pertaining to the Services. Except for the statements
          in this document and the documents expressly incorporated herein by reference, no statement by Cleaved or
          anyone associated with Cleaved, whether verbal or written, can modify or supplement the Terms of this
          Agreement unless the modification or supplement is stated expressly in writing by referring to this Agreement.
          If any of the Terms in the Agreement are held to be invalid or unenforceable by a court or arbitrator or by
          operation of law, the remaining Terms will remain in effect.
        </OrderedListItemCounters>
      </OrderedListCounters>
    </Box>
  );
};
