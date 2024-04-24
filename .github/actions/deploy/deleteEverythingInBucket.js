import deleteBucketObjects from "./deleteBucketObjects.js"; 
import getBucketObjects from "./getBucketObjects.js";

// get an array of the keys of the objects in the bucket
// pass that array to delete bucket objects
// it deletes the objects in the bucket

const deleteEverythingInBucket = async (bucket) => {
  try {
    const objects = await getBucketObjects(bucket);
    if (objects === 1) return 1;
    if (objects.length === 0) return 0;
    const code = await deleteBucketObjects(bucket, objects);
    return code;
  } catch (err) {
    console.error(err);
    return 1;
  }
};

export default deleteEverythingInBucket;
