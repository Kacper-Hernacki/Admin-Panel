import React, { useState } from 'react';
import styles from './Login.module.css';
import { Controls } from '../../controls/Controls';
import { auth, provider } from '../../../firebase';
<<<<<<< HEAD
import { useStateValue } from '../../../StateProvider';
import { actionTypes } from '../../../reducer';
=======
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de

//import DashboardIcon from '@material-ui/icons/Dashboard';
//import NightsStayIcon from '@material-ui/icons/NightsStay';
//import StoreIcon from '@material-ui/icons/Store';
//import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
//import Brightness3Icon from '@material-ui/icons/Brightness3';

function Login() {
  // const { setter } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
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
=======

  //Auth123456.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((e) => alert('not allowed'));
  };

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  console.log(email, password);
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de

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
<<<<<<< HEAD
            placeholder="password"
=======
            placeholder=""
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Controls.Button type="submit" text="Zaloguj sie" />
<<<<<<< HEAD
          <div className>
            <img src="/public/images/google.png" alt="" />
            <Controls.Button
              onClick={signIn}
              text="Login with gmail"
              styles={styles.googleButton}
            />
          </div>
        </form>
=======
        </form>
        <Controls.Button onClick={signIn} text="zaloguj się przez gmail" />
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de
      </div>
    </div>
  );
}

export default Login;
