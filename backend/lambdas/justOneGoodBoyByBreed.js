const call = require('./libs/dynamodb-lib');
const { success, failure } = require("./libs/response-lib");

const TABLE_NAME = 'Dogs'

module.exports.main = async function (event, context) {
  const { pathParameters = {} } = event;
  const { breed = '' } = pathParameters;

  const params = {
    TableName: TABLE_NAME,
    ExpressionAttributeValues: {
      ':breed': breed
    },
    FilterExpression: "breed = :breed"
  };

  try {
    const result = await call("scan", params);
    console.log(params)
    // Return the matching list of items in response body
    return success(result.Items[0]);
  } catch (e) {
      console.log(e)
    return failure({ status: false });
  }
}
