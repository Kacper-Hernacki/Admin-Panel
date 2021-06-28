import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { auth } from '../../firebase';
import { Controls } from '../controls/Controls';

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Controls.Button text="Wyloguj" onClick={() => auth.signOut()} />
    </div>
  );
}
export default Dashboard;
