import styles from './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Forms/Login/Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Dashboard from './components/Dashboard/Dashboard';
import { useStateValue } from './StateProvider';

function App() {
  // const [{ user }, dispatch] = useStateValue();
  const [user, setUser] = useState(true);

  return (
    <div className={styles.main__app}>
      <Router>
        <Switch>{!user ? <Login /> : <Dashboard />}</Switch>
      </Router>
    </div>
  );
}

export default App;
