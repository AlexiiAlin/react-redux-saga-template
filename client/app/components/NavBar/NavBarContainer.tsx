import * as React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import { NavBarActions } from './store/navBar.actions';
import { AppBar, SvgIcon, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

interface IProps{
  userName: string,
  isAuthenticated: boolean,
  loadUserProfile: any
}

class NavBarContainer extends React.Component<IProps, {}> {

  componentWillMount() {
    this.props.loadUserProfile();
  }

  render() {

    const loginInfo = this.props.isAuthenticated ? this.props.userName : <AccountCircle/>;

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
            <Link to={this.props.isAuthenticated ? '/logout' :'/login'} style={{width: '5%', display: 'flex', justifyContent: 'center', color: 'white'}}>
              {loginInfo}
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userProfile.userName,
    isAuthenticated: state.userProfile.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserProfile: () => {
      dispatch(NavBarActions.loadProfile())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
