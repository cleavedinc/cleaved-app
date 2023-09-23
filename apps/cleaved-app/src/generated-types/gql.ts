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
    "\n  mutation googleSSOWithShareLink($token: String!, $shareLink: ID!) {\n    googleSSOWithShareLink(token: $token, shareLink: $shareLink) {\n      authorizationToken\n      joinedOrg\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n": types.GoogleSsoWithShareLinkDocument,
    "\n  mutation refreshLogIn($refreshToken: String!) {\n    refreshLogIn(refreshToken: $refreshToken) {\n      authorizationToken\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n": types.RefreshLogInDocument,
    "\n  mutation organizationRemoveUser($organizationId: ID!, $userId: ID!) {\n    organizationRemoveUser(organizationId: $organizationId, userId: $userId)\n  }\n": types.OrganizationRemoveUserDocument,
    "\n  mutation organizationSetUserPermissionLevel(\n    $organizationId: ID!\n    $userId: ID!\n    $permissionLevel: OrgPermissionLevel!\n  ) {\n    organizationSetUserPermissionLevel(\n      organizationId: $organizationId\n      userId: $userId\n      permissionLevel: $permissionLevel\n    )\n  }\n": types.OrganizationSetUserPermissionLevelDocument,
    "\n  mutation postProjectPin($organizationId: ID!, $postId: ID!) {\n    postProjectPin(organizationId: $organizationId, postId: $postId)\n  }\n": types.PostProjectPinDocument,
    "\n  mutation postProjectPinRemove($organizationId: ID!, $postId: ID!) {\n    postProjectPinRemove(organizationId: $organizationId, postId: $postId)\n  }\n": types.PostProjectPinRemoveDocument,
    "\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n": types.RemoveOrganizationShareLinkDocument,
    "\n  query organizationGetMember($organizationId: ID!, $memberId: ID!) {\n    organizationGetMember(organizationId: $organizationId, memberId: $memberId) {\n      about\n      emailAddress\n      id\n      firstName\n      goals\n      lastName\n      currentAvatar\n      jobTitle\n    }\n  }\n": types.OrganizationGetMemberDocument,
    "\n  query seekAccount($filter: SearchFilter, $pageSize: Int, $searchTerm: String!, $seekKey: ID) {\n    seekAccount(filter: $filter, pageSize: $pageSize, searchTerm: $searchTerm, seekKey: $seekKey) {\n      currentAvatar\n      firstName\n      id\n      lastName\n    }\n  }\n": types.SeekAccountDocument,
    "\n  mutation setAccountAvatar($image: Upload!) {\n    setAccountAvatar(image: $image)\n  }\n": types.SetAccountAvatarDocument,
    "\n  mutation setAccountEmail($newEmail: String!) {\n    setAccountEmail(newEmail: $newEmail)\n  }\n": types.SetAccountEmailDocument,
    "\n  mutation setMyGoals($goals: String!) {\n    setMyGoals(goals: $goals)\n  }\n": types.SetMyGoalsDocument,
    "\n  mutation setJobTitle($jobTitle: String!) {\n    setMyJobTitle(jobTitle: $jobTitle)\n  }\n": types.SetJobTitleDocument,
    "\n  mutation setMyAbout($about: String!) {\n    setMyAbout(about: $about)\n  }\n": types.SetMyAboutDocument,
    "\n  mutation updateAccount($firstName: String, $lastName: String, $middleName: String) {\n    updateAccount(firstName: $firstName, lastName: $lastName, middleName: $middleName)\n  }\n": types.UpdateAccountDocument,
    "\n  mutation postUploadImage($image: Upload!) {\n    postUploadImage(image: $image)\n  }\n": types.PostUploadImageDocument,
    "\n  mutation registerOrganization($organizationId: ID!, $name: String) {\n    registerOrganization(organizationId: $organizationId, name: $name)\n  }\n": types.RegisterOrganizationDocument,
    "\n  mutation projectCreate(\n    $projectName: String!\n    $organizationId: ID!\n    $projectId: ID\n    $projectDetail: String\n    $projectProgress: ProjectProgress\n  ) {\n    projectCreate(\n      projectName: $projectName\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectProgress: $projectProgress\n    )\n  }\n": types.ProjectCreateDocument,
    "\n  mutation projectUpdate(\n    $organizationId: ID!\n    $projectId: ID!\n    $projectDetail: String\n    $projectName: String!\n    $projectProgress: ProjectProgress\n  ) {\n    projectUpdate(\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectName: $projectName\n      projectProgress: $projectProgress\n    )\n  }\n": types.ProjectUpdateDocument,
    "\n  mutation postProjectCreate($organizationId: ID!, $projectId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectCreate(organizationId: $organizationId, projectId: $projectId, body: $body, imageUrls: $imageUrls)\n  }\n": types.PostProjectCreateDocument,
    "\n  mutation postProjectUpdate($organizationId: ID!, $postId: ID!, $body: String!, $imageUrls: [ImagePath!]) {\n    postProjectUpdate(organizationId: $organizationId, postId: $postId, body: $body, imageUrls: $imageUrls)\n  }\n": types.PostProjectUpdateDocument,
    "\n  mutation acceptTerms {\n    acceptTerms\n  }\n": types.AcceptTermsDocument,
    "\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n": types.GenerateOrganizationShareLinkDocument,
    "\n  mutation organizationRemoveMe($organizationId: ID!) {\n    organizationRemoveMe(organizationId: $organizationId)\n  }\n": types.OrganizationRemoveMeDocument,
    "\n  mutation postProjectRemove($organizationId: ID!, $postId: ID!) {\n    postProjectRemove(organizationId: $organizationId, postId: $postId)\n  }\n": types.PostProjectRemoveDocument,
    "\n  mutation postProjectReply($organizationId: ID!, $postOrPostReplyId: ID!, $body: String!) {\n    postProjectReply(organizationId: $organizationId, postOrPostReplyId: $postOrPostReplyId, body: $body)\n  }\n": types.PostProjectReplyDocument,
    "\n  mutation postProjectSetReaction($organizationId: ID!, $postId: ID!, $reactionType: PostReactionType!) {\n    postProjectSetReaction(organizationId: $organizationId, postId: $postId, reactionType: $reactionType)\n  }\n": types.PostProjectSetReactionDocument,
    "\n  mutation projectSetStatus($projectId: ID!, $organizationId: ID!, $status: ProjectStatus!) {\n    projectSetStatus(projectId: $projectId, organizationId: $organizationId, status: $status)\n  }\n": types.ProjectSetStatusDocument,
    "\n  mutation setPreferredOrgId($orgId: ID!) {\n    setPreferredOrgId(orgId: $orgId)\n  }\n": types.SetPreferredOrgIdDocument,
    "\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      goals\n      id\n      jobTitle\n      lastName\n    }\n  }\n": types.FindMyAccountDocument,
    "\n  query organizationGetMembership($organizationId: ID!) {\n    organizationGetMembership(organizationId: $organizationId) {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n": types.OrganizationGetMembershipDocument,
    "\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n": types.OrganizationMembershipsDocument,
    "\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      jobTitle\n      permissionInOrg\n    }\n  }\n": types.OrganizationSeekMembersDocument,
    "\n  query organizationShareLinks($organizationId: ID!) {\n    organizationShareLinks(organizationId: $organizationId) {\n      id\n      shareLink\n      permission\n    }\n  }\n": types.OrganizationShareLinksDocument,
    "\n  query postProjectAccountSeek($organizationId: ID!, $projectId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectAccountSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      currentAvatar\n      firstName\n      jobTitle\n      lastName\n    }\n  }\n": types.PostProjectAccountSeekDocument,
    "\n  query postProjectGetById($organizationId: ID!, $id: ID!) {\n    postProjectGetById(organizationId: $organizationId, id: $id) {\n      id\n      body\n      accountId\n      date\n      account {\n        currentAvatar\n        firstName\n        id\n        jobTitle\n        lastName\n      }\n      images\n    }\n  }\n": types.PostProjectGetByIdDocument,
    "\n  query postProjectReplies($organizationId: ID!, $parentPostId: ID!, $seekKey: ID, $pageSize: Int) {\n    postProjectReplies(\n      organizationId: $organizationId\n      parentPostId: $parentPostId\n      seekKey: $seekKey\n      pageSize: $pageSize\n    ) {\n      id\n      body\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      initialReplies {\n        id\n        body\n        date\n        account {\n          id\n          firstName\n          lastName\n          jobTitle\n          currentAvatar\n        }\n        reactionTotalCount\n        reactionsExpressed\n        myReaction\n        repliesCount\n        nestedRepliesCount\n        images\n      }\n      repliesCount\n      nestedRepliesCount\n      images\n    }\n  }\n": types.PostProjectRepliesDocument,
    "\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int, $pinnedFirst: Boolean) {\n    postProjectSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      pinnedFirst: $pinnedFirst\n    ) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      isPinned\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n": types.PostProjectSeekDocument,
    "\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      projectProgress\n      projectDetails\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n": types.ProjectByIdDocument,
    "\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int, $statusFilter: [ProjectStatus!]) {\n    projectsInOrgSeek(\n      organizationId: $organizationId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      statusFilter: $statusFilter\n    ) {\n      createdAt\n      id\n      name\n      projectProgress\n      status\n      totalResponseCount\n      totalRootPostCount\n    }\n  }\n": types.ProjectsInOrgSeekDocument,
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
export function graphql(source: "\n  mutation googleSSOWithShareLink($token: String!, $shareLink: ID!) {\n    googleSSOWithShareLink(token: $token, shareLink: $shareLink) {\n      authorizationToken\n      joinedOrg\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"): (typeof documents)["\n  mutation googleSSOWithShareLink($token: String!, $shareLink: ID!) {\n    googleSSOWithShareLink(token: $token, shareLink: $shareLink) {\n      authorizationToken\n      joinedOrg\n      preferredOrgId\n      refreshToken\n      tokenType\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation postProjectPin($organizationId: ID!, $postId: ID!) {\n    postProjectPin(organizationId: $organizationId, postId: $postId)\n  }\n"): (typeof documents)["\n  mutation postProjectPin($organizationId: ID!, $postId: ID!) {\n    postProjectPin(organizationId: $organizationId, postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postProjectPinRemove($organizationId: ID!, $postId: ID!) {\n    postProjectPinRemove(organizationId: $organizationId, postId: $postId)\n  }\n"): (typeof documents)["\n  mutation postProjectPinRemove($organizationId: ID!, $postId: ID!) {\n    postProjectPinRemove(organizationId: $organizationId, postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"): (typeof documents)["\n  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationGetMember($organizationId: ID!, $memberId: ID!) {\n    organizationGetMember(organizationId: $organizationId, memberId: $memberId) {\n      about\n      emailAddress\n      id\n      firstName\n      goals\n      lastName\n      currentAvatar\n      jobTitle\n    }\n  }\n"): (typeof documents)["\n  query organizationGetMember($organizationId: ID!, $memberId: ID!) {\n    organizationGetMember(organizationId: $organizationId, memberId: $memberId) {\n      about\n      emailAddress\n      id\n      firstName\n      goals\n      lastName\n      currentAvatar\n      jobTitle\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query seekAccount($filter: SearchFilter, $pageSize: Int, $searchTerm: String!, $seekKey: ID) {\n    seekAccount(filter: $filter, pageSize: $pageSize, searchTerm: $searchTerm, seekKey: $seekKey) {\n      currentAvatar\n      firstName\n      id\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query seekAccount($filter: SearchFilter, $pageSize: Int, $searchTerm: String!, $seekKey: ID) {\n    seekAccount(filter: $filter, pageSize: $pageSize, searchTerm: $searchTerm, seekKey: $seekKey) {\n      currentAvatar\n      firstName\n      id\n      lastName\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation setMyGoals($goals: String!) {\n    setMyGoals(goals: $goals)\n  }\n"): (typeof documents)["\n  mutation setMyGoals($goals: String!) {\n    setMyGoals(goals: $goals)\n  }\n"];
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
export function graphql(source: "\n  mutation projectCreate(\n    $projectName: String!\n    $organizationId: ID!\n    $projectId: ID\n    $projectDetail: String\n    $projectProgress: ProjectProgress\n  ) {\n    projectCreate(\n      projectName: $projectName\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectProgress: $projectProgress\n    )\n  }\n"): (typeof documents)["\n  mutation projectCreate(\n    $projectName: String!\n    $organizationId: ID!\n    $projectId: ID\n    $projectDetail: String\n    $projectProgress: ProjectProgress\n  ) {\n    projectCreate(\n      projectName: $projectName\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectProgress: $projectProgress\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation projectUpdate(\n    $organizationId: ID!\n    $projectId: ID!\n    $projectDetail: String\n    $projectName: String!\n    $projectProgress: ProjectProgress\n  ) {\n    projectUpdate(\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectName: $projectName\n      projectProgress: $projectProgress\n    )\n  }\n"): (typeof documents)["\n  mutation projectUpdate(\n    $organizationId: ID!\n    $projectId: ID!\n    $projectDetail: String\n    $projectName: String!\n    $projectProgress: ProjectProgress\n  ) {\n    projectUpdate(\n      organizationId: $organizationId\n      projectId: $projectId\n      projectDetail: $projectDetail\n      projectName: $projectName\n      projectProgress: $projectProgress\n    )\n  }\n"];
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
export function graphql(source: "\n  mutation acceptTerms {\n    acceptTerms\n  }\n"): (typeof documents)["\n  mutation acceptTerms {\n    acceptTerms\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"): (typeof documents)["\n  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {\n    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation organizationRemoveMe($organizationId: ID!) {\n    organizationRemoveMe(organizationId: $organizationId)\n  }\n"): (typeof documents)["\n  mutation organizationRemoveMe($organizationId: ID!) {\n    organizationRemoveMe(organizationId: $organizationId)\n  }\n"];
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
export function graphql(source: "\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      goals\n      id\n      jobTitle\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query findMyAccount {\n    findMyAccount {\n      about\n      currentAvatar\n      emailAddress\n      firstName\n      goals\n      id\n      jobTitle\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationGetMembership($organizationId: ID!) {\n    organizationGetMembership(organizationId: $organizationId) {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n"): (typeof documents)["\n  query organizationGetMembership($organizationId: ID!) {\n    organizationGetMembership(organizationId: $organizationId) {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n"): (typeof documents)["\n  query organizationMemberships {\n    organizationMemberships {\n      id\n      name\n      userPermissionInOrg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      jobTitle\n      permissionInOrg\n    }\n  }\n"): (typeof documents)["\n  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {\n    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {\n      id\n      firstName\n      lastName\n      currentAvatar\n      jobTitle\n      permissionInOrg\n    }\n  }\n"];
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
export function graphql(source: "\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int, $pinnedFirst: Boolean) {\n    postProjectSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      pinnedFirst: $pinnedFirst\n    ) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      isPinned\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int, $pinnedFirst: Boolean) {\n    postProjectSeek(\n      organizationId: $organizationId\n      projectId: $projectId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      pinnedFirst: $pinnedFirst\n    ) {\n      id\n      body\n      accountId\n      date\n      account {\n        id\n        firstName\n        lastName\n        jobTitle\n        currentAvatar\n      }\n      isPinned\n      reactionTotalCount\n      reactionsExpressed\n      myReaction\n      repliesCount\n      images\n      project {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      projectProgress\n      projectDetails\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n"): (typeof documents)["\n  query projectById($projectId: ID!, $organizationId: ID!) {\n    projectById(projectId: $projectId, organizationId: $organizationId) {\n      id\n      name\n      projectProgress\n      projectDetails\n      totalRootPostCount\n      totalResponseCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int, $statusFilter: [ProjectStatus!]) {\n    projectsInOrgSeek(\n      organizationId: $organizationId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      statusFilter: $statusFilter\n    ) {\n      createdAt\n      id\n      name\n      projectProgress\n      status\n      totalResponseCount\n      totalRootPostCount\n    }\n  }\n"): (typeof documents)["\n  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int, $statusFilter: [ProjectStatus!]) {\n    projectsInOrgSeek(\n      organizationId: $organizationId\n      seekKey: $seekKey\n      pageSize: $pageSize\n      statusFilter: $statusFilter\n    ) {\n      createdAt\n      id\n      name\n      projectProgress\n      status\n      totalResponseCount\n      totalRootPostCount\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;