import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
import "./styles.css";

class ValidadorCET extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorCET: { value: "", error: false },
      errorCET: ""
    };
  }

  // TextField validation
  validarCET = event => {
    event.stopPropagation();

    let field = {
      valor: event.target.value.toUpperCase(),
      error: !/^[a-zA-Z0-9]+$/.test(event.target.value)
    };

    this.setState({
      valorCET: field
    });
  };

  // Clean the TextField
  handleSubmit = () => {
    this.setState({
      valorCET: { valor: "", error: false }
    });
  };

  render() {
    const { valorCET, errorCET } = this.state;

    return (
      <div className="container">
        <form noValidate autoComplete="off">
          <Tooltip
            arrow
            placement="left"
            title="Introduzca el CET"
            aria-label="Introduzca el CET"
          >
            <TextField
              required
              id="outlined-basic"
              label="Value"
              variant="outlined"
              value={valorCET.valor}
              error={valorCET.error}
              inputProps={{ maxLength: 8 }}
              onChange={e => this.validarCET(e)}
              helperText={errorCET}
            />
          </Tooltip>
        </form>

        <br />

        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Clean
        </Button>
      </div>
    );
  }
}

export default ValidadorCET;
