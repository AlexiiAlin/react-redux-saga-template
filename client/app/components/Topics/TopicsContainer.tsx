import * as React from 'react';
import {Button, CircularProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {TopicsActions} from "./store/topics.actions";
import {Row} from "../../shared/interfaces";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Edit, Remove } from "@material-ui/icons";
import history from '../../history';

interface TopicsProps {
  incrementValue: any,
  nr: any,
  topics: Row[],
  onLoad: any,
  dogUrl: any,
  isLoadingTopics: boolean,
  isLoadingDog: boolean,
  deleteTopic: any,
  editTopic: any
}

class TopicsContainer extends React.Component<TopicsProps, {}> {

  componentWillMount() {
    this.props.onLoad();
  }

  incrementValue() {
    console.log('WTF DUDE');
    this.props.incrementValue();
  }

  deleteTopic(id) {
    this.props.deleteTopic(id);
  }

  editTopic(id) {
    history.push(`/createTopic/${id}`);
  }

  render() {
    const { topics } = this.props;

    const table = this.props.isLoadingTopics
      ? <CircularProgress />
      : <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Username</TableCell>
            <TableCell style={{width: 25}}></TableCell>
            <TableCell style={{width: 25}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topics.map(topic => {
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
          })}
        </TableBody>
      </Table>;

    const dog = this.props.isLoadingDog
      ? <CircularProgress />
      :  <img src={this.props.dogUrl} style={{width: 100, height: 100, marginLeft: 8, marginBottom: 4}}/>;

    return(
      <div>
        <Link to='/createTopic'>
          <Button variant='contained' style={{marginLeft: 8, marginTop: 8}}>
              Create topic
          </Button>
        </Link>

        <Paper>
          { table }
        </Paper>

        <div onClick={() => this.incrementValue()}>
          <Button variant='contained' style={{marginLeft: 8, marginTop: 8}}>
            Increment
          </Button>
        </div>

        <h1 style={{marginLeft: 8}}>This is the nr: {this.props.nr}</h1>

        { dog }
      </div>
    )
  }
}

const mapStateToProps = (state : any) => {
  return {
    topics: state.topics.topics,
    nr: state.topics.nr,
    dogUrl: state.topics.url,
    isLoadingTopics: state.topics.isLoadingTopics,
    isLoadingDog: state.topics.isLoadingDog
  }
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    incrementValue: (someParam : any) => {
      dispatch(TopicsActions.incrementNumber(someParam));
    },
    onLoad: () => {
      dispatch(TopicsActions.loadTopicsStarted());
    },
    deleteTopic: (id: number) => {
      dispatch(TopicsActions.deleteTopic(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);

// 7<92SsHZ6T/t
