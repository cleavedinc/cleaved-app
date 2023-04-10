export const verifyUploadSizeIsOK = (fileSize: number): boolean => {
  const MaxSizeInBytes = 1048576; // 1MB

  if (fileSize < MaxSizeInBytes) {
    return true;
  }

  return false;
};
