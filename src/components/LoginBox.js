import React from 'react';
// you have to import react for every jsx component since they
// will be compiled into React.createElement()
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = {
  loginBoxStyle: {
    width: 380,
    padding: '2em',
    margin: '4em auto',
    position: 'relative'
  },
  textFieldStyle: {
    marginBottom: '1em'
  },
  buttonStyle: {
    margin: '1em 0 0.3em 0',
    width: '100%'
  }
};

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <Paper style={styles.loginBoxStyle}>
        <TextField
          id="username"
          label="Username"
          value={this.state.username}
          onChange={this.handleChange('username')}
          style={styles.textFieldStyle}
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={this.state.password}
          style={styles.textFieldStyle}
          onChange={this.handleChange('password')}
          fullWidth
        />
        <Button
          size="large"
          variant="raised"
          color="primary"
          style={styles.buttonStyle}
        >
          Login
        </Button>
      </Paper>
    );
  }
}

export default LoginBox;
