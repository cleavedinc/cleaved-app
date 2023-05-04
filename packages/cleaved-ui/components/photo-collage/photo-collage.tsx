import React, { FunctionComponent, useEffect, useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import { PhotoCollageComponent } from "./photo-collage-component";
import { LayoutPhotosMappedType, PhotoLayoutType, PhotosMappedArrayType, PhotosType } from "./types";

type ReactPhotoCollageContainerProps = {
  height: string[];
  photoLayout: PhotoLayoutType;
  photos: PhotosType[];
  showTotalPhotosNotSeenNumber: boolean;
  width: string;
};

const createLayoutPhotoMaps = (photoLayout: PhotoLayoutType, photos: PhotosType[]) => {
  const newPhotos = photos.map((data, i) => {
    return { ...data, id: i };
  });

  const newMaps: LayoutPhotosMappedType = {};

  photoLayout.reduce((accumulator, currentValue, currentIndex) => {
    newMaps[currentIndex] = newPhotos.slice(accumulator, accumulator + currentValue) as PhotosMappedArrayType;
    return accumulator + currentValue;
  }, 0);

  return newMaps;
};

export const PhotoCollage: FunctionComponent<ReactPhotoCollageContainerProps> = (props) => {
  const { width, height, photoLayout, photos, showTotalPhotosNotSeenNumber } = props;

  const totalPhotos = photoLayout.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalPhotosNotSeen = photos.length - totalPhotos;
  const [layoutPhotoMaps, setLayoutPhotoMaps] = useState<LayoutPhotosMappedType>({});
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const closeLightbox = useCallback(() => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }, []);

  const openLightboxModal = useCallback((id: number) => {
    setCurrentImage(id);
    setViewerIsOpen(true);
  }, []);

  useEffect(() => {
    if (photos) {
      setLayoutPhotoMaps(createLayoutPhotoMaps(photoLayout, photos));
    }
  }, [photos]);

  return (
    <>
      <PhotoCollageComponent
        width={width}
        height={height}
        photoLayout={photoLayout}
        photos={layoutPhotoMaps}
        totalPhotos={totalPhotos}
        totalPhotosNotSeen={totalPhotosNotSeen}
        showTotalPhotosNotSeenNumber={showTotalPhotosNotSeenNumber}
        openLightboxModal={openLightboxModal}
      />

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel views={photos} currentIndex={currentImage} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};
