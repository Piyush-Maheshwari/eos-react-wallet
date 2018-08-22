const Eos = require("eosjs");
var resolvedProm = Promise.resolve(Eos().getInfo({}));
const keyProvider = [
  "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
  "5Jv36u6CjqEUkJmomWC9khZXXUiMXzhv4D9Y4yeaUARLxP1uKYw",
  "5K9YhtoyDW686KfaU8d5Wc9jx1GzhKnzPNMMtoCTNwR6MdrdbY5",
  "5JLxXMLsfeazcHwmJSVqJxbpfHxUXVNREan9d7JbTmTctfks7Xi"
];
const httpEndpoint = "http://127.0.0.1:8888";

module.exports = thenProm = resolvedProm.then(function(value) {
  return Eos({
    chainId: value.chain_id,
    keyProvider,
    httpEndpoint
  });
});
