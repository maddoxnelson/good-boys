const call = require('./libs/dynamodb-lib');
const { success, failure } = require("./libs/response-lib");

const TABLE_NAME = 'Dogs'

module.exports.main = async function (event, context) {
  const { pathParameters = {} } = event;
  const { path } = pathParameters;

  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "#path = :path",
    ExpressionAttributeNames: {
        "#path": "path"
    },
    ExpressionAttributeValues: {
      ':path': path
    }
  };

  try {
    const result = await call("query", params);

      return success(result.Items[0]);
  } catch (e) {
      console.log(e)
    return failure({ status: false });
  }
}
