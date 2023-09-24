import { PostProjectRepliesQuery, PostProjectSeekQuery } from "../../../generated-types/graphql";

export type PostOrPostReplyType =
  | PostProjectSeekQuery["postProjectSeek"][0]
  | PostProjectRepliesQuery["postProjectReplies"][0];
