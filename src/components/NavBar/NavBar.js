import React from 'react';
import './NavBar.css';
import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useStateValue } from '../../StateProvider';

function NavBar() {
  const [{ sidebar }, dispatch] = useStateValue();

  const editionHandler = () => {
    dispatch({
      type: 'SET_SIDEBAR',
      sidebar: true,
    });
  };
  const addingHandler = () => {
    dispatch({
      type: 'SET_SIDEBAR',
      sidebar: true,
    });
  };
  const boughtHandler = () => {
    dispatch({
      type: 'SET_SIDEBAR',
      sidebar: true,
    });
  };

  return (
    <div className="navBar">
      <div className="navBar__left">
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton"
          onClick={editionHandler}>
          Edit an Item
          <EditIcon className="MuiSvgIcon-root" />
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton"
          onClick={addingHandler}>
          Add items
          <AddIcon className="MuiSvgIcon-root" />
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="navBar__leftButton"
          onClick={boughtHandler}>
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
