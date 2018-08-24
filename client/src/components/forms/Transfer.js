import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { transferTokens } from "../../actions/transferActions";
import TextFieldGroup from "../common/TextFieldGroup";
const jwt = require("jsonwebtoken");

class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      amount: "",
      message: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let token = jwt.decode(localStorage["jwtToken"].replace("Bearer ", ""));
    this.setState({ from: token.email });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const data = {
      from: this.state.from,
      to: this.state.to,
      amount: this.state.amount,
      message: this.state.message,
      password: this.state.password
    };
    this.props.transferTokens(data);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Transfer Tokens</h1>
              <p className="lead text-center">
                Transfer EOS from one to another
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="text"
                  placeholder="From"
                  name="from"
                  disabled="disabled"
                  value={this.state.from}
                />
                <TextFieldGroup
                  type="email"
                  placeholder="Send To"
                  name="to"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                />
                <TextFieldGroup
                  type="number"
                  placeholder="Tokens"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                  error={errors.amount}
                />
                <TextFieldGroup
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  error={errors.message}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Transfer.propTypes = {
  transferTokens: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  transfer: state.transfer,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { transferTokens }
)(Transfer);
