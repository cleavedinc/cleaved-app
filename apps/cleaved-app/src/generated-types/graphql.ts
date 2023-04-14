/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLInt: any;
  ISODateTime: any;
  ImagePath: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  Void: any;
};

export type AccountMemberView = {
  __typename?: 'AccountMemberView';
  currentAvatar?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  permissionInOrg: OrgPermissionLevel;
  preferredName?: Maybe<Scalars['String']>;
};

export type AccountPrivateView = {
  __typename?: 'AccountPrivateView';
  currentAvatar?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  preferredName?: Maybe<Scalars['String']>;
  professionals: Array<ProfessionalUnlinkedView>;
};

export type AccountPublicUnlinkedView = {
  __typename?: 'AccountPublicUnlinkedView';
  currentAvatar?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  preferredName?: Maybe<Scalars['String']>;
};

export type AccountPublicView = {
  __typename?: 'AccountPublicView';
  currentAvatar?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  preferredName?: Maybe<Scalars['String']>;
  professionals: Array<ProfessionalUnlinkedView>;
};

export type LogInResultView = {
  __typename?: 'LogInResultView';
  authorizationToken: Scalars['String'];
  id: Scalars['ID'];
  preferredOrgId?: Maybe<Scalars['ID']>;
  refreshToken: Scalars['String'];
  tokenType: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptTerms?: Maybe<Scalars['Void']>;
  generateOrganizationShareLink: Scalars['ID'];
  googleSSO: LogInResultView;
  joinOrganizationWithShareLink?: Maybe<Scalars['Void']>;
  markAllNotificationsAsViewed?: Maybe<Scalars['Void']>;
  organizationRemoveMe?: Maybe<Scalars['Void']>;
  organizationRemoveUser?: Maybe<Scalars['Void']>;
  organizationSetUserPermissionLevel?: Maybe<Scalars['Void']>;
  postProjectCreate?: Maybe<Scalars['Void']>;
  postProjectRemove?: Maybe<Scalars['Void']>;
  postProjectReply?: Maybe<Scalars['Void']>;
  postProjectSetReaction?: Maybe<Scalars['Void']>;
  postProjectUpdate?: Maybe<Scalars['Void']>;
  postUploadImage: Scalars['ImagePath'];
  projectStart?: Maybe<Scalars['Void']>;
  refreshLogIn: LogInResultView;
  /** Basic registration for a new organization. This will get more interesting itterations in the future. */
  registerOrganization?: Maybe<Scalars['Void']>;
  removeOrganizationShareLink?: Maybe<Scalars['Void']>;
  setAccountAvatar?: Maybe<Scalars['Void']>;
  setAccountEmail?: Maybe<Scalars['Void']>;
  setPreferredOrgId?: Maybe<Scalars['Void']>;
  setProfessionalAbout?: Maybe<Scalars['Void']>;
  setTitle?: Maybe<Scalars['Void']>;
  updateAccount?: Maybe<Scalars['Void']>;
};


export type MutationGenerateOrganizationShareLinkArgs = {
  organizationId: Scalars['ID'];
  permission: OrgPermissionLevel;
};


export type MutationGoogleSsoArgs = {
  scopeRequests?: InputMaybe<Array<Scope>>;
  token: Scalars['String'];
};


export type MutationJoinOrganizationWithShareLinkArgs = {
  shareLink: Scalars['ID'];
};


export type MutationMarkAllNotificationsAsViewedArgs = {
  source?: InputMaybe<RequestSource>;
};


export type MutationOrganizationRemoveMeArgs = {
  organizationId: Scalars['ID'];
};


export type MutationOrganizationRemoveUserArgs = {
  organizationId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationOrganizationSetUserPermissionLevelArgs = {
  organizationId: Scalars['ID'];
  permissionLevel: OrgPermissionLevel;
  userId: Scalars['ID'];
};


export type MutationPostProjectCreateArgs = {
  body: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']>>;
  organizationId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationPostProjectRemoveArgs = {
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
};


export type MutationPostProjectReplyArgs = {
  body: Scalars['String'];
  organizationId: Scalars['ID'];
  postOrPostReplyId: Scalars['ID'];
};


export type MutationPostProjectSetReactionArgs = {
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
  reactionType: PostReactionType;
};


export type MutationPostProjectUpdateArgs = {
  body: Scalars['String'];
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
};


export type MutationPostUploadImageArgs = {
  image: Scalars['Upload'];
};


export type MutationProjectStartArgs = {
  organizationId: Scalars['ID'];
  projectName: Scalars['String'];
};


export type MutationRefreshLogInArgs = {
  refreshToken: Scalars['String'];
  scopeRequests?: InputMaybe<Array<Scope>>;
};


export type MutationRegisterOrganizationArgs = {
  name?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['ID'];
};


export type MutationRemoveOrganizationShareLinkArgs = {
  organizationId: Scalars['ID'];
  permission: OrgPermissionLevel;
};


export type MutationSetAccountAvatarArgs = {
  image: Scalars['Upload'];
};


export type MutationSetAccountEmailArgs = {
  newEmail: Scalars['String'];
};


export type MutationSetPreferredOrgIdArgs = {
  orgId: Scalars['ID'];
};


export type MutationSetProfessionalAboutArgs = {
  newAbout: Scalars['String'];
  professionalId: Scalars['ID'];
};


export type MutationSetTitleArgs = {
  companyName?: InputMaybe<Scalars['String']>;
  newTitle: Scalars['String'];
  professionalId: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  preferredName?: InputMaybe<Scalars['String']>;
};

export type NotificationPagedResponse = {
  __typename?: 'NotificationPagedResponse';
  id: Scalars['ID'];
  notifications: Array<NotificationView>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalNotifications: Scalars['Int'];
  totalUnacknowledgedNotifications: Scalars['Int'];
};

export enum NotificationTypes {
  Feedback = 'FEEDBACK',
  FeedbackRevisionRequest = 'FEEDBACK_REVISION_REQUEST',
  FeedbackUpdated = 'FEEDBACK_UPDATED',
  Unknown = 'UNKNOWN'
}

export type NotificationView = {
  __typename?: 'NotificationView';
  acknowledged: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  longDescription: Scalars['String'];
  resourceId?: Maybe<Scalars['ID']>;
  type?: Maybe<NotificationTypes>;
};

export enum OrgPermissionLevel {
  Admin = 'ADMIN',
  Updater = 'UPDATER',
  Viewer = 'VIEWER'
}

export type OrganizationShareLink = {
  __typename?: 'OrganizationShareLink';
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  permission: OrgPermissionLevel;
  shareLink: Scalars['ID'];
};

export type PostCustomContent = {
  __typename?: 'PostCustomContent';
  content: Scalars['String'];
  id: Scalars['ID'];
  type: PostCustomContentType;
};

export enum PostCustomContentType {
  Footer = 'FOOTER',
  Header = 'HEADER'
}

export type PostReactionAggregateType = {
  __typename?: 'PostReactionAggregateType';
  count: Scalars['GraphQLInt'];
  id: Scalars['ID'];
  type: PostReactionType;
};

export enum PostReactionType {
  Celebrate = 'CELEBRATE',
  Like = 'LIKE',
  NoReaction = 'NO_REACTION',
  Reviewed = 'REVIEWED',
  Thanks = 'THANKS'
}

export type PrivateOrganizationView = {
  __typename?: 'PrivateOrganizationView';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ProfessionalUnlinkedView = {
  __typename?: 'ProfessionalUnlinkedView';
  about?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  profileName?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type ProfessionalView = {
  __typename?: 'ProfessionalView';
  about?: Maybe<Scalars['String']>;
  account: AccountPublicUnlinkedView;
  companyName: Scalars['String'];
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  profileName?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Total posts and responses on project */
  totalPostCount: Scalars['Int'];
  /** Total responses excluding root posts on project */
  totalResponseCount: Scalars['Int'];
  /** Total posts excluding responses on project */
  totalRootPostCount: Scalars['Int'];
};

export type ProjectPost = {
  __typename?: 'ProjectPost';
  account: AccountPublicView;
  accountId: Scalars['ID'];
  body: Scalars['String'];
  customContent: Array<PostCustomContent>;
  date: Scalars['ISODateTime'];
  id: Scalars['ID'];
  images: Array<Scalars['ImagePath']>;
  /** Retrieves first few most-recent comments on this post. To load more replies, use query repliesToPost */
  initialReplies: Array<ProjectPost>;
  myReaction: PostReactionType;
  /** Count of all direct and indirect replies to this post counting nested replies */
  nestedRepliesCount: Scalars['String'];
  project: Project;
  /** Total of all reactions to this post */
  reactionTotalCount: Scalars['String'];
  reactions: Array<PostReactionAggregateType>;
  /** Reaction types expressed by all users to this post */
  reactionsExpressed: Array<PostReactionType>;
  /** @deprecated use initialReplies */
  replies: Array<ProjectPost>;
  /** Count of direct replies to this post not counting replies of replies */
  repliesCount: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findMyAccount: AccountPrivateView;
  findProfessionalById: ProfessionalView;
  getNotifications: NotificationPagedResponse;
  organizationMemberships: Array<PrivateOrganizationView>;
  organizationSeekMembers: Array<AccountMemberView>;
  organizationShareLinks: Array<OrganizationShareLink>;
  organizationsCreatedByMe: Array<PrivateOrganizationView>;
  /** " Fetch next page of replies for parent post ID specified in seekKey */
  postProjectAccountSeek: Array<AccountPrivateView>;
  /** " Attempt to fetch a post or post-reply by ID. If post is not found, returns null. */
  postProjectGetById?: Maybe<ProjectPost>;
  /** " Fetch next page of replies for parent post ID specified in seekKey */
  postProjectReplies: Array<ProjectPost>;
  /** " Paged org or org-project seek view of project posts */
  postProjectSeek: Array<ProjectPost>;
  projectById: Project;
  /** @deprecated Use `projectsInOrgSeek`. */
  projectsInOrg: Array<Project>;
  projectsInOrgSeek: Array<Project>;
  termsAccepted: Scalars['Boolean'];
};


export type QueryFindProfessionalByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetNotificationsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryOrganizationSeekMembersArgs = {
  organizationId: Scalars['ID'];
  pageSize?: InputMaybe<Scalars['Int']>;
  seekKey?: InputMaybe<Scalars['ID']>;
};


export type QueryOrganizationShareLinksArgs = {
  organizationId: Scalars['ID'];
};


export type QueryPostProjectAccountSeekArgs = {
  organizationId: Scalars['ID'];
  pageSize?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
};


export type QueryPostProjectGetByIdArgs = {
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
};


export type QueryPostProjectRepliesArgs = {
  organizationId: Scalars['ID'];
  pageSize?: InputMaybe<Scalars['Int']>;
  parentPostId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
};


export type QueryPostProjectSeekArgs = {
  organizationId: Scalars['ID'];
  pageSize?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ID']>;
  seekKey?: InputMaybe<Scalars['ID']>;
};


export type QueryProjectByIdArgs = {
  organizationId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryProjectsInOrgArgs = {
  orgId: Scalars['ID'];
};


export type QueryProjectsInOrgSeekArgs = {
  organizationId: Scalars['ID'];
  pageSize?: InputMaybe<Scalars['Int']>;
  seekKey?: InputMaybe<Scalars['ID']>;
};

export enum RequestSource {
  Web = 'WEB'
}

export enum Scope {
  Organization = 'ORGANIZATION',
  Project = 'PROJECT'
}

export type GoogleSsoMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type GoogleSsoMutation = { __typename?: 'Mutation', googleSSO: { __typename?: 'LogInResultView', authorizationToken: string, preferredOrgId?: string | null, refreshToken: string, tokenType: string } };

export type RefreshLogInMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshLogInMutation = { __typename?: 'Mutation', refreshLogIn: { __typename?: 'LogInResultView', authorizationToken: string, preferredOrgId?: string | null, refreshToken: string, tokenType: string } };

export type OrganizationRemoveUserMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  userId: Scalars['ID'];
}>;


export type OrganizationRemoveUserMutation = { __typename?: 'Mutation', organizationRemoveUser?: any | null };

export type OrganizationSetUserPermissionLevelMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  userId: Scalars['ID'];
  permissionLevel: OrgPermissionLevel;
}>;


export type OrganizationSetUserPermissionLevelMutation = { __typename?: 'Mutation', organizationSetUserPermissionLevel?: any | null };

export type RemoveOrganizationShareLinkMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  permission: OrgPermissionLevel;
}>;


export type RemoveOrganizationShareLinkMutation = { __typename?: 'Mutation', removeOrganizationShareLink?: any | null };

export type FindMyAccountProfessionalInformationDataWrapperQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountProfessionalInformationDataWrapperQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', id: string, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', about?: string | null, id: string }> } };

export type SetAccountAvatarMutationVariables = Exact<{
  image: Scalars['Upload'];
}>;


export type SetAccountAvatarMutation = { __typename?: 'Mutation', setAccountAvatar?: any | null };

export type SetAccountEmailMutationVariables = Exact<{
  newEmail: Scalars['String'];
}>;


export type SetAccountEmailMutation = { __typename?: 'Mutation', setAccountEmail?: any | null };

export type SetJobTitleMutationVariables = Exact<{
  professionalId: Scalars['ID'];
  newTitle: Scalars['String'];
}>;


export type SetJobTitleMutation = { __typename?: 'Mutation', setTitle?: any | null };

export type SetProfessionalAboutMutationVariables = Exact<{
  professionalId: Scalars['ID'];
  newAbout: Scalars['String'];
}>;


export type SetProfessionalAboutMutation = { __typename?: 'Mutation', setProfessionalAbout?: any | null };

export type UpdateAccountMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount?: any | null };

export type PostUploadImageMutationVariables = Exact<{
  image: Scalars['Upload'];
}>;


export type PostUploadImageMutation = { __typename?: 'Mutation', postUploadImage: any };

export type RegisterOrganizationMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type RegisterOrganizationMutation = { __typename?: 'Mutation', registerOrganization?: any | null };

export type PostProjectCreateMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  projectId: Scalars['ID'];
  body: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']> | Scalars['ImagePath']>;
}>;


export type PostProjectCreateMutation = { __typename?: 'Mutation', postProjectCreate?: any | null };

export type PostProjectUpdateMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type PostProjectUpdateMutation = { __typename?: 'Mutation', postProjectUpdate?: any | null };

export type ProjectStartMutationVariables = Exact<{
  projectName: Scalars['String'];
  organizationId: Scalars['ID'];
}>;


export type ProjectStartMutation = { __typename?: 'Mutation', projectStart?: any | null };

export type AcceptTermsMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptTermsMutation = { __typename?: 'Mutation', acceptTerms?: any | null };

export type GenerateOrganizationShareLinkMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  permission: OrgPermissionLevel;
}>;


export type GenerateOrganizationShareLinkMutation = { __typename?: 'Mutation', generateOrganizationShareLink: string };

export type JoinOrganizationWithShareLinkMutationVariables = Exact<{
  shareLink: Scalars['ID'];
}>;


export type JoinOrganizationWithShareLinkMutation = { __typename?: 'Mutation', joinOrganizationWithShareLink?: any | null };

export type PostProjectRemoveMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
}>;


export type PostProjectRemoveMutation = { __typename?: 'Mutation', postProjectRemove?: any | null };

export type PostProjectReplyMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  postOrPostReplyId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type PostProjectReplyMutation = { __typename?: 'Mutation', postProjectReply?: any | null };

export type PostProjectSetReactionMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  postId: Scalars['ID'];
  reactionType: PostReactionType;
}>;


export type PostProjectSetReactionMutation = { __typename?: 'Mutation', postProjectSetReaction?: any | null };

export type SetPreferredOrgIdMutationVariables = Exact<{
  orgId: Scalars['ID'];
}>;


export type SetPreferredOrgIdMutation = { __typename?: 'Mutation', setPreferredOrgId?: any | null };

export type FindMyAccountPersonalInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountPersonalInformationQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', firstName?: string | null, id: string, lastName?: string | null, middleName?: string | null } };

export type FindMyAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', currentAvatar?: string | null, emailAddress: string, firstName?: string | null, id: string, lastName?: string | null, middleName?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', about?: string | null, jobTitle: string, id: string, userId: string }> } };

export type FindMyAccountUseFindMyProfessionalsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountUseFindMyProfessionalsQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', id: string, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string, userId: string }> } };

export type OrganizationMembershipsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationMembershipsQuery = { __typename?: 'Query', organizationMemberships: Array<{ __typename?: 'PrivateOrganizationView', id: string, name?: string | null }> };

export type FindMyProfessionalByIdQueryVariables = Exact<{
  professionalId: Scalars['ID'];
}>;


export type FindMyProfessionalByIdQuery = { __typename?: 'Query', findProfessionalById: { __typename?: 'ProfessionalView', id: string, about?: string | null, jobTitle: string, account: { __typename?: 'AccountPublicUnlinkedView', currentAvatar?: string | null, firstName?: string | null, id: string, lastName?: string | null } } };

export type FindMyProfessionalsProfileNameQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyProfessionalsProfileNameQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', id: string, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string, userId: string }> } };

export type OrganizationSeekMembersQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type OrganizationSeekMembersQuery = { __typename?: 'Query', organizationSeekMembers: Array<{ __typename?: 'AccountMemberView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, permissionInOrg: OrgPermissionLevel }> };

export type OrganizationShareLinksQueryVariables = Exact<{
  organizationId: Scalars['ID'];
}>;


export type OrganizationShareLinksQuery = { __typename?: 'Query', organizationShareLinks: Array<{ __typename?: 'OrganizationShareLink', id: string, shareLink: string, permission: OrgPermissionLevel }> };

export type PostProjectAccountSeekQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  projectId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type PostProjectAccountSeekQuery = { __typename?: 'Query', postProjectAccountSeek: Array<{ __typename?: 'AccountPrivateView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string }> }> };

export type PostProjectGetByIdQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type PostProjectGetByIdQuery = { __typename?: 'Query', postProjectGetById?: { __typename?: 'ProjectPost', id: string, body: string, accountId: string, date: any, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string }> } } | null };

export type PostProjectRepliesQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  parentPostId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type PostProjectRepliesQuery = { __typename?: 'Query', postProjectReplies: Array<{ __typename?: 'ProjectPost', id: string, body: string, date: any, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, nestedRepliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string }> }, initialReplies: Array<{ __typename?: 'ProjectPost', id: string, body: string, date: any, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, nestedRepliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string }> } }> }> };

export type PostProjectSeekQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  projectId?: InputMaybe<Scalars['ID']>;
  seekKey?: InputMaybe<Scalars['ID']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type PostProjectSeekQuery = { __typename?: 'Query', postProjectSeek: Array<{ __typename?: 'ProjectPost', id: string, body: string, accountId: string, date: any, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, professionals: Array<{ __typename?: 'ProfessionalUnlinkedView', id: string, jobTitle: string }> } }> };

export type ProjectByIdQueryVariables = Exact<{
  projectId: Scalars['ID'];
  organizationId: Scalars['ID'];
}>;


export type ProjectByIdQuery = { __typename?: 'Query', projectById: { __typename?: 'Project', id: string, name: string, totalPostCount: number } };

export type ProjectsInOrgSeekQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  seekKey?: InputMaybe<Scalars['ID']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type ProjectsInOrgSeekQuery = { __typename?: 'Query', projectsInOrgSeek: Array<{ __typename?: 'Project', id: string, name: string, totalRootPostCount: number, totalResponseCount: number }> };

export type TermsAcceptedQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsAcceptedQuery = { __typename?: 'Query', termsAccepted: boolean };


export const GoogleSsoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"googleSSO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSSO"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"preferredOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<GoogleSsoMutation, GoogleSsoMutationVariables>;
export const RefreshLogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshLogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshLogIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"preferredOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<RefreshLogInMutation, RefreshLogInMutationVariables>;
export const OrganizationRemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"organizationRemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationRemoveUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<OrganizationRemoveUserMutation, OrganizationRemoveUserMutationVariables>;
export const OrganizationSetUserPermissionLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"organizationSetUserPermissionLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissionLevel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationSetUserPermissionLevel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permissionLevel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissionLevel"}}}]}]}}]} as unknown as DocumentNode<OrganizationSetUserPermissionLevelMutation, OrganizationSetUserPermissionLevelMutationVariables>;
export const RemoveOrganizationShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeOrganizationShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeOrganizationShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}]}]}}]} as unknown as DocumentNode<RemoveOrganizationShareLinkMutation, RemoveOrganizationShareLinkMutationVariables>;
export const FindMyAccountProfessionalInformationDataWrapperDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccountProfessionalInformationDataWrapper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyAccountProfessionalInformationDataWrapperQuery, FindMyAccountProfessionalInformationDataWrapperQueryVariables>;
export const SetAccountAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAccountAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAccountAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}]}}]} as unknown as DocumentNode<SetAccountAvatarMutation, SetAccountAvatarMutationVariables>;
export const SetAccountEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAccountEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAccountEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}}]}]}}]} as unknown as DocumentNode<SetAccountEmailMutation, SetAccountEmailMutationVariables>;
export const SetJobTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setJobTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"professionalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}}}]}]}}]} as unknown as DocumentNode<SetJobTitleMutation, SetJobTitleMutationVariables>;
export const SetProfessionalAboutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setProfessionalAbout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newAbout"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setProfessionalAbout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"professionalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newAbout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newAbout"}}}]}]}}]} as unknown as DocumentNode<SetProfessionalAboutMutation, SetProfessionalAboutMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"middleName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}}}]}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const PostUploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postUploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postUploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}]}}]} as unknown as DocumentNode<PostUploadImageMutation, PostUploadImageMutationVariables>;
export const RegisterOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>;
export const PostProjectCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImagePath"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageUrls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}}}]}]}}]} as unknown as DocumentNode<PostProjectCreateMutation, PostProjectCreateMutationVariables>;
export const PostProjectUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<PostProjectUpdateMutation, PostProjectUpdateMutationVariables>;
export const ProjectStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}]}}]} as unknown as DocumentNode<ProjectStartMutation, ProjectStartMutationVariables>;
export const AcceptTermsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptTerms"}}]}}]} as unknown as DocumentNode<AcceptTermsMutation, AcceptTermsMutationVariables>;
export const GenerateOrganizationShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateOrganizationShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateOrganizationShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}]}]}}]} as unknown as DocumentNode<GenerateOrganizationShareLinkMutation, GenerateOrganizationShareLinkMutationVariables>;
export const JoinOrganizationWithShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinOrganizationWithShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shareLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinOrganizationWithShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shareLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shareLink"}}}]}]}}]} as unknown as DocumentNode<JoinOrganizationWithShareLinkMutation, JoinOrganizationWithShareLinkMutationVariables>;
export const PostProjectRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<PostProjectRemoveMutation, PostProjectRemoveMutationVariables>;
export const PostProjectReplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectReply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postOrPostReplyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectReply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postOrPostReplyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postOrPostReplyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<PostProjectReplyMutation, PostProjectReplyMutationVariables>;
export const PostProjectSetReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectSetReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostReactionType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectSetReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reactionType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reactionType"}}}]}]}}]} as unknown as DocumentNode<PostProjectSetReactionMutation, PostProjectSetReactionMutationVariables>;
export const SetPreferredOrgIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setPreferredOrgId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPreferredOrgId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}]}]}}]} as unknown as DocumentNode<SetPreferredOrgIdMutation, SetPreferredOrgIdMutationVariables>;
export const FindMyAccountPersonalInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccountPersonalInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}}]}}]} as unknown as DocumentNode<FindMyAccountPersonalInformationQuery, FindMyAccountPersonalInformationQueryVariables>;
export const FindMyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyAccountQuery, FindMyAccountQueryVariables>;
export const FindMyAccountUseFindMyProfessionalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccountUseFindMyProfessionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyAccountUseFindMyProfessionalsQuery, FindMyAccountUseFindMyProfessionalsQueryVariables>;
export const OrganizationMembershipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<OrganizationMembershipsQuery, OrganizationMembershipsQueryVariables>;
export const FindMyProfessionalByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyProfessionalById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProfessionalById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professionalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}}]} as unknown as DocumentNode<FindMyProfessionalByIdQuery, FindMyProfessionalByIdQueryVariables>;
export const FindMyProfessionalsProfileNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyProfessionalsProfileName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyProfessionalsProfileNameQuery, FindMyProfessionalsProfileNameQueryVariables>;
export const OrganizationSeekMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationSeekMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationSeekMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"permissionInOrg"}}]}}]}}]} as unknown as DocumentNode<OrganizationSeekMembersQuery, OrganizationSeekMembersQueryVariables>;
export const OrganizationShareLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationShareLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationShareLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shareLink"}},{"kind":"Field","name":{"kind":"Name","value":"permission"}}]}}]}}]} as unknown as DocumentNode<OrganizationShareLinksQuery, OrganizationShareLinksQueryVariables>;
export const PostProjectAccountSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectAccountSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectAccountSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}}]}}]} as unknown as DocumentNode<PostProjectAccountSeekQuery, PostProjectAccountSeekQueryVariables>;
export const PostProjectGetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectGetById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectGetById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<PostProjectGetByIdQuery, PostProjectGetByIdQueryVariables>;
export const PostProjectRepliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectReplies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectReplies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentPostId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentPostId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"initialReplies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"nestedRepliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"nestedRepliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<PostProjectRepliesQuery, PostProjectRepliesQueryVariables>;
export const PostProjectSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"professionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<PostProjectSeekQuery, PostProjectSeekQueryVariables>;
export const ProjectByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalPostCount"}}]}}]}}]} as unknown as DocumentNode<ProjectByIdQuery, ProjectByIdQueryVariables>;
export const ProjectsInOrgSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectsInOrgSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsInOrgSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalRootPostCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalResponseCount"}}]}}]}}]} as unknown as DocumentNode<ProjectsInOrgSeekQuery, ProjectsInOrgSeekQueryVariables>;
export const TermsAcceptedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"termsAccepted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"termsAccepted"}}]}}]} as unknown as DocumentNode<TermsAcceptedQuery, TermsAcceptedQueryVariables>;