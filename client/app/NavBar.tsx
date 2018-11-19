import * as React from 'react';
import {AppBar, SvgIcon, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import './style.css';

interface IProps{
}

export class NavBar extends React.Component<IProps, {}> {
    render() {
        return(
            <React.Fragment>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Link to="/">
                            <SvgIcon color="default" style={{marginRight: 8}}>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </SvgIcon>
                        </Link>
                        <Typography variant="h6" color="inherit">
                            <Link to="/topics">Norum - Not a forum</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}
