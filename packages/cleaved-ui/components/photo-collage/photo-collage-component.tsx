import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { PhotoCollageRow } from "./photo-collage-row";
import { LayoutPhotosMappedType, PhotoLayoutType } from "./types";

const StyledPhotoCollage = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;

type PhotoCollageComponentProps = {
  height: string[];
  openLightboxModal: (id: number) => void;
  photos: LayoutPhotosMappedType;
  photoLayout: PhotoLayoutType;
  totalPhotos: number;
  totalPhotosNotSeen: number;
  showTotalPhotosNotSeenNumber: boolean;
  width: string;
};

export const PhotoCollageComponent: FunctionComponent<PhotoCollageComponentProps> = (props) => {
  const {
    width,
    height,
    photoLayout,
    photos,
    totalPhotos,
    totalPhotosNotSeen,
    showTotalPhotosNotSeenNumber,
    openLightboxModal,
  } = props;

  return (
    <StyledPhotoCollage width={width}>
      {photoLayout &&
        photoLayout.length > 0 &&
        photoLayout.map((_, i) => {
          return (
            <PhotoCollageRow
              key={i}
              height={height[i]}
              photos={photos[i]}
              openLightboxModal={openLightboxModal}
              totalPhotos={totalPhotos}
              totalPhotosNotSeen={totalPhotosNotSeen}
              showTotalPhotosNotSeenNumber={showTotalPhotosNotSeenNumber}
            />
          );
        })}
    </StyledPhotoCollage>
  );
};
