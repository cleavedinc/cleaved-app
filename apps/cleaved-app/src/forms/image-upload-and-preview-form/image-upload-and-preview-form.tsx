import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { useDropzone } from "react-dropzone";
import { ReactSortable } from "react-sortablejs";
import styled, { useTheme } from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, CloseIcon, FONT_SIZES, mediaQueries, RADIUS, SPACING } from "@cleaved/ui";

import { PostFormContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { POST_UPLOAD_IMAGE_MUTATION } from "./gql";

type ImageUploadAndPreviewFormProps = {
  className?: string;
  images?: string[] | undefined;
};

type GetColorProps = {
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
};

const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.baseAlert_color};
  font-size: ${FONT_SIZES.XSMALL};
  height: 15px;
`;

const StyledImageThumbnail = styled.div`
  cursor: move;
  display: inline-flex;
  box-sizing: border-box;
  height: 75px;
  margin: 0 ${SPACING.SMALL} ${SPACING.SMALL} 0;
  position: relative;
  width: 75px;
`;

const StyledImageThumbnailContainer = styled.aside`
  display: block;
`;

const StyledImageThumbnailInner = styled.div`
  border-radius: ${RADIUS.MEDIUM};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const StyledImageThumbnailPreview = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

type StyledImageThumbnailRemoveButtonProps = {
  isRemoveButtonDisplayed: boolean;
};

const StyledImageThumbnailRemoveButton = styled.button<StyledImageThumbnailRemoveButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseIcon_color};
  border: ${BORDERS.SOLID_2PX} ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border-radius: ${RADIUS.CIRCLE};
  cursor: pointer;
  display: flex;
  flex-basis: 100%;
  height: 20px;
  justify-content: center;
  outline: inherit;
  padding: 0;
  position: absolute;
  right: -5px;
  top: -10px;
  width: 20px;

  ${mediaQueries.SM_MD} {
    display: ${(props) => (props.isRemoveButtonDisplayed ? `"flex"` : "none")};
  }
`;

const StyledImageUploadText = styled.div``;

const StyledImageUploadWrapper = styled.section<GetColorProps>`
  align-items: center;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) =>
    props.isDragAccept
      ? props.theme.colors.baseApproved_color
      : props.isDragReject
      ? props.theme.colors.baseAlert_color
      : props.isFocused
      ? props.theme.colors.baseLink_colorHover
      : props.theme.colors.baseBordersAndShadows_color};
  border-style: dashed;
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  color: ${({ theme }) => theme.colors.baseText_color};
  display: flex;
  flex: 1;
  height: 50px;
  justify-content: center;
  outline: none;
  flex-direction: column;
  padding: 20px;
  transition: border 0.24s ease-in-out;
`;

const StyledReactSortable = styled(ReactSortable)``;

// TODO: fix later???
// This is type react-sortablejs expects. Using a string[] seems to work.
// interface ItemType {
//   id: number;
//   name: string;
// }

export const ImageUploadAndPreviewForm: FunctionComponent<ImageUploadAndPreviewFormProps> = (props) => {
  const { images } = props;
  const { setProjectPostFormImageUploadIsDirty } = useContext(PostFormContext);
  const { setFieldValue } = useFormikContext();

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1);
  };

  const [savedFileUrls, setSavedFileUrls] = useState<string[]>([]);
  const [errors, setErrors] = useState<string | null>("");
  const maxFileUploadlimit = 10;
  const theme = useTheme();
  const { t } = useTranslator();

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
      "image/tiff": [".tif", ".tiff"],
      "image/webp": [".webp"],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      if (acceptedFiles.length > 0) {
        setErrors("");
      }

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

          if (err.code === "too-many-files") {
            setErrors(t("postFileUpload.errorTooManyFilesType", { maxFileUploadlimit: maxFileUploadlimit }));
          }
        });
      });
    },
    maxFiles: maxFileUploadlimit,
    maxSize: 15728640,
  });

  const removeFile = (fileToRemove: string) => () => {
    setSavedFileUrls((existingArray) => {
      const newSavedFileUrlsArray = existingArray.filter((fileUrl) => fileUrl != fileToRemove);

      return newSavedFileUrlsArray;
    });
  };

  useEffect(() => {
    if (images) {
      setSavedFileUrls(images);
    }
  }, [images]); // eslint-disable-line

  useEffect(() => {
    setFieldValue("imageUrls", savedFileUrls);

    // checks to set dirty context to handle modal state (clean state)
    if (savedFileUrls && savedFileUrls.length === 0) {
      setProjectPostFormImageUploadIsDirty(false);
    }

    // checks to set dirty context to handle modal state (dirty state)
    if (savedFileUrls && savedFileUrls.length > 0) {
      setProjectPostFormImageUploadIsDirty(true);
    }
  }, [savedFileUrls]); // eslint-disable-line

  return (
    <div className="container">
      {savedFileUrls && (
        <StyledImageThumbnailContainer>
          <StyledReactSortable list={savedFileUrls} setList={setSavedFileUrls}>
            {savedFileUrls.map((fileUrl, index) => {
              return (
                <StyledImageThumbnail
                  key={fileUrl}
                  onMouseEnter={() => handleMouseOver(index)}
                  onMouseLeave={() => handleMouseOut()}
                >
                  <StyledImageThumbnailInner>
                    <StyledImageThumbnailPreview
                      src={`${process.env.MEDIA_ENDPOINT}/${fileUrl}`}
                      // Revoke data uri after image is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(fileUrl);
                      }}
                    />
                  </StyledImageThumbnailInner>

                  <StyledImageThumbnailRemoveButton
                    isRemoveButtonDisplayed={hoveredIndex === index}
                    type="button"
                    onClick={removeFile(fileUrl)}
                  >
                    <CloseIcon color={theme.colors.always_white_color} iconSize={FONT_SIZES.XSMALL} />
                  </StyledImageThumbnailRemoveButton>
                </StyledImageThumbnail>
              );
            })}
          </StyledReactSortable>
        </StyledImageThumbnailContainer>
      )}

      {savedFileUrls && savedFileUrls.length < maxFileUploadlimit && (
        <StyledImageUploadWrapper {...getRootProps({ className: "dropzone", isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />

          <StyledImageUploadText>
            {t("postFileUpload.dragDropAreaHelperText", {
              imageUploadLimit: maxFileUploadlimit - savedFileUrls.length,
            })}
          </StyledImageUploadText>
        </StyledImageUploadWrapper>
      )}

      {errors && <StyledErrorMessage>{errors}</StyledErrorMessage>}
    </div>
  );
};
