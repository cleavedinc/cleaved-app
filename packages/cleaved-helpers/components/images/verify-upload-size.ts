export const verifyUploadSizeIsOK = (fileSize: number): boolean => {
  const MaxSizeInBytes = (10 * 1048576) / 1024 ** 2; // 10MB limit

  if (fileSize < MaxSizeInBytes) {
    return true;
  }

  return false;
};
