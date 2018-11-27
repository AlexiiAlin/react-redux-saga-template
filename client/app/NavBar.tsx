import * as React from 'react';
import {AppBar, SvgIcon, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import './style.css';
import { AccountCircle } from '@material-ui/icons';

interface NavBarProps{
  userName?: string,
  isAuthenticated?: boolean
}

export class NavBar extends React.Component<NavBarProps, {}> {
  render() {

    return(
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to="/" style={{width: '5%', display: 'flex', justifyContent: 'center'}}>
              <SvgIcon style={{marginRight: 8, color: 'white'}}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </Link>
            <Typography variant="h6" style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
              <Link to="/topics" style={{color: 'white'}}>Norum - Not a forum</Link>
            </Typography>
            <Link to='/login' style={{width: '5%', display: 'flex', justifyContent: 'center', color: 'white'}}>
              <AccountCircle/>;
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
