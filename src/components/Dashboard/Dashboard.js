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
      <div>
        <Sidebar />
        <div>Content</div>
      </div>
    </div>
  );
}
export default Dashboard;
