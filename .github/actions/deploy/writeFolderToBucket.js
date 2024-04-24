
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { promises } from 'fs';
const fsp = promises;


const addToBucket = async (bucket, key, body) => {
  const s3 = new S3Client();

  const getContentType = (filename) => {
    // input: a string that is a file name
    // output: a string that is the content type of the file
    // side-effects: none

    /*
    jpg -> image/jpeg
    txt -> text/plain
    html -> text/html
    js -> text/javascript
    */

    // use string manipulation to get what comes after the last period in key
    // put that into a switch case that will assign the right string to the contentType variable

    let i = key.length - 1;
    while (key[i] !== '.') {
      i -= 1;
    }
    
    const fileExtension = key.slice(i + 1);

    return fileExtension === 'jpg' ? 'image/jpeg' : fileExtension === 'txt' ? 'text/plain' : fileExtension === 'html' ? 'text/html' : fileExtension === 'js' ? 'text/javascript' : 'application/octet-stream';
  };

  const contentType = getContentType(key);


  const params = {
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType
  };

  const putObject = new PutObjectCommand(params);

  try {
    const response = await s3.send(putObject);

    if (response.$metadata.httpStatusCode !== 200) {
      console.log('problem parameters:', params);
      console.log('problem response:', response);
      return 1;
    }

    return 0;
  } catch (error) {
    console.error(error)
    return 1;
  }
};


const writeFolderToBucket = async (bucket, path) => {
  const files = await fsp.readdir(path);

  const writeFolderCode = 0;

  files.forEach(async (el) => {
    const code = await addToBucket(bucket, el, await fsp.readFile(path + '/' + el));
    if (code) writeFolderCode = 1;
  });

  return writeFolderCode;
};

export default writeFolderToBucket;
