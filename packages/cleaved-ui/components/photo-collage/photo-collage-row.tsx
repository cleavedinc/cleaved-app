import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { PhotosMappedArrayType } from "./types";

type RowPhotosProps = {
  height: string;
  openLightboxModal: (id: number) => void;
  photos: PhotosMappedArrayType;
  totalPhotos: number;
  totalPhotosNotSeen: number;
  showTotalPhotosNotSeenNumber: boolean;
};

const StyledPhotoGrid = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  position: relative;

  & + & {
    margin-left: 2px;
  }
`;

const StyledPhotoMask = styled.div`
  background-color: ${({ theme }) => theme.colors.baseOverlayImage_backgroundColor};
  cursor: pointer;
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const StyledPhotoRow = styled.div<{ rowHeight: string }>`
  box-sizing: border-box;
  display: flex;
  height: ${(props) => props.rowHeight};

  & + & {
    margin-top: 2px;
  }
`;

const StyledPhotoThumb = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

const StyledTotalPhotosNotSeen = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.always_white_color};
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before {
    content: "+";
  }
`;

const StyledViewMore = styled.div`
  cursor: pointer;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const PhotoCollageRow: FunctionComponent<RowPhotosProps> = (props) => {
  const { height, photos, totalPhotos, totalPhotosNotSeen, showTotalPhotosNotSeenNumber, openLightboxModal } = props;

  return (
    <StyledPhotoRow rowHeight={height}>
      {photos &&
        photos.length > 0 &&
        photos.map((data, i: number) => {
          return (
            <StyledPhotoGrid
              key={i}
              data-id={data.id}
              onClick={(e) => openLightboxModal(Number(e.currentTarget.dataset.id))}
            >
              {showTotalPhotosNotSeenNumber && totalPhotosNotSeen > 0 && data.id === totalPhotos - 1 && (
                <>
                  <StyledPhotoMask />

                  <StyledViewMore>
                    <StyledTotalPhotosNotSeen>{totalPhotosNotSeen}</StyledTotalPhotosNotSeen>
                  </StyledViewMore>
                </>
              )}

              <StyledPhotoThumb alt={data?.source} src={data.source} />
            </StyledPhotoGrid>
          );
        })}
    </StyledPhotoRow>
  );
};
