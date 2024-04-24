
import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3";

const deleteBucketObjects = async (bucket, objects) => {
  // this function will make an api call to s3 to delete everything in a given bucket
  
  const s3 = new S3Client();

  // adjust input into this function into input aws api wants
  const objectsParam = objects.map((el) => ({Key: el}));
  const params = {
    Bucket: bucket,
    Delete: {
      Objects: objectsParam 
    }
  }

  const deleteObject = new DeleteObjectsCommand(params);

  try {
    const response = await s3.send(deleteObject);

    // it may be possible to check failure by checking whether response at $metadata at httpStatusCode is not 200
    // or by checking for an errors property on response
    if (response.$metadata.httpStatusCode !== 200 || 'Errors' in response) {
      console.log('problem params:', params);
      console.log('problem response:', response);
      return 1;
    }

    return 0;

  } catch (error) {
    console.error(error);
    return 1;
  }
}

export default deleteBucketObjects;
