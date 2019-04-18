import Amplify from "aws-amplify";

const config = {
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://utpnt53bx1.execute-api.us-east-1.amazonaws.com/dev/"
    }
};

export const s3Bucket = {
  url: "https://s3.amazonaws.com/good-boys"
}

export const APIConfig = Amplify.configure({
    Auth: {
      mandatorySignIn: false,
    },
    API: {
      endpoints: [
        {
          name: "breedEndpoint",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        }
      ]
    }
  });