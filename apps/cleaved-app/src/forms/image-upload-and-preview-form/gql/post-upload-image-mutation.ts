import { graphql } from "../../../generated-types";

export const POST_UPLOAD_IMAGE_MUTATION = graphql(`
  mutation postUploadImage($image: Upload!) {
    postUploadImage(image: $image)
  }
`);
