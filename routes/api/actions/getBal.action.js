let transfer = (eos, account) => {
    eos
      .getCurrencyBalance("eosio.token", account, "eos")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
