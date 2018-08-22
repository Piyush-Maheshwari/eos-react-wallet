const fs = require("fs");
let transfer = (eos, from, to, quantity, message) => {
  eos.contract("eosio.token").then(contract => {
    // console.log(contract.issue());
    contract
      .transfer(
        {
          from: from,
          to: to,
          quantity: `${quantity} SYS`,
          memo: message
        },
        {
          authorization: [`${from}@active`]
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
module.exports = transfer;
