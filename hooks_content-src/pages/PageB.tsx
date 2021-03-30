import * as React from 'react';
import {SessionContext} from '../common'

const PageB = () => {
  const loginContext = React.useContext(SessionContext);
  return (
    <div>
      <h2>Hello from page B</h2>
      <h3>User Logged in:{loginContext.login}</h3>
      <br/>
    </div>
  )
}
export default PageB;