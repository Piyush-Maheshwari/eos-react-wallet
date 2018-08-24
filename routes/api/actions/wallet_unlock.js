var axios = require("axios");

var options = [
  "http://127.0.0.1:9999/v1/wallet/unlock",
  ["default", "PW5HtWqEs9C8RNXNEmHCyryYLgLotXeV19wyM5geDcNsx77bJtctg"],
  {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  }
];
axios
  .post(...options)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
