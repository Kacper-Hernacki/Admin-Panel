import React, { useState } from 'react';
import styles from './Login.module.css';
import { Controls } from '../../controls/Controls';
import { auth, provider } from '../../../firebase';

//import DashboardIcon from '@material-ui/icons/Dashboard';
//import NightsStayIcon from '@material-ui/icons/NightsStay';
//import StoreIcon from '@material-ui/icons/Store';
//import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
//import Brightness3Icon from '@material-ui/icons/Brightness3';

function Login() {
  // const { setter } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        </form>
        <Controls.Button onClick={signIn} text="zaloguj się przez gmail" />
      </div>
    </div>
  );
}

export default Login;
