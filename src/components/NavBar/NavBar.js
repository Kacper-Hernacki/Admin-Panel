import React from 'react';
import './NavBar.css';
import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__left">
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton">
          Edit an Item
          <EditIcon className="MuiSvgIcon-root" />
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton">
          Add items
          <AddIcon className="MuiSvgIcon-root" />
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton">
          Bought items
          <AttachMoneyIcon className="MuiSvgIcon-root" />
        </Button>
      </div>
      <div className="navBar__right">
        <Button
          color="default"
          variant="contained"
          className="navBar__logout"
          onClick={() => auth.signOut()}>
          Log out
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
