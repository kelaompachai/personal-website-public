import core from '@actions/core';

import invalidate from './invalidate.js';

try {
  const inputDistriddbution = core.getInput('distribution');

  const response = await invalidate(inputDistriddbution);
  if (response.$metadata.httpStatusCode !== 200 && response.$metadata.httpStatusCode !== 201) {

    console.log('problem response:', response);
    core.setFailed('AWS cloudfront api call did not work properly');

  } 


} catch (err) {
    core.setFailed(err);
}