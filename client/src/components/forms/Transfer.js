import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { transfer } from "../../actions/transferActions";
import TextFieldGroup from "../common/TextFieldGroup";

import React, { Component } from "react";

export default class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      to: "",
      amount: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Eos account</p>
              <form onSubmit={this.onSubmit}>
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
                  placeholder="tokens"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                  error={errors.amount}
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

export default connect(mapStateToProps,{transfer})(Transfer);