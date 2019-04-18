const call = require('./libs/dynamodb-lib');
const { success, failure } = require("./libs/response-lib");

const TABLE_NAME = 'Breeds'

module.exports.main = async function (event, context) {
  const { pathParameters = {} } = event;

  const params = {
    TableName: TABLE_NAME,
    ExpressionAttributeValues: {
      ':goodboy': true
    },
    FilterExpression: "goodboy = :goodboy"
  };

  try {
    const result = await call("scan", params);
    console.log(params)
    // Return the matching list of items in response body
    return success(result.Items);
  } catch (e) {
      console.log(e)
    return failure({ status: false });
  }
}
