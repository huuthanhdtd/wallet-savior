import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import FirstUse from './firstUseDialog'
import withAuthorization from '../Session/withAuthorization';
import firebase from 'firebase';
import formatNumber from "format-number";

const usersRef = firebase.database().ref('users/')

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      firstUse: false,
      open: true,
      totalAmount: 0,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  setFirstUse = () => {
    usersRef.child(this.props.authUser.uid).update({ firstUse: false })
    this.setState({ firstUse: false })
  }

  componentDidMount() {
    usersRef.on('child_added', snapshot => {
      if (snapshot.val().firstUse) {
        this.setState({ firstUse: true })
      }
      this.setState({ totalAmount: snapshot.val().money })
    })
  }

  render() {
    const { totalAmount } = this.state
    return (
      <div>
        <h1>My Wallet</h1>
        <span style={{ fontSize: "4rem" }}>{formatNumber({ prefix: "$" })(totalAmount.toFixed(2))}</span>

        {this.state.firstUse &&
          <FirstUse open={this.state.open} handleClose={this.handleClose} setFirstUse={this.setFirstUse} />
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(HomePage);
