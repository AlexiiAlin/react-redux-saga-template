import * as React from 'react';
import {connect} from "react-redux";
import {CreateTopicActions} from "./store/create-topic.actions";
import {Button, TextField} from "@material-ui/core";

interface TopicProps {
  onSave: any,
  title: string,
  titleChange: any,
  resetState: any
}

class CreateTopicContainer extends React.Component<TopicProps, {}> {

  componentWillMount() {
    this.props.resetState();
  }

  saveTopic = (title) => {
    this.props.onSave(title);
  };

  render() {
    return(
      <div style={{marginLeft: 8}}>
        <TextField
          id="standard-textarea"
          label="Title"
          value={this.props.title}
          onChange={this.props.titleChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.saveTopic(this.props.title);
            }
          }}
          fullWidth
          margin="normal"
        />

        <div onClick={() => this.saveTopic(this.props.title)}>
          <Button type="submit" variant='contained'>
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state => {
  return {
    title: state.createTopic.title
  };
});

const mapDispatchToProps = (dispatch => {
  return {
    onSave: (title) => {
      dispatch(CreateTopicActions.saveTopic(title));
    },
    titleChange: (event) => {
      dispatch(CreateTopicActions.changeTitle(event.target.value));
    },
    resetState: () => {
      dispatch(CreateTopicActions.resetState());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopicContainer);
