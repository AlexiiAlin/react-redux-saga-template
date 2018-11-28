import * as React from 'react';
import {connect} from "react-redux";
import {TopicActions} from "./store/topic.actions";
import { ApplicationState } from '../../store/application-state';
import { MatchProps, Topic } from '../../shared/interfaces';

interface TopicProps {
  match: MatchProps,
  onLoad: Function,
  topic: Topic
}

class TopicContainer extends React.Component<TopicProps, {}> {

  componentWillMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    const { topic } = this.props;
    return(
      <div style={{marginLeft: 24}}>
        <h1>{topic && topic.title}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    topic: state.topic.topic
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: (id) => {
      dispatch(TopicActions.loadTopicStart(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
