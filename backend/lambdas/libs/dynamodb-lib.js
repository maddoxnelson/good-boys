const AWS = require("aws-sdk");

// AWS.config.update({
//     region: "us-east-1",
//     endpoint: "http://localhost:8000"
// });  

function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}

module.exports = call;