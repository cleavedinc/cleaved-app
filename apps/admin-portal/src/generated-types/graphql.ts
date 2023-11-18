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

export type AdminLogInResultView = {
  __typename?: 'AdminLogInResultView';
  authorizationToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
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
  cleavedAdminRefreshLogin: AdminLogInResultView;
  cleavedAdminSSO: AdminLogInResultView;
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


export type MutationCleavedAdminRefreshLoginArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationCleavedAdminSsoArgs = {
  token: Scalars['String']['input'];
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
  organizationListAdmin: Array<PrivateOrganizationView>;
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


export type QueryOrganizationListAdminArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
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
  media: Social_Media_Type;
};

export type StartEndDates = {
  __typename?: 'StartEndDates';
  endDate?: Maybe<Scalars['Date']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
};

export type CleavedAdminRefreshLoginMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type CleavedAdminRefreshLoginMutation = { __typename?: 'Mutation', cleavedAdminRefreshLogin: { __typename?: 'AdminLogInResultView', id: string, authorizationToken: string, refreshToken: string, tokenType: string } };

export type CleavedAdminSsoMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type CleavedAdminSsoMutation = { __typename?: 'Mutation', cleavedAdminSSO: { __typename?: 'AdminLogInResultView', id: string, authorizationToken: string, refreshToken: string, tokenType: string } };

export type FindMyAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyAccountQuery = { __typename?: 'Query', findMyAccount: { __typename?: 'AccountPrivateView', about?: string | null, currentAvatar?: string | null, emailAddress: string, firstName?: string | null, goals?: string | null, id: string, jobTitle?: string | null, lastName?: string | null, socialMedia: { __typename?: 'SocialMediaLinks', twitter?: any | null, linkedin?: any | null } } };

export type OrganizationListAdminQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrganizationListAdminQuery = { __typename?: 'Query', organizationListAdmin: Array<{ __typename?: 'PrivateOrganizationView', id: string, name?: string | null, userPermissionInOrg?: OrgPermissionLevel | null, memberCount: number, projectCount: number, activeProjectCount: number, billingTier: BillingTier }> };


export const CleavedAdminRefreshLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cleavedAdminRefreshLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cleavedAdminRefreshLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<CleavedAdminRefreshLoginMutation, CleavedAdminRefreshLoginMutationVariables>;
export const CleavedAdminSsoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cleavedAdminSSO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cleavedAdminSSO"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}}]}}]}}]} as unknown as DocumentNode<CleavedAdminSsoMutation, CleavedAdminSsoMutationVariables>;
export const FindMyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"goals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyAccountQuery, FindMyAccountQueryVariables>;
export const OrganizationListAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizationListAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationListAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissionInOrg"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"projectCount"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjectCount"}},{"kind":"Field","name":{"kind":"Name","value":"billingTier"}}]}}]}}]} as unknown as DocumentNode<OrganizationListAdminQuery, OrganizationListAdminQueryVariables>;