const call = require('./libs/dynamodb-lib');
const { success, failure } = require("./libs/response-lib");

const TABLE_NAME = 'Dogs'

module.exports.main = async function (event, context) {

  const params = {
    TableName: TABLE_NAME,
    ExpressionAttributeValues: {
      ':goodboy': true
    },
    Limit: 20,
    FilterExpression: "goodboy = :goodboy"
  };

  try {
    const result = await call("scan", params);

    return success(result.Items);
  } catch (e) {
      console.log(e)
    return failure({ status: false });
  }
}
