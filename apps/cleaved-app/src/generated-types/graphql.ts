/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccessToken: { input: any; output: any; }
  Date: { input: any; output: any; }
  GraphQLInt: { input: any; output: any; }
  ISODateTime: { input: any; output: any; }
  ImagePath: { input: any; output: any; }
  ProjectProgress: { input: any; output: any; }
  URL: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AccountMemberView = {
  __typename?: 'AccountMemberView';
  about?: Maybe<Scalars['String']['output']>;
  currentAvatar?: Maybe<Scalars['String']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  goals?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  permissionInOrg: OrgPermissionLevel;
  preferredName?: Maybe<Scalars['String']['output']>;
  socialMedia: SocialMediaLinks;
};

export type AccountPrivateView = {
  __typename?: 'AccountPrivateView';
  about?: Maybe<Scalars['String']['output']>;
  currentAvatar?: Maybe<Scalars['String']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  goals?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  preferredName?: Maybe<Scalars['String']['output']>;
  socialMedia: SocialMediaLinks;
};

export type AccountPublicView = {
  __typename?: 'AccountPublicView';
  about?: Maybe<Scalars['String']['output']>;
  currentAvatar?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  preferredName?: Maybe<Scalars['String']['output']>;
};

export enum BillingTier {
  Free = 'FREE',
  Growth = 'GROWTH',
  Professional = 'PROFESSIONAL'
}

export type LogInResultView = {
  __typename?: 'LogInResultView';
  authorizationToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  preferredOrgId?: Maybe<Scalars['ID']['output']>;
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type LogInResultWithJoinOrgView = {
  __typename?: 'LogInResultWithJoinOrgView';
  authorizationToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  joinedOrg: Scalars['ID']['output'];
  preferredOrgId?: Maybe<Scalars['ID']['output']>;
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptTerms: Scalars['AccessToken']['output'];
  generateOrganizationShareLink: Scalars['ID']['output'];
  googleSSO: LogInResultView;
  googleSSOWithShareLink: LogInResultWithJoinOrgView;
  markAllNotificationsAsViewed?: Maybe<Scalars['Void']['output']>;
  organizationRemoveMe?: Maybe<Scalars['Void']['output']>;
  organizationRemoveUser?: Maybe<Scalars['Void']['output']>;
  organizationSetUserPermissionLevel?: Maybe<Scalars['Void']['output']>;
  postProjectCreate?: Maybe<Scalars['Void']['output']>;
  postProjectPin?: Maybe<Scalars['Void']['output']>;
  postProjectPinRemove?: Maybe<Scalars['Void']['output']>;
  postProjectRemove?: Maybe<Scalars['Void']['output']>;
  postProjectReply?: Maybe<Scalars['Void']['output']>;
  postProjectSetReaction?: Maybe<Scalars['Void']['output']>;
  postProjectUpdate?: Maybe<Scalars['Void']['output']>;
  postUploadImage: Scalars['ImagePath']['output'];
  projectCreate?: Maybe<Scalars['Void']['output']>;
  projectSetStatus?: Maybe<Scalars['Void']['output']>;
  projectUpdate?: Maybe<Scalars['Void']['output']>;
  refreshLogIn: LogInResultView;
  /** Basic registration for a new organization. This will get more interesting itterations in the future. */
  registerOrganization: Scalars['AccessToken']['output'];
  removeOrganizationShareLink?: Maybe<Scalars['Void']['output']>;
  setAccountAvatar?: Maybe<Scalars['Void']['output']>;
  setAccountEmail?: Maybe<Scalars['Void']['output']>;
  setAccountSocialMediaLinks?: Maybe<Scalars['Void']['output']>;
  setMyAbout?: Maybe<Scalars['Void']['output']>;
  setMyGoals?: Maybe<Scalars['Void']['output']>;
  setMyJobTitle?: Maybe<Scalars['Void']['output']>;
  setPreferredOrgId?: Maybe<Scalars['Void']['output']>;
  updateAccount?: Maybe<Scalars['Void']['output']>;
};


export type MutationGenerateOrganizationShareLinkArgs = {
  organizationId: Scalars['ID']['input'];
  permission: OrgPermissionLevel;
};


export type MutationGoogleSsoArgs = {
  scopeRequests?: InputMaybe<Array<Scope>>;
  token: Scalars['String']['input'];
};


export type MutationGoogleSsoWithShareLinkArgs = {
  scopeRequests?: InputMaybe<Array<Scope>>;
  shareLink: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationMarkAllNotificationsAsViewedArgs = {
  source?: InputMaybe<RequestSource>;
};


export type MutationOrganizationRemoveMeArgs = {
  organizationId: Scalars['ID']['input'];
};


export type MutationOrganizationRemoveUserArgs = {
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationOrganizationSetUserPermissionLevelArgs = {
  organizationId: Scalars['ID']['input'];
  permissionLevel: OrgPermissionLevel;
  userId: Scalars['ID']['input'];
};


export type MutationPostProjectCreateArgs = {
  body: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']['input']>>;
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
};


export type MutationPostProjectPinArgs = {
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationPostProjectPinRemoveArgs = {
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationPostProjectRemoveArgs = {
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationPostProjectReplyArgs = {
  body: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  postOrPostReplyId: Scalars['ID']['input'];
};


export type MutationPostProjectSetReactionArgs = {
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  reactionType: PostReactionType;
};


export type MutationPostProjectUpdateArgs = {
  body: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']['input']>>;
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationPostUploadImageArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationProjectCreateArgs = {
  organizationId: Scalars['ID']['input'];
  projectDetail?: InputMaybe<Scalars['String']['input']>;
  projectEndDate?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  projectName: Scalars['String']['input'];
  projectProgress?: InputMaybe<Scalars['ProjectProgress']['input']>;
  projectStartDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProjectSetStatusArgs = {
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  status?: InputMaybe<ProjectStatus>;
};


export type MutationProjectUpdateArgs = {
  organizationId: Scalars['ID']['input'];
  projectDetail?: InputMaybe<Scalars['String']['input']>;
  projectEndDate?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  projectName: Scalars['String']['input'];
  projectProgress?: InputMaybe<Scalars['ProjectProgress']['input']>;
  projectStartDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshLogInArgs = {
  refreshToken: Scalars['String']['input'];
  scopeRequests?: InputMaybe<Array<Scope>>;
};


export type MutationRegisterOrganizationArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type MutationRemoveOrganizationShareLinkArgs = {
  organizationId: Scalars['ID']['input'];
  permission: OrgPermissionLevel;
};


export type MutationSetAccountAvatarArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationSetAccountEmailArgs = {
  newEmail: Scalars['String']['input'];
};


export type MutationSetAccountSocialMediaLinksArgs = {
  socialLinks: Array<SocialMediaSetInput>;
};


export type MutationSetMyAboutArgs = {
  about: Scalars['String']['input'];
};


export type MutationSetMyGoalsArgs = {
  goals: Scalars['String']['input'];
};


export type MutationSetMyJobTitleArgs = {
  jobTitle: Scalars['String']['input'];
};


export type MutationSetPreferredOrgIdArgs = {
  orgId: Scalars['ID']['input'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  preferredName?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationPagedResponse = {
  __typename?: 'NotificationPagedResponse';
  id: Scalars['ID']['output'];
  notifications: Array<NotificationView>;
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  totalNotifications: Scalars['Int']['output'];
  totalUnacknowledgedNotifications: Scalars['Int']['output'];
};

export enum NotificationTypes {
  Feedback = 'FEEDBACK',
  FeedbackRevisionRequest = 'FEEDBACK_REVISION_REQUEST',
  FeedbackUpdated = 'FEEDBACK_UPDATED',
  Unknown = 'UNKNOWN'
}

export type NotificationView = {
  __typename?: 'NotificationView';
  acknowledged: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  longDescription: Scalars['String']['output'];
  resourceId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<NotificationTypes>;
};

export enum OrgPermissionLevel {
  Admin = 'ADMIN',
  Updater = 'UPDATER',
  Viewer = 'VIEWER'
}

export type OrganizationShareLink = {
  __typename?: 'OrganizationShareLink';
  id: Scalars['ID']['output'];
  organizationId: Scalars['ID']['output'];
  permission: OrgPermissionLevel;
  shareLink: Scalars['ID']['output'];
};

export type PostCustomContent = {
  __typename?: 'PostCustomContent';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type: PostCustomContentType;
};

export enum PostCustomContentType {
  Footer = 'FOOTER',
  Header = 'HEADER'
}

export type PostReactionAggregateType = {
  __typename?: 'PostReactionAggregateType';
  count: Scalars['GraphQLInt']['output'];
  id: Scalars['ID']['output'];
  type: PostReactionType;
};

export enum PostReactionType {
  Celebrate = 'CELEBRATE',
  Like = 'LIKE',
  Love = 'LOVE',
  NoReaction = 'NO_REACTION'
}

export type PrivateOrganizationView = {
  __typename?: 'PrivateOrganizationView';
  activeProjectCount: Scalars['Int']['output'];
  billingTier: BillingTier;
  id: Scalars['ID']['output'];
  memberCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  projectCount: Scalars['Int']['output'];
  userPermissionInOrg?: Maybe<OrgPermissionLevel>;
};

export type Project = {
  __typename?: 'Project';
  /** Project creation date */
  createdAt: Scalars['ISODateTime']['output'];
  id: Scalars['ID']['output'];
  /** Name of the project */
  name: Scalars['String']['output'];
  /** ID of organization governing project */
  organizationId: Scalars['ID']['output'];
  /** Project date */
  projectDates: StartEndDates;
  /** Project description and details */
  projectDetails?: Maybe<Scalars['String']['output']>;
  /** Current project progress */
  projectProgress: Scalars['ProjectProgress']['output'];
  /** Current project status */
  status: ProjectStatus;
  /** Total posts and responses on project */
  totalPostCount: Scalars['Int']['output'];
  /** Total responses excluding root posts on project */
  totalResponseCount: Scalars['Int']['output'];
  /** Total posts excluding responses on project */
  totalRootPostCount: Scalars['Int']['output'];
};

export type ProjectPost = {
  __typename?: 'ProjectPost';
  account: AccountPublicView;
  accountId: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  customContent: Array<PostCustomContent>;
  date: Scalars['ISODateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['ImagePath']['output']>;
  /** Retrieves first few most-recent comments on this post. To load more replies, use query repliesToPost */
  initialReplies: Array<ProjectPost>;
  isPinned: Scalars['Boolean']['output'];
  myReaction: PostReactionType;
  /** Count of all direct and indirect replies to this post counting nested replies */
  nestedRepliesCount: Scalars['String']['output'];
  project: Project;
  /** Total of all reactions to this post */
  reactionTotalCount: Scalars['String']['output'];
  reactions: Array<PostReactionAggregateType>;
  /** Reaction types expressed by all users to this post */
  reactionsExpressed: Array<PostReactionType>;
  /** @deprecated use initialReplies */
  replies: Array<ProjectPost>;
  /** Count of direct replies to this post not counting replies of replies */
  repliesCount: Scalars['String']['output'];
};

export enum ProjectStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Inactive = 'INACTIVE'
}

export type Query = {
  __typename?: 'Query';
  findMyAccount: AccountPrivateView;
  getNotifications: NotificationPagedResponse;
  organizationGetMember?: Maybe<AccountMemberView>;
  organizationGetMembership: PrivateOrganizationView;
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
  projectsInOrgSeek: Array<Project>;
  termsAccepted: Scalars['Boolean']['output'];
};


export type QueryGetNotificationsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrganizationGetMemberArgs = {
  memberId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryOrganizationGetMembershipArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryOrganizationSeekMembersArgs = {
  organizationId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  seekKey?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrganizationShareLinksArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryPostProjectAccountSeekArgs = {
  organizationId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostProjectGetByIdArgs = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryPostProjectRepliesArgs = {
  organizationId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  parentPostId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostProjectSeekArgs = {
  organizationId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  pinnedFirst?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  seekKey?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectByIdArgs = {
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
};


export type QueryProjectsInOrgSeekArgs = {
  organizationId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  statusFilter?: InputMaybe<Array<ProjectStatus>>;
};

export enum RequestSource {
  Web = 'WEB'
}

export enum Social_Media_Type {
  Linkedin = 'LINKEDIN',
  Twitter = 'TWITTER'
}

export enum Scope {
  Organization = 'ORGANIZATION',
  Project = 'PROJECT'
}

export type SocialMediaLinks = {
  __typename?: 'SocialMediaLinks';
  linkedin?: Maybe<Scalars['URL']['output']>;
  twitter?: Maybe<Scalars['URL']['output']>;
};

export type SocialMediaSetInput = {
  link?: InputMaybe<Scalars['URL']['input']>;
  media?: InputMaybe<Social_Media_Type>;
};

export type StartEndDates = {
  __typename?: 'StartEndDates';
  endDate?: Maybe<Scalars['Date']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
};

export type GoogleSsoMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GoogleSsoMutation = { __typename?: 'Mutation', googleSSO: { __typename?: 'LogInResultView', authorizationToken: string, preferredOrgId?: string | null, refreshToken: string, tokenType: string } };

export type GoogleSsoWithShareLinkMutationVariables = Exact<{
  token: Scalars['String']['input'];
  shareLink: Scalars['ID']['input'];
}>;


export type GoogleSsoWithShareLinkMutation = { __typename?: 'Mutation', googleSSOWithShareLink: { __typename?: 'LogInResultWithJoinOrgView', authorizationToken: string, joinedOrg: string, preferredOrgId?: string | null, refreshToken: string, tokenType: string } };

export type RefreshLogInMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshLogInMutation = { __typename?: 'Mutation', refreshLogIn: { __typename?: 'LogInResultView', authorizationToken: string, preferredOrgId?: string | null, refreshToken: string, tokenType: string } };

export type OrganizationRemoveUserMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type OrganizationRemoveUserMutation = { __typename?: 'Mutation', organizationRemoveUser?: any | null };

export type OrganizationSetUserPermissionLevelMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  permissionLevel: OrgPermissionLevel;
}>;


export type OrganizationSetUserPermissionLevelMutation = { __typename?: 'Mutation', organizationSetUserPermissionLevel?: any | null };

export type PostProjectPinMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type PostProjectPinMutation = { __typename?: 'Mutation', postProjectPin?: any | null };

export type PostProjectPinRemoveMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type PostProjectPinRemoveMutation = { __typename?: 'Mutation', postProjectPinRemove?: any | null };

export type RemoveOrganizationShareLinkMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  permission: OrgPermissionLevel;
}>;


export type RemoveOrganizationShareLinkMutation = { __typename?: 'Mutation', removeOrganizationShareLink?: any | null };

export type OrganizationGetMemberQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  memberId: Scalars['ID']['input'];
}>;


export type OrganizationGetMemberQuery = { __typename?: 'Query', organizationGetMember?: { __typename?: 'AccountMemberView', about?: string | null, emailAddress: string, id: string, firstName?: string | null, goals?: string | null, lastName?: string | null, currentAvatar?: string | null, jobTitle?: string | null, socialMedia: { __typename?: 'SocialMediaLinks', twitter?: any | null, linkedin?: any | null } } | null };

export type SetAccountAvatarMutationVariables = Exact<{
  image: Scalars['Upload']['input'];
}>;


export type SetAccountAvatarMutation = { __typename?: 'Mutation', setAccountAvatar?: any | null };

export type SetAccountEmailMutationVariables = Exact<{
  newEmail: Scalars['String']['input'];
}>;


export type SetAccountEmailMutation = { __typename?: 'Mutation', setAccountEmail?: any | null };

export type SetMyGoalsMutationVariables = Exact<{
  goals: Scalars['String']['input'];
}>;


export type SetMyGoalsMutation = { __typename?: 'Mutation', setMyGoals?: any | null };

export type SetAccountSocialMediaLinksMutationVariables = Exact<{
  socialLinks: Array<SocialMediaSetInput> | SocialMediaSetInput;
}>;


export type SetAccountSocialMediaLinksMutation = { __typename?: 'Mutation', setAccountSocialMediaLinks?: any | null };

export type SetJobTitleMutationVariables = Exact<{
  jobTitle: Scalars['String']['input'];
}>;


export type SetJobTitleMutation = { __typename?: 'Mutation', setMyJobTitle?: any | null };

export type SetMyAboutMutationVariables = Exact<{
  about: Scalars['String']['input'];
}>;


export type SetMyAboutMutation = { __typename?: 'Mutation', setMyAbout?: any | null };

export type UpdateAccountMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount?: any | null };

export type PostUploadImageMutationVariables = Exact<{
  image: Scalars['Upload']['input'];
}>;


export type PostUploadImageMutation = { __typename?: 'Mutation', postUploadImage: any };

export type RegisterOrganizationMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterOrganizationMutation = { __typename?: 'Mutation', registerOrganization: any };

export type ProjectCreateMutationVariables = Exact<{
  projectName: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  projectId?: InputMaybe<Scalars['ID']['input']>;
  projectDetail?: InputMaybe<Scalars['String']['input']>;
  projectProgress?: InputMaybe<Scalars['ProjectProgress']['input']>;
  projectStartDate?: InputMaybe<Scalars['String']['input']>;
  projectEndDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProjectCreateMutation = { __typename?: 'Mutation', projectCreate?: any | null };

export type ProjectUpdateMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  projectDetail?: InputMaybe<Scalars['String']['input']>;
  projectName: Scalars['String']['input'];
  projectProgress?: InputMaybe<Scalars['ProjectProgress']['input']>;
  projectStartDate?: InputMaybe<Scalars['String']['input']>;
  projectEndDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProjectUpdateMutation = { __typename?: 'Mutation', projectUpdate?: any | null };

export type PostProjectCreateMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']['input']> | Scalars['ImagePath']['input']>;
}>;


export type PostProjectCreateMutation = { __typename?: 'Mutation', postProjectCreate?: any | null };

export type PostProjectUpdateMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['ImagePath']['input']> | Scalars['ImagePath']['input']>;
}>;


export type PostProjectUpdateMutation = { __typename?: 'Mutation', postProjectUpdate?: any | null };

export type AcceptTermsMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptTermsMutation = { __typename?: 'Mutation', acceptTerms: any };

export type GenerateOrganizationShareLinkMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  permission: OrgPermissionLevel;
}>;


export type GenerateOrganizationShareLinkMutation = { __typename?: 'Mutation', generateOrganizationShareLink: string };

export type OrganizationRemoveMeMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type OrganizationRemoveMeMutation = { __typename?: 'Mutation', organizationRemoveMe?: any | null };

export type PostProjectRemoveMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type PostProjectRemoveMutation = { __typename?: 'Mutation', postProjectRemove?: any | null };

export type PostProjectReplyMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postOrPostReplyId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;


export type PostProjectReplyMutation = { __typename?: 'Mutation', postProjectReply?: any | null };

export type PostProjectSetReactionMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  reactionType: PostReactionType;
}>;


export type PostProjectSetReactionMutation = { __typename?: 'Mutation', postProjectSetReaction?: any | null };

export type ProjectSetStatusMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
  status: ProjectStatus;
}>;


export type ProjectSetStatusMutation = { __typename?: 'Mutation', projectSetStatus?: any | null };

export type SetPreferredOrgIdMutationVariables = Exact<{
  orgId: Scalars['ID']['input'];
}>;


export type SetPreferredOrgIdMutation = { __typename?: 'Mutation', setPreferredOrgId?: any | null };

export type FindMyAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', about?: string | null, currentAvatar?: string | null, emailAddress: string, firstName?: string | null, goals?: string | null, id: string, jobTitle?: string | null, lastName?: string | null, socialMedia: { __typename?: 'SocialMediaLinks', twitter?: any | null, linkedin?: any | null } } };

export type OrganizationGetMembershipQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type OrganizationGetMembershipQuery = { __typename?: 'Query', organizationGetMembership: { __typename?: 'PrivateOrganizationView', id: string, name?: string | null, userPermissionInOrg?: OrgPermissionLevel | null } };

export type OrganizationMembershipPermissionBillingCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationMembershipPermissionBillingCountsQuery = { __typename?: 'Query', organizationMemberships: Array<{ __typename?: 'PrivateOrganizationView', id: string, userPermissionInOrg?: OrgPermissionLevel | null, memberCount: number, projectCount: number, billingTier: BillingTier }> };

export type OrganizationMembershipsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationMembershipsQuery = { __typename?: 'Query', organizationMemberships: Array<{ __typename?: 'PrivateOrganizationView', id: string, name?: string | null, userPermissionInOrg?: OrgPermissionLevel | null }> };

export type OrganizationSeekMembersQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrganizationSeekMembersQuery = { __typename?: 'Query', organizationSeekMembers: Array<{ __typename?: 'AccountMemberView', id: string, emailAddress: string, firstName?: string | null, lastName?: string | null, currentAvatar?: string | null, jobTitle?: string | null, permissionInOrg: OrgPermissionLevel }> };

export type OrganizationShareLinksQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type OrganizationShareLinksQuery = { __typename?: 'Query', organizationShareLinks: Array<{ __typename?: 'OrganizationShareLink', id: string, shareLink: string, permission: OrgPermissionLevel }> };

export type PostProjectAccountSeekQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostProjectAccountSeekQuery = { __typename?: 'Query', postProjectAccountSeek: Array<{ __typename?: 'AccountPrivateView', id: string, currentAvatar?: string | null, firstName?: string | null, jobTitle?: string | null, lastName?: string | null }> };

export type PostProjectGetByIdQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type PostProjectGetByIdQuery = { __typename?: 'Query', postProjectGetById?: { __typename?: 'ProjectPost', id: string, body: string, accountId: string, date: any, images: Array<any>, account: { __typename?: 'AccountPublicView', currentAvatar?: string | null, firstName?: string | null, id: string, jobTitle?: string | null, lastName?: string | null } } | null };

export type PostProjectRepliesQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  parentPostId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostProjectRepliesQuery = { __typename?: 'Query', postProjectReplies: Array<{ __typename?: 'ProjectPost', id: string, body: string, date: any, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, nestedRepliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, jobTitle?: string | null, currentAvatar?: string | null }, initialReplies: Array<{ __typename?: 'ProjectPost', id: string, body: string, date: any, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, nestedRepliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, jobTitle?: string | null, currentAvatar?: string | null } }> }> };

export type PostProjectSeekQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  projectId?: InputMaybe<Scalars['ID']['input']>;
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  pinnedFirst?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PostProjectSeekQuery = { __typename?: 'Query', postProjectSeek: Array<{ __typename?: 'ProjectPost', id: string, body: string, accountId: string, date: any, isPinned: boolean, reactionTotalCount: string, reactionsExpressed: Array<PostReactionType>, myReaction: PostReactionType, repliesCount: string, images: Array<any>, account: { __typename?: 'AccountPublicView', id: string, firstName?: string | null, lastName?: string | null, jobTitle?: string | null, currentAvatar?: string | null }, project: { __typename?: 'Project', id: string, name: string } }> };

export type ProjectByIdQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
}>;


export type ProjectByIdQuery = { __typename?: 'Query', projectById: { __typename?: 'Project', id: string, name: string, projectProgress: any, projectDetails?: string | null, totalRootPostCount: number, totalResponseCount: number, projectDates: { __typename?: 'StartEndDates', startDate?: any | null, endDate?: any | null } } };

export type ProjectsInOrgSeekQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  seekKey?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  statusFilter?: InputMaybe<Array<ProjectStatus> | ProjectStatus>;
}>;


export type ProjectsInOrgSeekQuery = { __typename?: 'Query', projectsInOrgSeek: Array<{ __typename?: 'Project', createdAt: any, id: string, name: string, projectProgress: any, status: ProjectStatus, totalResponseCount: number, totalRootPostCount: number, projectDates: { __typename?: 'StartEndDates', startDate?: any | null, endDate?: any | null } }> };


export const GoogleSsoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"googleSSO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSSO"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"preferredOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<GoogleSsoMutation, GoogleSsoMutationVariables>;
export const GoogleSsoWithShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"googleSSOWithShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shareLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSSOWithShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"shareLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shareLink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"joinedOrg"}},{"kind":"Field","name":{"kind":"Name","value":"preferredOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<GoogleSsoWithShareLinkMutation, GoogleSsoWithShareLinkMutationVariables>;
export const RefreshLogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshLogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshLogIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"preferredOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<RefreshLogInMutation, RefreshLogInMutationVariables>;
export const OrganizationRemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"organizationRemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationRemoveUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<OrganizationRemoveUserMutation, OrganizationRemoveUserMutationVariables>;
export const OrganizationSetUserPermissionLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"organizationSetUserPermissionLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissionLevel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationSetUserPermissionLevel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permissionLevel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissionLevel"}}}]}]}}]} as unknown as DocumentNode<OrganizationSetUserPermissionLevelMutation, OrganizationSetUserPermissionLevelMutationVariables>;
export const PostProjectPinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectPin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectPin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<PostProjectPinMutation, PostProjectPinMutationVariables>;
export const PostProjectPinRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectPinRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectPinRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<PostProjectPinRemoveMutation, PostProjectPinRemoveMutationVariables>;
export const RemoveOrganizationShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeOrganizationShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeOrganizationShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}]}]}}]} as unknown as DocumentNode<RemoveOrganizationShareLinkMutation, RemoveOrganizationShareLinkMutationVariables>;
export const OrganizationGetMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationGetMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationGetMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"goals"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationGetMemberQuery, OrganizationGetMemberQueryVariables>;
export const SetAccountAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAccountAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAccountAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}]}}]} as unknown as DocumentNode<SetAccountAvatarMutation, SetAccountAvatarMutationVariables>;
export const SetAccountEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAccountEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAccountEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}}]}]}}]} as unknown as DocumentNode<SetAccountEmailMutation, SetAccountEmailMutationVariables>;
export const SetMyGoalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setMyGoals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"goals"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyGoals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"goals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"goals"}}}]}]}}]} as unknown as DocumentNode<SetMyGoalsMutation, SetMyGoalsMutationVariables>;
export const SetAccountSocialMediaLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAccountSocialMediaLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"socialLinks"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialMediaSetInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAccountSocialMediaLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"socialLinks"},"value":{"kind":"Variable","name":{"kind":"Name","value":"socialLinks"}}}]}]}}]} as unknown as DocumentNode<SetAccountSocialMediaLinksMutation, SetAccountSocialMediaLinksMutationVariables>;
export const SetJobTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setJobTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyJobTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobTitle"}}}]}]}}]} as unknown as DocumentNode<SetJobTitleMutation, SetJobTitleMutationVariables>;
export const SetMyAboutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setMyAbout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"about"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyAbout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"about"},"value":{"kind":"Variable","name":{"kind":"Name","value":"about"}}}]}]}}]} as unknown as DocumentNode<SetMyAboutMutation, SetMyAboutMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"middleName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}}}]}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const PostUploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postUploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postUploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}]}}]} as unknown as DocumentNode<PostUploadImageMutation, PostUploadImageMutationVariables>;
export const RegisterOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>;
export const ProjectCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectDetail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectProgress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectProgress"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectDetail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectDetail"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectProgress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectProgress"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectEndDate"}}}]}]}}]} as unknown as DocumentNode<ProjectCreateMutation, ProjectCreateMutationVariables>;
export const ProjectUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectDetail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectProgress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectProgress"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectDetail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectDetail"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectProgress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectProgress"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectEndDate"}}}]}]}}]} as unknown as DocumentNode<ProjectUpdateMutation, ProjectUpdateMutationVariables>;
export const PostProjectCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImagePath"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageUrls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}}}]}]}}]} as unknown as DocumentNode<PostProjectCreateMutation, PostProjectCreateMutationVariables>;
export const PostProjectUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImagePath"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageUrls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrls"}}}]}]}}]} as unknown as DocumentNode<PostProjectUpdateMutation, PostProjectUpdateMutationVariables>;
export const AcceptTermsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptTerms"}}]}}]} as unknown as DocumentNode<AcceptTermsMutation, AcceptTermsMutationVariables>;
export const GenerateOrganizationShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateOrganizationShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrgPermissionLevel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateOrganizationShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}]}]}}]} as unknown as DocumentNode<GenerateOrganizationShareLinkMutation, GenerateOrganizationShareLinkMutationVariables>;
export const OrganizationRemoveMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"organizationRemoveMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationRemoveMe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}]}}]} as unknown as DocumentNode<OrganizationRemoveMeMutation, OrganizationRemoveMeMutationVariables>;
export const PostProjectRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<PostProjectRemoveMutation, PostProjectRemoveMutationVariables>;
export const PostProjectReplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectReply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postOrPostReplyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectReply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postOrPostReplyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postOrPostReplyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<PostProjectReplyMutation, PostProjectReplyMutationVariables>;
export const PostProjectSetReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postProjectSetReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostReactionType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectSetReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reactionType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reactionType"}}}]}]}}]} as unknown as DocumentNode<PostProjectSetReactionMutation, PostProjectSetReactionMutationVariables>;
export const ProjectSetStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectSetStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectSetStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}]}}]} as unknown as DocumentNode<ProjectSetStatusMutation, ProjectSetStatusMutationVariables>;
export const SetPreferredOrgIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setPreferredOrgId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPreferredOrgId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}]}]}}]} as unknown as DocumentNode<SetPreferredOrgIdMutation, SetPreferredOrgIdMutationVariables>;
export const FindMyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"goals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyAccountQuery, FindMyAccountQueryVariables>;
export const OrganizationGetMembershipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationGetMembership"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationGetMembership"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissionInOrg"}}]}}]}}]} as unknown as DocumentNode<OrganizationGetMembershipQuery, OrganizationGetMembershipQueryVariables>;
export const OrganizationMembershipPermissionBillingCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationMembershipPermissionBillingCounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissionInOrg"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"projectCount"}},{"kind":"Field","name":{"kind":"Name","value":"billingTier"}}]}}]}}]} as unknown as DocumentNode<OrganizationMembershipPermissionBillingCountsQuery, OrganizationMembershipPermissionBillingCountsQueryVariables>;
export const OrganizationMembershipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissionInOrg"}}]}}]}}]} as unknown as DocumentNode<OrganizationMembershipsQuery, OrganizationMembershipsQueryVariables>;
export const OrganizationSeekMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationSeekMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationSeekMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"permissionInOrg"}}]}}]}}]} as unknown as DocumentNode<OrganizationSeekMembersQuery, OrganizationSeekMembersQueryVariables>;
export const OrganizationShareLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationShareLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationShareLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shareLink"}},{"kind":"Field","name":{"kind":"Name","value":"permission"}}]}}]}}]} as unknown as DocumentNode<OrganizationShareLinksQuery, OrganizationShareLinksQueryVariables>;
export const PostProjectAccountSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectAccountSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectAccountSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<PostProjectAccountSeekQuery, PostProjectAccountSeekQueryVariables>;
export const PostProjectGetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectGetById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectGetById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<PostProjectGetByIdQuery, PostProjectGetByIdQueryVariables>;
export const PostProjectRepliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectReplies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectReplies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentPostId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentPostId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"initialReplies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"nestedRepliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"nestedRepliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<PostProjectRepliesQuery, PostProjectRepliesQueryVariables>;
export const PostProjectSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postProjectSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pinnedFirst"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postProjectSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pinnedFirst"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pinnedFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"reactionTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsExpressed"}},{"kind":"Field","name":{"kind":"Name","value":"myReaction"}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PostProjectSeekQuery, PostProjectSeekQueryVariables>;
export const ProjectByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectProgress"}},{"kind":"Field","name":{"kind":"Name","value":"projectDetails"}},{"kind":"Field","name":{"kind":"Name","value":"projectDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRootPostCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalResponseCount"}}]}}]}}]} as unknown as DocumentNode<ProjectByIdQuery, ProjectByIdQueryVariables>;
export const ProjectsInOrgSeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectsInOrgSeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statusFilter"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectStatus"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsInOrgSeek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"seekKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seekKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"statusFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statusFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectProgress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"projectDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalResponseCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalRootPostCount"}}]}}]}}]} as unknown as DocumentNode<ProjectsInOrgSeekQuery, ProjectsInOrgSeekQueryVariables>;