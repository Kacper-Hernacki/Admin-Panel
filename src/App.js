import styles from './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Forms/Login/Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Dashboard from './components/Dashboard/Dashboard';
<<<<<<< HEAD
import { useStateValue } from './StateProvider';

function App() {
  // const [{ user }, dispatch] = useStateValue();
  const [user, setUser] = useState(true);
=======

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
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de

  return (
    <div className={styles.main__app}>
      <Router>
<<<<<<< HEAD
        <Switch>{!user ? <Login /> : <Dashboard />}</Switch>
=======
        <Switch>{!loggedIn ? <Login /> : <Dashboard />}</Switch>
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de
      </Router>
    </div>
  );
}

export default App;
