import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.scss';
import Home from './pages/home/Home';

import { Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
