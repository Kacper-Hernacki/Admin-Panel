import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { auth } from '../../firebase';
import { Controls } from '../controls/Controls';
import { useStateValue } from '../../StateProvider';
import NavBar from '../NavBar/NavBar.js';

function Dashboard() {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <NavBar />

      <Sidebar />
      <Controls.Button text="Wyloguj" onClick={() => auth.signOut()} />
    </div>
  );
}
export default Dashboard;
