import * as React from 'react';
import {connect} from "react-redux";
import {TopicActions} from "./store/topic.actions";

interface TopicProps {
  match: any,
  onLoad: any,
  topic: any
}

class TopicContainer extends React.Component<TopicProps, {}> {

  componentWillMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    const { topic } = this.props;
    return(
      <h1>{topic && topic.title}</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    topic: state.topic.topic
  }
};

const mapDispatchToProps = (dispatch => {
  return {
    onLoad: (id) => {
      dispatch(TopicActions.loadTopicStart(id));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
