import React, {useState} from "react";
import styles from './Login.module.css';
import {Controls} from "../../controls/Controls";
import { useForm, Form } from '../useForm';
import axios from 'axios';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import NightsStayIcon from '@material-ui/icons/NightsStay';
//import StoreIcon from '@material-ui/icons/Store';
//import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
//import Brightness3Icon from '@material-ui/icons/Brightness3';

const { API_URL } = process.env;
const initialContent = {
  username: '',
  password: '',
}



const onSubmitHandler = (user) => {
  axios({
    method: 'post',
    url: `${API_URL}`,
    data: {
      username: `${user.name}`,
      password: `${user.password}`
    }
  });
}

function Login() {
  const [user, setUser] = useState(initialContent);
  
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
      <Controls.Button 
        text="Zaloguj sie"
      />
      </div>
    </div>
  )
}

export default Login
