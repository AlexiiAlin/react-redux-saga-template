import * as React from 'react';
import {CircularProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {TopicsActions} from "./store/topics.actions";
import {Row} from "../../shared/interfaces";

interface TopicsProps {
    onSomeClick: any,
    nr: any,
    topics: Row[],
    onLoad: any,
    dogUrl: any,
    isLoading: boolean
}

class TopicsContainer extends React.Component<TopicsProps, {}> {

    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const { topics } = this.props;

        const table = this.props.isLoading
            ? <CircularProgress />
            : <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topics.map(topic => {
                        return (
                            <TableRow key={topic.id}>
                                <TableCell component="th" scope="row">
                                    {topic.id}
                                </TableCell>
                                <TableCell><Link to={`/topics/${topic.id}`}>{topic.title}</Link></TableCell>
                                <TableCell>
                                        <span onClick={this.props.onSomeClick} style={{marginRight: 8, cursor: 'pointer'}}>
                                            <b>Here it goes</b>
                                        </span>{topic.userName}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>;

        const dog = this.props.isLoading
            ? <CircularProgress />
            :  <img src={this.props.dogUrl} style={{width: 100, height: 100, marginLeft: 8, marginBottom: 4}}/>;

        return(
            <Paper>
                { table }

                <h1 style={{marginLeft: 8}}>This is the nr: {this.props.nr}</h1>

                { dog }
            </Paper>
        )
    }
}

const mapStateToProps = (state : any) => {
    return {
        topics: state.topics.topics,
        nr: state.topics.nr,
        dogUrl: state.topics.url,
        isLoading: state.topics.isLoading
    }
};

const mapDispatchToProps = (dispatch : any) => {
    return {
        onSomeClick: (someParam : any) => {
            dispatch(TopicsActions.someMethod(someParam));
        },
        onLoad: () => {
            dispatch(TopicsActions.loadTopicsStarted());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);