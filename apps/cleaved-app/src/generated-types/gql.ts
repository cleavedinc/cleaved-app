/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation googleSSO($token: String!) {\n    googleSSO(token: $token) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n": types.GoogleSsoDocument,
    "\n  mutation refreshLogIn($refreshToken: String!) {\n    refreshLogIn(refreshToken: $refreshToken) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n": types.RefreshLogInDocument,
    "\n  mutation organizationRemoveUser($organizationId: ID!, $userId: ID!) {\n    organizationRemoveUser(organizationId: $organizationId, userId: $userId)\n  }\n": types.OrganizationRemoveUserDocument,
    "\n  mutation organizationSetUserPermissionLevel(\n    $organizationId: ID!\n    $userId: ID!\n    $permissionLevel: OrgPermissionLevel!\n  ) {\n    organizationSetUserPermissionLevel(\n      organizationId: $organizationId\n      userId: $userId\n      permissionLevel: $permissionLevel\n    )\n  }\n": types.OrganizationSetUserPermissionLevelDocument,
    "\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n": types.RemoveOrganizationShareLinkDocument,
    "\n  mutation setAccountAvatar($image: Upload!) {\n    setAccountAvatar(image: $image)\n  }\n": types.SetAccountAvatarDocument,
    "\n  mutation setAccountEmail($newEmail: String!) {\n    setAccountEmail(newEmail: $newEmail)\n  }\n": types.SetAccountEmailDocument,
    "\n  mutation setJobTitle($jobTitle: String!) {\n    setMyJobTitle(jobTitle: $jobTitle)\n  }\n": types.SetJobTitleDocument,
    "\n  mutation setMyAbout($about: String!) {\n    setMyAbout(about: $about)\n  }\n": types.SetMyAboutDocument,
    "\n  mutation updateAccount($firstName: String, $lastName: String, $middleName: String) {\n    updateAccount(firstName: $firstName, lastName: $lastName, middleName: $middleName)\n  }\n": types.UpdateAccountDocument,
    "\n  mutation postUploadImage($image: Upload!) {\n    postUploadImage(image: $image)\n  }\n": types.PostUploadImageDocument,
    "\n  mutation registerOrganization($organizationId: ID!, $name: String) {\n    registerOrganization(organizationId: $organizationId, name: $name)\n  }\n": types.RegisterOrganizationDocument,
    "\n  mutation postProjectCreate($organizationId: ID!, $projectId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectCreate(organizationId: $organizationId, projectId: $projectId, body: $body, imageUrls: $imageUrls)\n  }\n": types.PostProjectCreateDocument,
    "\n  mutation postProjectUpdate($organizationId: ID!, $postId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectUpdate(organizationId: $organizationId, postId: $postId, body: $body, imageUrls: $imageUrls)\n  }\n": types.PostProjectUpdateDocument,
    "\n  mutation projectStart($projectName: String!, $organizationId: ID!, $projectId: ID) {\n    projectStart(projectName: $projectName, organizationId: $organizationId, projectId: $projectId)\n  }\n": types.ProjectStartDocument,
    "\n  mutation acceptTerms {\n    acceptTerms\n  }\n": types.AcceptTermsDocument,
    "\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n": types.GenerateOrganizationShareLinkDocument,
    "\n  mutation joinOrganizationWithShareLink($shareLink: ID!) {\n    joinOrganizationWithShareLink(shareLink: $shareLink)\n  }\n": types.JoinOrganizationWithShareLinkDocument,
    "\n  mutation postProjectRemove($organizationId: ID!, $postId: ID!) {\n    postProjectRemove(organizationId: $organizationId, postId: $postId)\n  }\n": types.PostProjectRemoveDocument,
    "\n  mutation postProjectReply($organizationId: ID!, $postOrPostReplyId: ID!, $body: String!) {\n    postProjectReply(organizationId: $organizationId, postOrPostReplyId: $postOrPostReplyId, body: $body)\n  }\n": types.PostProjectReplyDocument,
    "\n  mutation postProjectSetReaction($organizationId: ID!, $postId: ID!, $reactionType: PostReactionType!) {\n    postProjectSetReaction(organizationId: $organizationId, postId: $postId, reactionType: $reactionType)\n  }\n": types.PostProjectSetReactionDocument,
    "\n  mutation projectSetStatus($projectId: ID!, $organizationId: ID!, $status: ProjectStatus!) {\n    projectSetStatus(projectId: $projectId, organizationId: $organizationId, status: $status)\n  }\n": types.ProjectSetStatusDocument,
    "\n  mutation setPreferredOrgId($orgId: ID!) {\n    setPreferredOrgId(orgId: $orgId)\n  }\n": types.SetPreferredOrgIdDocument,
    "\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      id\n      jobTitle\n      lastName\n      middleName\n    }\n  }\n": types.FindMyAccountDocument,
    "\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n    }\n  }\n": types.OrganizationMembershipsDocument,
    "\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      permissionInOrg\n    }\n  }\n": types.OrganizationSeekMembersDocument,
    "\n  query organizationShareLinks($organizationId: ID!) {\n    organizationShareLinks(organizationId: $organizationId) {\n      id\n      shareLink\n      permission\n    }\n  }\n": types.OrganizationShareLinksDocument,
    "\n  query postProjectAccountSeek($organizationId: ID!, $projectId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectAccountSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      currentAvatar\n      firstName\n      jobTitle\n      lastName\n    }\n  }\n": types.PostProjectAccountSeekDocument,
    "\n  query postProjectGetById($organizationId: ID!, $id: ID!) {\n    postProjectGetById(organizationId: $organizationId, id: $id) {\n      id\n      body\n      accountId\n      date\n      account {\n        currentAvatar\n        firstName\n        id\n        jobTitle\n        lastName\n      }\n      images\n    }\n  }\n": types.PostProjectGetByIdDocument,
    "\n  query postProjectReplies($organizationId: ID!, $parentPostId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectReplies(\n      organizationId: $organizationId\n      parentPostId: $parentPostId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      body\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      initialReplies {\n        id\n        body\n        date\n        account {\n          id\n          firstName\n          lastName\n          jobTitle\n          currentAvatar\n        }\n        reactionTotalCount\n        reactionsExpressed\n        myReaction\n        repliesCount\n        nestedRepliesCount\n        images\n      }\n      repliesCount\n      nestedRepliesCount\n      images\n    }\n  }\n": types.PostProjectRepliesDocument,
    "\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int) {\n    postProjectSeek(organizationId: $organizationId, projectId: $projectId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n": types.PostProjectSeekDocument,
    "\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n": types.ProjectByIdDocument,
    "\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    projectsInOrgSeek(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      name\n      status\n      totalRootPostCount\n    }\n  }\n": types.ProjectsInOrgSeekDocument,
    "\n  query termsAccepted {\n    termsAccepted\n  }\n": types.TermsAcceptedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation googleSSO($token: String!) {\n    googleSSO(token: $token) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"): (typeof documents)["\n  mutation googleSSO($token: String!) {\n    googleSSO(token: $token) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation refreshLogIn($refreshToken: String!) {\n    refreshLogIn(refreshToken: $refreshToken) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"): (typeof documents)["\n  mutation refreshLogIn($refreshToken: String!) {\n    refreshLogIn(refreshToken: $refreshToken) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation organizationRemoveUser($organizationId: ID!, $userId: ID!) {\n    organizationRemoveUser(organizationId: $organizationId, userId: $userId)\n  }\n"): (typeof documents)["\n  mutation organizationRemoveUser($organizationId: ID!, $userId: ID!) {\n    organizationRemoveUser(organizationId: $organizationId, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation organizationSetUserPermissionLevel(\n    $organizationId: ID!\n    $userId: ID!\n    $permissionLevel: OrgPermissionLevel!\n  ) {\n    organizationSetUserPermissionLevel(\n      organizationId: $organizationId\n      userId: $userId\n      permissionLevel: $permissionLevel\n    )\n  }\n"): (typeof documents)["\n  mutation organizationSetUserPermissionLevel(\n    $organizationId: ID!\n    $userId: ID!\n    $permissionLevel: OrgPermissionLevel!\n  ) {\n    organizationSetUserPermissionLevel(\n      organizationId: $organizationId\n      userId: $userId\n      permissionLevel: $permissionLevel\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"): (typeof documents)["\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setAccountAvatar($image: Upload!) {\n    setAccountAvatar(image: $image)\n  }\n"): (typeof documents)["\n  mutation setAccountAvatar($image: Upload!) {\n    setAccountAvatar(image: $image)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setAccountEmail($newEmail: String!) {\n    setAccountEmail(newEmail: $newEmail)\n  }\n"): (typeof documents)["\n  mutation setAccountEmail($newEmail: String!) {\n    setAccountEmail(newEmail: $newEmail)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setJobTitle($jobTitle: String!) {\n    setMyJobTitle(jobTitle: $jobTitle)\n  }\n"): (typeof documents)["\n  mutation setJobTitle($jobTitle: String!) {\n    setMyJobTitle(jobTitle: $jobTitle)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setMyAbout($about: String!) {\n    setMyAbout(about: $about)\n  }\n"): (typeof documents)["\n  mutation setMyAbout($about: String!) {\n    setMyAbout(about: $about)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateAccount($firstName: String, $lastName: String, $middleName: String) {\n    updateAccount(firstName: $firstName, lastName: $lastName, middleName: $middleName)\n  }\n"): (typeof documents)["\n  mutation updateAccount($firstName: String, $lastName: String, $middleName: String) {\n    updateAccount(firstName: $firstName, lastName: $lastName, middleName: $middleName)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postUploadImage($image: Upload!) {\n    postUploadImage(image: $image)\n  }\n"): (typeof documents)["\n  mutation postUploadImage($image: Upload!) {\n    postUploadImage(image: $image)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation registerOrganization($organizationId: ID!, $name: String) {\n    registerOrganization(organizationId: $organizationId, name: $name)\n  }\n"): (typeof documents)["\n  mutation registerOrganization($organizationId: ID!, $name: String) {\n    registerOrganization(organizationId: $organizationId, name: $name)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectCreate($organizationId: ID!, $projectId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectCreate(organizationId: $organizationId, projectId: $projectId, body: $body, imageUrls: $imageUrls)\n  }\n"): (typeof documents)["\n  mutation postProjectCreate($organizationId: ID!, $projectId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectCreate(organizationId: $organizationId, projectId: $projectId, body: $body, imageUrls: $imageUrls)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectUpdate($organizationId: ID!, $postId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectUpdate(organizationId: $organizationId, postId: $postId, body: $body, imageUrls: $imageUrls)\n  }\n"): (typeof documents)["\n  mutation postProjectUpdate($organizationId: ID!, $postId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectUpdate(organizationId: $organizationId, postId: $postId, body: $body, imageUrls: $imageUrls)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation projectStart($projectName: String!, $organizationId: ID!, $projectId: ID) {\n    projectStart(projectName: $projectName, organizationId: $organizationId, projectId: $projectId)\n  }\n"): (typeof documents)["\n  mutation projectStart($projectName: String!, $organizationId: ID!, $projectId: ID) {\n    projectStart(projectName: $projectName, organizationId: $organizationId, projectId: $projectId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation acceptTerms {\n    acceptTerms\n  }\n"): (typeof documents)["\n  mutation acceptTerms {\n    acceptTerms\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"): (typeof documents)["\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation joinOrganizationWithShareLink($shareLink: ID!) {\n    joinOrganizationWithShareLink(shareLink: $shareLink)\n  }\n"): (typeof documents)["\n  mutation joinOrganizationWithShareLink($shareLink: ID!) {\n    joinOrganizationWithShareLink(shareLink: $shareLink)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectRemove($organizationId: ID!, $postId: ID!) {\n    postProjectRemove(organizationId: $organizationId, postId: $postId)\n  }\n"): (typeof documents)["\n  mutation postProjectRemove($organizationId: ID!, $postId: ID!) {\n    postProjectRemove(organizationId: $organizationId, postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectReply($organizationId: ID!, $postOrPostReplyId: ID!, $body: String!) {\n    postProjectReply(organizationId: $organizationId, postOrPostReplyId: $postOrPostReplyId, body: $body)\n  }\n"): (typeof documents)["\n  mutation postProjectReply($organizationId: ID!, $postOrPostReplyId: ID!, $body: String!) {\n    postProjectReply(organizationId: $organizationId, postOrPostReplyId: $postOrPostReplyId, body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectSetReaction($organizationId: ID!, $postId: ID!, $reactionType: PostReactionType!) {\n    postProjectSetReaction(organizationId: $organizationId, postId: $postId, reactionType: $reactionType)\n  }\n"): (typeof documents)["\n  mutation postProjectSetReaction($organizationId: ID!, $postId: ID!, $reactionType: PostReactionType!) {\n    postProjectSetReaction(organizationId: $organizationId, postId: $postId, reactionType: $reactionType)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation projectSetStatus($projectId: ID!, $organizationId: ID!, $status: ProjectStatus!) {\n    projectSetStatus(projectId: $projectId, organizationId: $organizationId, status: $status)\n  }\n"): (typeof documents)["\n  mutation projectSetStatus($projectId: ID!, $organizationId: ID!, $status: ProjectStatus!) {\n    projectSetStatus(projectId: $projectId, organizationId: $organizationId, status: $status)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setPreferredOrgId($orgId: ID!) {\n    setPreferredOrgId(orgId: $orgId)\n  }\n"): (typeof documents)["\n  mutation setPreferredOrgId($orgId: ID!) {\n    setPreferredOrgId(orgId: $orgId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      id\n      jobTitle\n      lastName\n      middleName\n    }\n  }\n"): (typeof documents)["\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      id\n      jobTitle\n      lastName\n      middleName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      permissionInOrg\n    }\n  }\n"): (typeof documents)["\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      permissionInOrg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationShareLinks($organizationId: ID!) {\n    organizationShareLinks(organizationId: $organizationId) {\n      id\n      shareLink\n      permission\n    }\n  }\n"): (typeof documents)["\n  query organizationShareLinks($organizationId: ID!) {\n    organizationShareLinks(organizationId: $organizationId) {\n      id\n      shareLink\n      permission\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query postProjectAccountSeek($organizationId: ID!, $projectId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectAccountSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      currentAvatar\n      firstName\n      jobTitle\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query postProjectAccountSeek($organizationId: ID!, $projectId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectAccountSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      currentAvatar\n      firstName\n      jobTitle\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query postProjectGetById($organizationId: ID!, $id: ID!) {\n    postProjectGetById(organizationId: $organizationId, id: $id) {\n      id\n      body\n      accountId\n      date\n      account {\n        currentAvatar\n        firstName\n        id\n        jobTitle\n        lastName\n      }\n      images\n    }\n  }\n"): (typeof documents)["\n  query postProjectGetById($organizationId: ID!, $id: ID!) {\n    postProjectGetById(organizationId: $organizationId, id: $id) {\n      id\n      body\n      accountId\n      date\n      account {\n        currentAvatar\n        firstName\n        id\n        jobTitle\n        lastName\n      }\n      images\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query postProjectReplies($organizationId: ID!, $parentPostId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectReplies(\n      organizationId: $organizationId\n      parentPostId: $parentPostId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      body\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      initialReplies {\n        id\n        body\n        date\n        account {\n          id\n          firstName\n          lastName\n          jobTitle\n          currentAvatar\n        }\n        reactionTotalCount\n        reactionsExpressed\n        myReaction\n        repliesCount\n        nestedRepliesCount\n        images\n      }\n      repliesCount\n      nestedRepliesCount\n      images\n    }\n  }\n"): (typeof documents)["\n  query postProjectReplies($organizationId: ID!, $parentPostId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectReplies(\n      organizationId: $organizationId\n      parentPostId: $parentPostId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      body\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      initialReplies {\n        id\n        body\n        date\n        account {\n          id\n          firstName\n          lastName\n          jobTitle\n          currentAvatar\n        }\n        reactionTotalCount\n        reactionsExpressed\n        myReaction\n        repliesCount\n        nestedRepliesCount\n        images\n      }\n      repliesCount\n      nestedRepliesCount\n      images\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int) {\n    postProjectSeek(organizationId: $organizationId, projectId: $projectId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int) {\n    postProjectSeek(organizationId: $organizationId, projectId: $projectId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n"): (typeof documents)["\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    projectsInOrgSeek(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      name\n      status\n      totalRootPostCount\n    }\n  }\n"): (typeof documents)["\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    projectsInOrgSeek(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      name\n      status\n      totalRootPostCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query termsAccepted {\n    termsAccepted\n  }\n"): (typeof documents)["\n  query termsAccepted {\n    termsAccepted\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;