import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import Jobs from './components/Jobs'
import EachJobDetails from './components/EachJobDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={EachJobDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
