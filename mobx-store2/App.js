import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from './pages/Article';

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <Switch>是唯一的因为它仅仅只会渲染一个路径 */}
        <Switch>
          <Route path="/article/:id" component={Article} />
          {/* component属性时，router会通过你赋给该属性的值 */}
        </Switch>
      </div>
    )
  }
}

export default App;