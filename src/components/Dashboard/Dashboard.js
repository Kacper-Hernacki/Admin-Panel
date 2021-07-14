import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { auth } from '../../firebase';
import { Controls } from '../controls/Controls';
<<<<<<< HEAD
import { useStateValue } from '../../StateProvider';
import NavBar from '../NavBar/NavBar.js';

function Dashboard() {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <NavBar />
      <div>
        <Sidebar />
        <div>Content</div>
      </div>
=======

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Controls.Button text="Wyloguj" onClick={() => auth.signOut()} />
>>>>>>> 0d76e2c4d8b971f2fbd6754ba2812006a08465de
    </div>
  );
}
export default Dashboard;
