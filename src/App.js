import styles from './App.css';
import {
  Switch, Route, BrowserRouter as Router
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Forms/Login/Login';
import {useState} from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.main__app}>
      {!loggedIn? (
        <Login
          setter={setLoggedIn}
        />
      ) : (
        <div>
          <Router>
            <Sidebar/>
            <Switch>
              <Route path="/pillow1"> 
                
              </Route>
              <Route path="/pillow2"> 
                
              </Route>
              <Route path="/pillow3"> 
                
              </Route>
              <Route path="/pillow4"> 
                
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
