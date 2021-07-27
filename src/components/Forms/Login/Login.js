import React, { useState } from 'react';
import styles from './Login.module.css';
import { Controls } from '../../controls/Controls';
import { auth, provider } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import { actionTypes } from '../../../reducer';

//import DashboardIcon from '@material-ui/icons/Dashboard';
//import NightsStayIcon from '@material-ui/icons/NightsStay';
//import StoreIcon from '@material-ui/icons/Store';
//import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
//import Brightness3Icon from '@material-ui/icons/Brightness3';

function Login() {
  // const { setter } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useStateValue();
  //Auth123456.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((e) => alert('not allowed'));
  };

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="example@gmail.com"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder=""
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Controls.Button type="submit" text="Zaloguj sie" />

          <div className>
            <img src="/public/images/google.png" alt="" />
            <Controls.Button
              onClick={signIn}
              text="Login with gmail"
              styles={styles.googleButton}
            />
          </div>
        </form>

        <Controls.Button onClick={signIn} text="zaloguj się przez gmail" />
      </div>
    </div>
  );
}

export default Login;
