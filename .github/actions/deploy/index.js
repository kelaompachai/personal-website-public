import core from '@actions/core';
import path from 'path';
import { fileURLToPath } from 'url';

import deploy from './deploy.js';

try {
  const inputBucket = core.getInput('bucket');

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const distributionFolderPath = path.join(__dirname, '..', '..', '..', 'dist');

  const exitCode = await deploy(distributionFolderPath, inputBucket);
  console.log('exitCode', exitCode);

  if (exitCode === 1) core.setFailed('AWS s3 api call did not work properly');

} catch (err) {
  console.error(err);
  core.setFailed(err.message);
}
