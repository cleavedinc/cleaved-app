import React, { FunctionComponent } from "react";

import { routeConstantsShared } from "../router-constants";
import { Bold, Box, Link, List, ListItem, Paragraph, SectionHeader } from "@cleaved/ui";

export const PrivacyPolicyInformation: FunctionComponent = () => {
  return (
    <Box>
      <SectionHeader>Cleaved Privacy Policy</SectionHeader>
      <Paragraph>Last Updated: January 1, 2022</Paragraph>

      <Paragraph>
        Cleaved, Inc. and its affiliates ("Company," "we," "our," and/or "us") value the privacy of individuals who use
        our social applications, the websites where this Privacy Policy is posted ( "Websites") , and related services
        (collectively, our "Services"). This privacy policy (the "Privacy Policy") explains how we collect, use, and
        share information from our users ("Users," "you," and/or "your") to facilitate your commenting, feedback, and
        networking experience. By using our Services, you agree to the collection, use, disclosure, and procedures this
        Privacy Policy describes. Beyond the Privacy Policy, your use of our Services is also subject to our{" "}
        <Link href={routeConstantsShared.termsOfService.route}>{routeConstantsShared.termsOfService.name}</Link>
      </Paragraph>

      <Paragraph>
        We neither sell your information to third parties nor share your information with foreign governments except in
        the limited circumstances described in this Privacy Policy (see Section 2 "How We Share the Information We
        Collect" below for more detail).
      </Paragraph>

      <Paragraph>
        We recognize that information privacy is an ongoing responsibility, and so we will from time to time update this
        Privacy Policy as we undertake new privacy practices or adopt new privacy policies.
      </Paragraph>

      <Paragraph>
        <Bold>1. Information We Collect</Bold>
      </Paragraph>

      <Paragraph>
        "Personal Information" is information that identifies, relates to, describes, or can be reasonably linked to,
        directly or indirectly, a particular individual or household. We may collect Personal Information from you on or
        through the Services in a variety of ways, including when you register on the Services, sign up for
        communications, or make any purchases. We also may, from time to time, use Personal Information about you to
        improve the Services, and for the various purposes outlined in this Privacy Policy.
      </Paragraph>

      <Paragraph>
        <Bold>A. Information You Provide to Us.</Bold>
      </Paragraph>

      <Paragraph>
        <Bold>Registration and Profile Information.</Bold> When you sign up for an account, we collect Personal
        Information you provide to us such as your name, email address, display name, profile photo and any Personal
        Information you voluntarily provide in your profile biography.
      </Paragraph>

      <Paragraph>
        <Bold>Content you Share.</Bold> We collect any information you choose to provide on our Services, such as posts,
        follows, photos, videos, gifs, and comments.
      </Paragraph>

      <Paragraph>
        <Bold>Payment Information.</Bold> If you make a purchase through our Services, your payment-related Personal
        Information, such as your credit and debit card or automated clearing house (ACH) information, is collected and
        stored by our third-party payment processor on our behalf.
      </Paragraph>

      <Paragraph>
        <Bold>Communications.</Bold> If you contact us directly, we receive additional Personal Information about you.
        For example, if you contact us for customer support, we may receive your name, email address, phone number, the
        contents of any message or attachments you may send to us, and any other information you choose to provide.
      </Paragraph>

      <Paragraph>
        <Bold>Your Contacts.</Bold> If you permit us to access the address book on your device or give us permission to
        import your contacts from an email account associated with your account, we may access and store names and
        contact information, including Personal Information, from your address book, to help you follow your contacts,
        and your contacts to follow you.
      </Paragraph>

      <Paragraph>
        <Bold>B. Information We Collect When You Use Our Services.</Bold>
      </Paragraph>

      <Paragraph>
        We may collect information that may not reasonably identify you or your household personally, but is linked to
        your computer or device ("Device Identifiable Information"). We collect Device Identifiable Information from you
        in the normal course of providing the Services. When you visit our Services to browse, read, or download
        information, we automatically collect information about your computer that your browser sends, such as your IP
        address, browser type and language, access times, pages visited, and referring website addresses. We may use
        Device Identifiable Information to analyze trends, help administer and improve the Services, to learn about and
        determine which pages of the Websites visitors view and for how long, how visitors navigate throughout the
        Services, and to gather broad demographic information for aggregate use. We may also collect Device Identifiable
        Information through "cookies" or "web beacons" as explained below.
      </Paragraph>

      <Paragraph>
        <Bold>Device and Location Information.</Bold> We receive Device Identifiable Information about the device and
        software you use to access our Services, including IP address (from which approximate or "coarse" location may
        be inferred), device type, web browser type, operating system version, phone carrier and manufacturer, member
        agents, application installations, device identifiers, mobile advertising identifiers, and push notification
        tokens.
      </Paragraph>

      <Paragraph>
        <Bold>Usage Information.</Bold> We automatically receive Device Identifiable Information about your interactions
        with our Services, such as the posts or other content you view, the searches you conduct, the people you follow,
        and the dates and times of your visits.
      </Paragraph>

      <Paragraph>
        <Bold>Information from Cookies and Similar Technologies.</Bold> We may collect information using cookies, pixel
        tags, and similar technologies. Cookies are small text files containing a string of alphanumeric characters. We
        may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A
        persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to
        our Services.
      </Paragraph>

      <Paragraph>
        Cookies operate in the background and you can turn them off by adjusting your Web browser settings, but doing so
        may make it difficult to use some of the features on the Websites or the features may not be available to you.
        We may use cookies to make your Service experience easier by, for example, remembering your preferences, or
        keeping track of your login name and password.
      </Paragraph>

      <Paragraph>
        For more information on your choices regarding cookies, you can review the FTC's guide to opting out of online
        tracking for computers and mobile devices. Your browser may offer you a "Do Not Track" option, which allows you
        to signal to operators of websites and web applications and services that you do not want them to track your
        online activities. The Services do not currently support Do Not Track requests.
      </Paragraph>

      <Paragraph>
        <Bold>2. How We Use the Information We Collect.</Bold> We may use the Personal Information we collect:
      </Paragraph>

      <List>
        <ListItem>
          • To fulfill or meet requirements inherent in the reason you provided the information. For example, we use the
          information about who you follow on Cleaved to deliver you a feed of posts from those accounts; we use the
          information you put into a post to display it to those who follow you or users who share your post, or who
          visit your profile on Cleaved;
        </ListItem>
        <ListItem>• To create, customize, and secure your account for use of the Services;</ListItem>
        <ListItem>
          • To provide, maintain, and improve our Services, including for testing, research, analysis and product
          development;
        </ListItem>
        <ListItem>
          • To personalize your experience on our Services, such as by providing tailored content and recommendations;
        </ListItem>
        <ListItem>
          • To understand and analyze how you use our Services and develop new products, services, features, and/or
          functionality;
        </ListItem>
        <ListItem>
          • To communicate with you, provide you with updates and other information relating to our Services, provide
          information that you request, respond to comments and questions, and otherwise provide customer support;
        </ListItem>
        <ListItem>
          • For marketing and advertising purposes, such as developing and providing promotional and advertising
          materials that may be relevant, valuable or otherwise of interest to you, including providing you with
          targeted offers and ads through our Website, and via email or text message (with your consent, where required
          by law);
        </ListItem>
        <ListItem>• To send you text messages and push notifications;</ListItem>
        <ListItem>• To facilitate transactions, redemptions, and payments;</ListItem>
        <ListItem>• To verify your identity and determine your eligibility to join our influencer network;</ListItem>
        <ListItem>• To find and prevent fraud and respond to trust and safety issues;</ListItem>
        <ListItem>
          • To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or
          transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or
          similar proceeding, in which Personal Information held by us about our consumers is among the assets
          transferred;
        </ListItem>
        <ListItem>
          • To help maintain the safety, security, and integrity of our Website, products and services, databases and
          other technology assets, and business;
        </ListItem>
        <ListItem>
          • For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be
          required by applicable laws and regulations or requested by any judicial process, law enforcement or
          governmental agency; and
        </ListItem>
        <ListItem>
          • For other purposes for which we provide specific notice at the time the information is collected.
        </ListItem>
      </List>

      <Paragraph>
        We will not collect additional categories of Personal Information or use the Personal Information we collected
        for materially different, unrelated, or incompatible purposes without updating this Privacy Policy to provide
        you with notice as set out in Section 10 "Changes to the Privacy Policy" below.
      </Paragraph>

      <Paragraph>3. How We Share the Information We Collect</Paragraph>

      <Paragraph>
        Vendors and Service Providers. We may share any Personal Information we receive with vendors and service
        providers retained in connection with the provision of our Services.
      </Paragraph>

      <Paragraph>
        Content you Share. Our Services are social services which allow you to find, enjoy, and share content. Your
        name, display name, profile photo, about me section, and contacts (i.e., members you are following) will always
        be viewable and/or searchable by other Members. The content you post to our Services will be displayed and
        viewable by other Members by default. Although this content is public by default, in the "Your Choices" section
        below, we describe the account settings and controls you can use to limit the sharing of certain information. We
        are not responsible for other Members' use of available information, so you should carefully consider whether
        and what to post and how you identify yourself on our Services.
      </Paragraph>

      <Paragraph>
        Marketing. We do not share Personal Information about you with nonaffiliated third parties for their direct
        marketing purposes unless we have your affirmative express consent.
      </Paragraph>

      <Paragraph>
        As Required By Law and Similar Disclosures. We may access, preserve, and disclose your Personal Information if
        we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process,
        such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others' rights,
        property, or safety. For the avoidance of doubt, the disclosure of your Personal Information may occur if you
        post any objectionable content on or through our Services.
      </Paragraph>

      <Paragraph>
        Merger, Sale, or Other Asset Transfers. We may transfer your Personal Information to service providers,
        advisors, potential transactional partners, or other third parties in connection with the consideration,
        negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company
        or we sell, liquidate, or transfer all or a portion of our assets. The use of your Personal Information
        following any of these events will be governed by the provisions of this Privacy Policy in effect at the time of
        the acquisition or merger.
      </Paragraph>

      <Paragraph>Consent. We may also disclose your Personal Information with your permission.</Paragraph>

      <Paragraph>4. Your Choices</Paragraph>

      <Paragraph>
        Sharing Preferences. We provide you with settings to allow you to set your sharing preferences for content you
        post to our Services. Certain Personal Information, such as your display name, may always be publicly available
        to others, and other Personal Information is made publicly available to others by default. To change whether
        certain information is publicly viewable, you can adjust the settings in your account.
      </Paragraph>

      <Paragraph>
        Marketing Communications. We send you marketing communications consistent with your choices. You can unsubscribe
        from our promotional emails by adjusting your account settings or via the link provided in the emails. Even if
        you opt-out of receiving promotional messages from us, you will continue to receive administrative messages from
        us.
      </Paragraph>

      <Paragraph>
        Notifications. You can opt-out of receiving notifications for posts, votes, echoes, comments, and followers by
        adjusting your profile and/or operating system (i.e., iOS or Android) settings.
      </Paragraph>

      <Paragraph>
        Correction. You may correct your Personal Information at any time by logging in to your account and updating any
        inaccurate information.
      </Paragraph>

      <Paragraph>
        Additional Privacy Rights. In addition, if you are a resident of California or of the European Economic Area,
        you have additional rights with respect to your Personal Information. Please see Sections 11 and 12 below for
        additional information.
      </Paragraph>

      <Paragraph>5. Third Party Links and Sites</Paragraph>

      <Paragraph>
        Our Services may contain links to other websites, products, or services that we do not own or operate. We are
        not responsible for the privacy practices of these third parties. Please be aware that this Privacy Policy does
        not apply to your activities on these third-party services or any information you disclose to these third
        parties. We encourage you to read their privacy policies before providing any information to them.
      </Paragraph>

      <Paragraph>
        For example, any information you share with Google as a consequence of sharing or interacting with YouTube
        content on Cleaved is governed by Google's privacy policy. Google now provides users some control over the
        collection of data by its users and API Clients like Cleaved; follow this link for more information on revoking
        an API client's access to your data. Exercising such control may require having a Google account, which itself
        may be a privacy concern for some of our members. Therefore, members are encouraged to use Cleaved's own native
        video capabilities (or the capabilities of other platforms equally respectful of member privacy) if they wish to
        avoid sharing data with Google. (A similar disclaimer applies to Rumble, an emerging competitor of
        GoogleYouTube. When in doubt, consult the privacy policy of the entity responsible for facilitating the display
        of content on our Services, before choosing to interact with it, so you can make an informed decision about your
        privacy.)
      </Paragraph>

      <Paragraph>6. Security</Paragraph>

      <Paragraph>
        We make reasonable efforts to protect your Personal Information by using physical and electronic safeguards
        designed to improve the security of the Personal Information we maintain. However, no method of transmission or
        storage of data is 100% secure and we will not be responsible for any damage that results from a security breach
        of data or the unauthorized access to or use of information, whether Personal Information or Device Identifiable
        Information. To the extent we provide your Personal Information to any third parties, we will request that they
        use reasonable security measures to protect your information.
      </Paragraph>

      <Paragraph>7. Children's Data</Paragraph>

      <Paragraph>
        We do not knowingly collect, maintain, or use Personal Information from children under 13 years of age, and no
        part of our Services is directed to children. If you learn that a child has provided us with Personal
        Information in violation of this Privacy Policy, then you may alert us at privacy@cleaved.com and we will delete
        such information.
      </Paragraph>

      <Paragraph>8. International Transfers of Data</Paragraph>

      <Paragraph>
        Our Services are hosted in the United States and intended for visitors located within the United States. If you
        choose to use our Services from the European Union or other regions of the world with laws governing data
        collection and use that may differ from U.S. law, then please note that you are transferring your Personal
        Information outside of those regions to the United States for storage and processing. By providing any
        information, including Personal Information, on or to our Services, you consent to such transfer, storage, and
        processing.
      </Paragraph>

      <Paragraph>9. Update or Delete Your Information</Paragraph>

      <Paragraph>
        You can update your account and profile information through your account settings. You can delete your account
        by selecting that option via our online Cleaved Privacy Request portal, which is accessible by clicking here.
      </Paragraph>

      <Paragraph>10. Changes to the Privacy Policy</Paragraph>

      <Paragraph>
        We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when
        it is posted. If we materially change the ways in which we use or share Personal Information previously
        collected from you through our Services, we will notify you through our Services, by email, or other
        communication. Your continued use of our Services following our posting or notifying you of changes constitutes
        your acceptance of such changes.
      </Paragraph>

      <Paragraph>11. Additional Rights in California: Your California Privacy Rights</Paragraph>

      <Paragraph>
        If you are a California resident, the California Consumer Privacy Act of 2018 ("CCPA") provides you with
        additional rights regarding our use of your Personal Information. Note that Personal Information does not
        include publicly available information from government records, deidentified or aggregated consumer information,
        or information excluded from the CCPA's scope. The CCPA protects the following categories of Personal
        Information, and for your convenience, we have provided the following chart summarizing what categories we
        collect as another way of covering the information set forth in Section 1 "Information We Collect":
      </Paragraph>

      <Paragraph>ADD TABLE OR SIMILAR HERE!!!! - ADD TABLE OR SIMILAR HERE!!!!</Paragraph>
      <Paragraph>ADD TABLE OR SIMILAR HERE!!!! - ADD TABLE OR SIMILAR HERE!!!!</Paragraph>
      <Paragraph>ADD TABLE OR SIMILAR HERE!!!! - ADD TABLE OR SIMILAR HERE!!!!</Paragraph>
      <Paragraph>ADD TABLE OR SIMILAR HERE!!!! - ADD TABLE OR SIMILAR HERE!!!!</Paragraph>

      <Paragraph>
        All of the categories collected above may be provided to third parties as described in Section 3 "How We Share
        the Information We Collect".
      </Paragraph>

      <Paragraph>A. Your Rights and Choices under the CCPA.</Paragraph>

      <Paragraph>
        The CCPA provides consumers (California residents) with specific rights regarding their Personal Information.
        This section describes your CCPA rights and explains how to exercise those rights.
      </Paragraph>

      <Paragraph>Right to Know and Data Portability</Paragraph>

      <Paragraph>
        You have the right to request that we disclose certain information to you about our collection and use of your
        Personal Information over the past 12 months (the "right to know"). Once we receive your request and confirm
        your identity (see the "Exercising Your Rights to Know or Delete" subsection below), we will disclose to you:
      </Paragraph>

      <List>
        <ListItem>• The categories of Personal Information we collected about you.</ListItem>
        <ListItem>• The categories of sources for the Personal Information we collected about you.</ListItem>
        <ListItem>• Our business or commercial purpose for collecting that Personal Information.</ListItem>
        <ListItem>• The categories of third parties with whom we share that Personal Information.</ListItem>
        <ListItem>• If we disclosed your Personal Information for a business purpose, two separate lists</ListItem>
        disclosing: sales, identifying the Personal Information categories that each category of recipient purchased;
        and disclosures for a business purpose, identifying the Personal Information categories that each category of
        recipient obtained.
        <ListItem>
          • The specific pieces of Personal Information we collected about you (also called a "data portability
          request").
        </ListItem>
      </List>

      <Paragraph>Right to Delete</Paragraph>

      <Paragraph>
        You have the right to request that we delete any of your Personal Information that we have collected and
        retained, subject to certain exceptions (the "right to delete"). Once we receive your request and confirm your
        identity (see "Exercising Your Rights to Know or Delete"), we will review your request to see if an applicable
        exception allows us to retain the information. We may deny your deletion request if retaining the information is
        necessary for us or our service provider(s) to:
      </Paragraph>

      <List>
        <ListItem>
          • Complete the transaction for which we collected the Personal Information, provide a good or service that you
          requested, take actions reasonably anticipated within the context of our ongoing business relationship with
          you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or
          otherwise perform our contract with you
        </ListItem>
        <ListItem>
          • Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or
          prosecute those responsible for such activities.
        </ListItem>
        <ListItem>• Debug products to identify and repair errors that impair existing intended functionality.</ListItem>
        <ListItem>
          • Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise
          another right provided for by law.
        </ListItem>
        <ListItem>
          • Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).
        </ListItem>
        <ListItem>
          • Enable solely internal uses that are reasonably aligned with consumer expectations based on your
          relationship with us.
        </ListItem>
        <ListItem>• Comply with a legal obligation.</ListItem>
        <ListItem>
          • Make other internal and lawful uses of that information that are compatible with the context in which you
          provided it.
        </ListItem>
      </List>

      <Paragraph>
        We will delete or deidentify Personal Information not subject to one of these exceptions from our records and
        will direct our service providers to take similar action.
      </Paragraph>

      <Paragraph>Exercising Your Rights to Know or Delete</Paragraph>

      <Paragraph>
        To exercise your rights to know or delete described above, please submit a request via our online Cleaved
        Privacy Request portal, which is accessible by clicking here.
      </Paragraph>

      <Paragraph>
        Only you, or someone legally authorized to act on your behalf, may make a request to know or delete related to
        your Personal Information by submitting proof of identity and, in the case of someone legally authorized to act
        on your behalf, proof of their authority to act. You may also make a request to know or delete on behalf of your
        child by providing proof of identity.
      </Paragraph>

      <Paragraph>
        You may submit a request to know only twice within a 12-month period. Your request to know or delete must
        provide information sufficient for us to reasonably verify you are the person about whom we collected Personal
        Information (or you are an authorized representative of same), as well as describe your request with enough
        detail for us to properly understand, evaluate, and respond to it. We cannot respond to your request or provide
        you with Personal Information if we cannot verify your identity or authority to make the request and confirm the
        Personal Information relates to you.
      </Paragraph>

      <Paragraph>
        You do not need to create an account with us to submit a request to know or delete. We will use Personal
        Information provided in the request only to verify the requestor's identity or authority to make it.
      </Paragraph>

      <Paragraph>
        For instructions on exercising your sale opt-out or opt-in rights, see "Personal Information Sales Opt-Out and
        Opt-In Rights" below.
      </Paragraph>

      <Paragraph>Response Timing and Format</Paragraph>

      <Paragraph>
        We will confirm receipt of your request within ten (10) business days. If you do not receive confirmation within
        the 10-day timeframe, please contact us at privacy@cleaved.com.
      </Paragraph>

      <Paragraph>
        We endeavor to substantively respond to a verifiable consumer request within forty-five (45) days of its
        receipt. If we require more time (up to another 45 days), we will inform you of the reason and extension period
        in writing.
      </Paragraph>

      <Paragraph>
        If you have an account with us, we will deliver our written response to that account, or to the email address
        associated with the account. If you do not have an account with us, we will deliver our written response by mail
        or electronically, at your option.
      </Paragraph>

      <Paragraph>
        Any disclosures we provide will cover the 12-month period preceding our receipt of your request. The response we
        provide will also explain the reasons we cannot comply with a request, if applicable. For data portability
        requests, we will select a format to provide your Personal Information that is readily useable and should allow
        you to transmit the information from one entity to another entity without hindrance.
      </Paragraph>

      <Paragraph>
        We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive,
        repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we
        made that decision and provide you with a cost estimate before completing your request.
      </Paragraph>

      <Paragraph>Personal Information Sales Opt-Out and Opt-In Rights</Paragraph>

      <Paragraph>
        The CCPA prohibits a business from selling Personal Information unless you have received explicit notice and an
        opportunity to opt out of further sales. We do not sell your Personal Information to third parties. If this
        position changes and you are older than 16, you will be given explicit notice and an opportunity to opt out of
        further sales, with details of how to exercise that "right to opt out" listed in this policy.
      </Paragraph>

      <Paragraph>
        We do not sell the Personal Information of any consumer, including consumers we actually know are less than 16
        years old, unless we receive affirmative authorization (the "right to opt in") from either the consumer who is
        between 13 and 15 years old, or the parent or guardian of a consumer less than 13 years old. Consumers who opt
        in to Personal Information sales may opt out of future sales at any time.
      </Paragraph>

      <Paragraph>
        We will only use Personal Information provided in an opt-out request to review and comply with the request.
      </Paragraph>

      <Paragraph>B. Non-Discrimination under the CCPA.</Paragraph>

      <Paragraph>
        We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we
        will not:
      </Paragraph>

      <List>
        <ListItem>• Deny you goods or services.</ListItem>
        <ListItem>
          • Charge you different prices or rates for goods or services, including through granting discounts or other
          benefits, or imposing penalties.
        </ListItem>
        <ListItem>• Provide you a different level or quality of goods or services.</ListItem>
        <ListItem>
          • Suggest that you may receive a different price or rate for goods or services or a different level or quality
          of goods or services.
        </ListItem>
      </List>

      <Paragraph>
        However, we may offer you certain financial incentives permitted by the CCPA that can result in different
        prices, rates, or quality levels. Any CCPA-permitted financial incentive we offer will reasonably relate to your
        Personal Information's value and contain written terms that describe the program's material aspects.
        Participation in a financial incentive program requires your prior optin consent, which you may revoke at any
        time. C. Other California Privacy Rights.
      </Paragraph>

      <Paragraph>
        California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our Website who are
        California residents to request certain information regarding our disclosure of Personal Information to third
        parties for their direct marketing purposes. Not all information sharing is covered by the "Shine The Light"
        requirements and only information on covered sharing may be included in our response. To make such a request,
        please do so via our online Cleaved Privacy Request portal, which is accessible by clicking here, or write to us
        at:
      </Paragraph>

      <Paragraph>Cleaved Privacy Request 209 S Stephanie Street B212 Henderson, NV 89012</Paragraph>

      <Paragraph>
        12. Your Additional Rights in the European Economic Area If your personal data has been collected in connection
        with our activities in the European Economic Area ("EEA"), you have the following rights:
      </Paragraph>

      <List>
        <ListItem>
          • Withdrawal of Consent: If consent is the lawful basis of our processing, you have the right
        </ListItem>
        <ListItem>to withdraw any consent that you have provided to us to process your personal data.</ListItem>
        <ListItem>• Access: You have the right to access your personal data.</ListItem>
        <ListItem>• Rectification: You have the right to rectify inaccurate personal data.</ListItem>
        <ListItem>
          • Erasure: You have the right to have your personal data erased if it is no longer necessary for the purposes
          for which it was processed, you have withdrawn your consent to, or object to, its processing and there is no
          other legitimate grounds for processing it or you believe that it has been unlawfully processed.
        </ListItem>
        <ListItem>
          • Restriction: You have the right to have the processing of your personal data restricted if you contest its
          accuracy, if its processing is unlawful, if we no longer need it but you need it preserved for purposes of a
          legal claim, or if you have objected to its processing and are awaiting verification of our legitimate grounds
          for processing it.
        </ListItem>
        <ListItem>
          • Data Portability: You have the right to have certain personal data you provide to us transferred to another
          company in a machine-readable format.
        </ListItem>
        <ListItem>
          • Objection: You have the right to let us know that you object to the further use or disclosure of your
          personal data for certain purposes.
        </ListItem>
      </List>

      <Paragraph>
        In order to exercise any of these rights, or for more information, please use the contact details specified in
        below in the "Contact Information" section. Please note that these rights are subject to certain preconditions
        and qualifications under applicable law.
      </Paragraph>

      <Paragraph>
        You also have the right (where applicable) to withdraw any consent given in relation to the processing of your
        Personal Information.
      </Paragraph>

      <Paragraph>
        Please note that the right to erasure is not absolute and it may not always be possible to erase personal data
        on request, including for example where the Personal Information must be retained to comply with a legal
        obligation.
      </Paragraph>

      <Paragraph>
        If you are in the EEA, you may lodge a complaint with a supervisory authority that has authority in your country
        or region. Please see the following website for contact information of the data protection authorities for
        member countries in the EEA:
        https://ec.europa.eu/justice/article29/structure/data-protection-authorities/index_en.htm. Cleaved, Inc. is the
        data controller with respect to processing of your Personal Information in connection with the Services.
      </Paragraph>

      <Paragraph>13. Contact Information</Paragraph>

      <Paragraph>
        If you have any questions, comments, or concerns about our processing activities, please email us at
        privacy@cleaved.com or write to us at Cleaved, Inc., P.O. Box 60989, Nashville, TN 37206. Please note that
        emails to privacy@cleaved.com should include only questions, comments, or concerns regarding our processing
        activities. To make a request for access or deletion of your Personal Information as permitted by law, please
        submit a request via our online Cleaved Privacy Request portal, which is accessible by clicking here.
      </Paragraph>
    </Box>
  );
};
