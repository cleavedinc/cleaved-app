import React, { Dispatch, FunctionComponent, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, CloseIcon, COLORS, FONT_SIZES, PlusIcon, SPACING } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import { POST_UPLOAD_IMAGE_MUTATION } from "./gql";

type ImageUploadAndPreviewFormProps = {
  className?: string;
  images?: string[] | undefined;
  setFieldValue: (field: string, value: string[], shouldValidate?: boolean) => void;
  setImageUploadWrapperActive: Dispatch<React.SetStateAction<boolean>>;
};

type GetColorProps = {
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
};

const StyledAddFileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 ${SPACING.SMALL} ${SPACING.SMALL} 0;
  width: 50px;
`;

const StyledErrorMessage = styled.div`
  color: ${COLORS.RED_500};
  font-size: ${FONT_SIZES.XSMALL};
  height: 15px;
`;

const StyledImageThumbnail = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: ${BORDERS.BORDER_PRIMARY};
  box-sizing: border-box;
  height: 75px;
  margin: 0 ${SPACING.SMALL} ${SPACING.SMALL} 0;
  position: relative;
  width: 75px;
`;

const StyledImageThumbnailContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledImageThumbnailInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const StyledImageThumbnailPreview = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const StyledImageThumbnailRemoveButton = styled.button`
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: 0 0 0 10px;
  cursor: pointer;
  display: flex;
  flex-basis: 100%;
  font: inherit;
  height: 25px;
  justify-content: center;
  outline: inherit;
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;

  &:hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledImageUploadText = styled.div``;

const getColor = (props: GetColorProps) => {
  if (props.isDragAccept) {
    return COLORS.GREEN_500;
  }
  if (props.isDragReject) {
    return COLORS.RED_500;
  }
  if (props.isFocused) {
    return COLORS.BLUE_500_HOVER;
  }
  return COLORS.GRAY_100;
};

const StyledImageUploadWrapper = styled.section<GetColorProps>`
  align-items: center;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  display: flex;
  flex: 1;
  height: 200px;
  justify-content: center;
  outline: none;
  flex-direction: column;
  padding: 20px;
  transition: border 0.24s ease-in-out;
`;

export const ImageUploadAndPreviewForm: FunctionComponent<ImageUploadAndPreviewFormProps> = (props) => {
  const { images, setFieldValue } = props;
  const { t } = useTranslator();
  const [savedFileUrls, setSavedFileUrls] = useState<string[]>([]);
  const [errors, setErrors] = useState<string | null>("");
  const maxFileUploadlimit = 10;

  const handleSetImageURI = (savedFileUrlsArg: string[]) => {
    setSavedFileUrls((existingArray) => {
      const newImageArray = [...existingArray, savedFileUrlsArg] as string[];

      // dedupe saved urls using a Set(), then converting that into an array for the post form submission
      return Array.from(new Set(newImageArray)).slice(0, maxFileUploadlimit);
    });
  };

  const [uploadPostImage] = useMutation(POST_UPLOAD_IMAGE_MUTATION, {
    onCompleted: (data) => {
      handleSetImageURI(data.postUploadImage);
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, open } = useDropzone({
    accept: {
      "image/avif": [".avif"],
      "image/bmp": [".bmp"],
      "image/gif": [".gif"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
      "image/tiff": [".tif", ".tiff"],
      "image/webp": [".webp"],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      // Handle file upload
      acceptedFiles.map((file) => {
        uploadPostImage({ variables: { image: file } });
      });

      const maxFileSizeInMb = (15 * 1048576) / 1024 ** 2; // 15MB limit
      // handle file upload errors
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            setErrors(t("postFileUpload.errorFileExceedsFileSize", { fileSize: maxFileSizeInMb }));
          }

          if (err.code === "file-invalid-type") {
            setErrors(t("postFileUpload.errorFileIncorrectType"));
          }
        });
      });
    },
    maxFiles: maxFileUploadlimit,
    maxSize: 15728640,
  });

  const openImagePicker = () => {
    open();
  };

  const removeFile = (fileToRemove: string) => () => {
    setSavedFileUrls((existingArray) => {
      const newSavedFileUrlsArray = existingArray.filter((fileUrl) => fileUrl != fileToRemove);
      return newSavedFileUrlsArray;
    });
  };

  const thumbs =
    savedFileUrls &&
    savedFileUrls.map((fileUrl) => (
      <StyledImageThumbnail key={fileUrl}>
        <StyledImageThumbnailInner>
          <StyledImageThumbnailPreview
            src={`${process.env.MEDIA_ENDPOINT}/${fileUrl}`}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(fileUrl);
            }}
          />
        </StyledImageThumbnailInner>
        <StyledImageThumbnailRemoveButton type="button" onClick={removeFile(fileUrl)}>
          <CloseIcon color={COLORS.GRAY_500} font-size={FONT_SIZES.SMALL} />
        </StyledImageThumbnailRemoveButton>
      </StyledImageThumbnail>
    ));

  useEffect(() => {
    if (images) {
      setSavedFileUrls(images);
    }
  }, [images]); // eslint-disable-line

  useEffect(() => {
    setFieldValue("imageUrls", savedFileUrls);
  }, [savedFileUrls]); // eslint-disable-line

  return (
    <div className="container">
      {savedFileUrls && savedFileUrls.length <= 0 && (
        <StyledImageUploadWrapper {...getRootProps({ className: "dropzone", isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />

          <StyledImageUploadText>
            {t("postFileUpload.dragDropAreaHelperText", { imageUploadLimit: maxFileUploadlimit })}
          </StyledImageUploadText>
        </StyledImageUploadWrapper>
      )}

      <StyledErrorMessage>{errors}</StyledErrorMessage>

      <StyledImageThumbnailContainer>
        {thumbs}

        {savedFileUrls && savedFileUrls.length > 0 && savedFileUrls.length < maxFileUploadlimit && (
          <StyledAddFileButton type="button" onClick={() => openImagePicker()}>
            <PlusIcon color={COLORS.GRAY_500} iconSize={FONT_SIZES.XLARGE} />
          </StyledAddFileButton>
        )}
      </StyledImageThumbnailContainer>
    </div>
  );
};
