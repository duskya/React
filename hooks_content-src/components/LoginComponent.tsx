import * as React from 'react';
import Button from "@material-ui/core/Button";

interface PropsForm {
  onLogin: (login) => void;
}

const LoginComponent:React.FC<PropsForm> = (props) => {
  return (
    <div>
      <Button type="button" variant="contained" color="primary">
      Login
      </Button>
    </div>
  )
}
export default LoginComponent;
