import styles from './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Forms/Login/Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className={styles.main__app}>
      <Router>
        <Switch>{!loggedIn ? <Login /> : <Dashboard />}</Switch>
      </Router>
    </div>
  );
}

export default App;
