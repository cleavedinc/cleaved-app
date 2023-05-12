export const verifyUploadSizeIsOK = (fileSize: number): boolean => {
  const MaxSizeInBytes = 10485760; // 10MB limit

  if (fileSize < MaxSizeInBytes) {
    return true;
  }

  return false;
};
