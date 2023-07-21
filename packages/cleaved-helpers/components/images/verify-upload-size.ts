export const verifyUploadSizeIsOK = (fileSize: number): boolean => {
  const MaxSizeInBytes = 485760; // 5MB limit

  if (fileSize < MaxSizeInBytes) {
    return true;
  }

  return false;
};
