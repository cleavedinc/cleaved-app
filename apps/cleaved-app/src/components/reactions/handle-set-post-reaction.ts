import { PostReactionType } from "../../generated-types/graphql";

export const handleSetPostReaction = (
  myReaction: PostReactionType,
  organizationId: string,
  postId: string | null,
  setPostReactionMutation: (arg: any) => void // eslint-disable-line
): void => {
  if (myReaction && myReaction !== PostReactionType.NoReaction) {
    setPostReactionMutation({
      variables: {
        organizationId,
        postId,
        reactionType: PostReactionType.NoReaction,
      },
    });
  }
  if (myReaction === null || myReaction === undefined || myReaction === PostReactionType.NoReaction) {
    setPostReactionMutation({
      variables: {
        organizationId,
        postId,
        reactionType: PostReactionType.Like,
      },
    });
  }
};
