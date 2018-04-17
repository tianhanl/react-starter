import React from 'react';
import LoginBox from '../components/LoginBox';
// A functional component
const LoginView = () => (
  <div>
    <h1>Login Page</h1>
    <LoginBox />
  </div>
);

/*
    export default means that the object come after it will be returned when users import no specific items 
*/
export default LoginView;
