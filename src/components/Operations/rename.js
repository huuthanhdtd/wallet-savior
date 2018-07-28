import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import * as firebase from "firebase/app";

class Rename extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            error: null,
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    submit = () => {
        if (this.state.value !== "") {
            if (this.state.value.length <= 14) {
                this.setState({ error: null });

                if (this.props.group) {
                    firebase.database().ref(`groups/${this.props.child}`).update({ name: this.state.value });
                    firebase.database().ref(`users/${this.props.authUser.uid}/groups/${this.props.child}`).update({ name: this.state.value });
                }
                else {
                    firebase.database().ref(`users/${this.props.authUser.uid}/wallets/${this.props.child}`).update({ name: this.state.value });
                }
                
                this.props.setSnackbarOpen(true);
                this.props.setRenameDialog(false);
            }
            else {
                this.setState({ error: "Please choose a name within 14 characters!" });
            }
        }
    }

    render() {
        const { error } = this.state;
        return (
            <Dialog
                open={this.props.open}
                onClose={() => this.props.setRenameDialog(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Rename Wallet</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a new name for your wallet:
      </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="rename"
                        label="Name"
                        type="text"
                        fullWidth
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    {error && <span style={{ color: "red" }}>{error}</span>}

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.setRenameDialog(false)} color="primary">
                        Cancel
      </Button>
                    <Button onClick={this.submit} color="primary">
                        Rename
      </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Rename);