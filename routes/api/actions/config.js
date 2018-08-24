const Eos = require("eosjs");
var resolvedProm = new Promise((resolve, reject) => {
  if (Eos().getInfo({})) resolve(Eos().getInfo({}));
  else reject("Error");
});

const httpEndpoint = "http://127.0.0.1:8888";
var request = require("request");
let eosioKeyProvider = ["5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"];
// var options = [
//   "http://127.0.0.1:9999/v1/wallet/list_keys",
//   ["sd", "PW5JhwiC1e92vcSoX5Wq9RDBNSrFVDt1h7yAEzBatXuL9LsmyQEej"],
//   {
//     "Cache-Control": "no-cache",
//     "Content-Type": "application/json"
//   }
// ];

// modules axios
// .post(...options)
// .then(result => {

// })
// .catch(err => {
//   console.log(err)
// ;})
let eosConfig = function(keyProvider = eosioKeyProvider) {
  resolvedProm.then(value => {
    chainId = value.chain_id;
    return Promise.resolve(
      Eos({
        httpEndpoint,
        keyProvider,
        chain_id
      })
    );
  });
};
