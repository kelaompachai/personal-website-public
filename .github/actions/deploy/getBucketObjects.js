import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

const getBucketObjects = async (bucket) => {
  // this function is less than ideal because it returns an error code or a list of object keys

  const s3 = new S3Client();
  const params = {
    Bucket: bucket
  };

  const command = new ListObjectsCommand(params);

  try {
    const response = await s3.send(command);
    if (response.$metadata.httpStatusCode !== 200) return 1;

    if (response.Contents === undefined) return [];
    else return response.Contents.map((el) => el.Key);

  } catch (err) {
    console.error(err);
    return 1;
  }

}


const test = async () => {
  const names = await getBucketObjects('cheese-chesterton');
  names.forEach((el) => console.log(el));
}


export default getBucketObjects;
