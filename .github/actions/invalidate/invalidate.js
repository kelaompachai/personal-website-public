import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';

const invalidate = async (distribution) => {
  const client = new CloudFrontClient();
  const input = {
    DistributionId: distribution,
    InvalidationBatch: {
      Paths: {
        Quantity: 1,
        Items: [
          '/*'
        ]
      },
      CallerReference: new Date().getTime().toString()
    }
  };

  const command = new CreateInvalidationCommand(input);

  try {
    const response = await client.send(command);
    return response;
  } catch (error) {
    console.error(error);
    return 1;
  }
};

export default invalidate;