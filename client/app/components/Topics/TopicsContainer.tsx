import * as React from 'react';
import {
  Button,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {TopicsActions} from "./store/topics.actions";
import {Topic} from "../../shared/interfaces";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Edit } from "@material-ui/icons";
import history from '../../history';
import { ApplicationState } from '../../store/application-state';

interface TopicsProps {
  deleteTopic: Function,
  onLoad: Function
  topics: Topic[],
  isLoading: boolean
}

export class TopicsContainer extends React.Component<TopicsProps, {}> {

  componentWillMount() {
    this.props.onLoad();
  }

  deleteTopic(id) {
    this.props.deleteTopic(id);
  }

  editTopic(id) {
    history.push(`/createTopic/${id}`);
  }

  render() {
    console.log('PROPS : ', this.props);

    const { topics } = this.props;

    const tableContent = topics.length === 0
      ?
        !this.props.isLoading && <TableRow key={10000} style={{height: 340}}>
          <TableCell style={{fontStyle: 'italic', color: '#DADCDF', position: 'relative', left: 'calc(50% - 70px)'}}>
            No active topics
          </TableCell>
        </TableRow>
      : topics.map(topic => {
        return (
          <TableRow key={topic.id}>
            <TableCell component="th" scope="row">
              {topic.id}
            </TableCell>
            <TableCell>
              <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
            </TableCell>
            <TableCell>
              {topic.userName}
            </TableCell>
            <TableCell style={{width: 25, padding: '0 0 0 80px'}}>
              <div onClick={() => this.editTopic(topic.id)} style={{cursor: 'pointer'}}>
                <Edit/>
              </div>
            </TableCell>
            <TableCell style={{width: 25}}>
              <div onClick={() => this.deleteTopic(topic.id)} style={{cursor: 'pointer'}}>
                <DeleteForeverIcon/>
              </div>
            </TableCell>
          </TableRow>
        );
      });

    return(
      <div>
        <Link to='/createTopic'>
          <Button variant='contained' style={{marginLeft: 24, marginTop: 24}}>
              Create topic
          </Button>
        </Link>

        <Paper>
          {this.props.isLoading && <LinearProgress/>}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Username</TableCell>
                <TableCell style={{width: 25}}/>
                <TableCell style={{width: 25}}/>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableContent}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    topics: state.topics.topics,
    isLoading: state.topics.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(TopicsActions.loadTopicsStarted());
    },
    deleteTopic: (id: number) => {
      dispatch(TopicsActions.deleteTopic(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
