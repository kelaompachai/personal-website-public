import deleteEverythingInBucket from './deleteEverythingInBucket.js';
import writeFolderToBucket from './writeFolderToBucket.js';

const deploy = async (pathToFolder, bucket) => {
  const deleteCode = await deleteEverythingInBucket(bucket);
  if (deleteCode) return 1;
  const writeCode = await writeFolderToBucket(bucket, pathToFolder);
  if (writeCode) return 1;
  return 0;
};

export default deploy;
