import './Sidebar.css';
import { Button } from '@material-ui/core';
import React from 'react';

function Sidebar() {
  const pillowCasesHandler = () => {};
  const pillowsHandler = () => {};
  const othersHandler = () => {};
  const decoupageHandler = () => {};

  return (
    <div className="sidebar">
      <Button className="sidebar__option active" onClick={pillowCasesHandler}>
        Pillow Cases
      </Button>
      <Button className="sidebar__option" onClick={pillowsHandler}>
        Pillows
      </Button>
      <Button className="sidebar__option" onClick={othersHandler}>
        Others
      </Button>
      <Button className="sidebar__option" onClick={decoupageHandler}>
        Decoupage
      </Button>
    </div>
  );
}

export default Sidebar;
