import Home from 'pages/Home/Home'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} exact />
    </Switch>
  </Router>
)

export default Routes
