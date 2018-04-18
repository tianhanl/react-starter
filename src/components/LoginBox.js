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

const validator = {
  username: v => v.length >= 8,
  password: v => v.length >= 8
};

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: '',
      isLoading: false
    };
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  validate = () => {
    return (
      validator['username'](this.state.username) &&
      validator['password'](this.state.password)
    );
  };

  handleLoginClick = e => {
    if (this.validate()) {
      this.setState({
        isLoading: true
      });
      // used to mock network event
      // setTimeout(() => {
      //   this.setState({
      //     isLoading: false
      //   });
      // }, 2000);
      // Following code can be used to actually send a request
      fetch('http://localhost:8001/login', {
        method: 'post',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(
          result => {
            console.log(result);
            this.setState({
              isLoading: false,
              token: result.token
            });
          },
          err => {
            console.log(err);
            this.setState({
              isLoading: false
            });
          }
        );
    }
  };

  render() {
    return (
      <Paper style={styles.loginBoxStyle}>
        <TextField
          required
          error={!validator['username'](this.state.username)}
          id="username"
          label="Username"
          disabled={this.state.isLoading}
          value={this.state.username}
          onChange={this.handleChange('username')}
          style={styles.textFieldStyle}
          fullWidth
        />
        <TextField
          required
          error={!validator['password'](this.state.password)}
          id="password"
          label="Password"
          type="password"
          disabled={this.state.isLoading}
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
          disabled={this.state.isLoading || !this.validate()}
          onClick={this.handleLoginClick}
        >
          {this.state.isLoading ? 'Loading' : 'Login'}
        </Button>
        {this.state.token && <p>Your token is {this.state.token}</p>}
      </Paper>
    );
  }
}

export default LoginBox;
