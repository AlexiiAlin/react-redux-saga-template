import * as React from 'react';
import {connect} from "react-redux";
import {CreateTopicActions} from "./store/create-topic.actions";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { ApplicationState } from '../../store/application-state';
import { MatchProps } from '../../shared/interfaces';

interface TopicProps {
  onSave: Function,
  onUpdate: Function,
  onLoad: Function,
  resetState: Function,
  titleChange: any,
  title: string,
  isLoading: boolean,
  isSaving: boolean,
  match: MatchProps,
}

class CreateTopicContainer extends React.Component<TopicProps, {}> {

  componentWillMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.onLoad(this.props.match.params.id);
    } else {
      this.props.resetState();
    }
    console.log('componentWillMount')
  }

  componentWillUpdate(nextProps: Readonly<TopicProps>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('componentWillUpdate')
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount')
  }

  saveTopic(title) {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.onUpdate(title, parseInt(this.props.match.params.id));
    } else {
      this.props.onSave(title);
    }

    console.log('saveTopic')
  };

  render() {

    const renderTitle = this.props.isLoading
      ? <CircularProgress style={{margin: '16px 0 16px 20px'}}/>
      : <TextField
        id="standard-textarea"
        label="Title"
        value={this.props.title}
        onChange={this.props.titleChange}
        style={{width: '30%'}}
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />;

    return(
      <form style={{marginLeft: 24}} onSubmit={(event) => {
        event.preventDefault();
        return this.saveTopic(this.props.title)
      }} >
        {renderTitle}

        <div>
          <Button type="submit" variant='contained'>
            Submit
          </Button>
          {this.props.isSaving && <CircularProgress style={{width: 20, height: 20, position: 'absolute', marginTop: 8, marginLeft: 8}}/>}
        </div>

      </form>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    title: state.createTopic.title,
    isLoading: state.createTopic.isLoading,
    isSaving: state.createTopic.isSaving
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: (title) => {
      dispatch(CreateTopicActions.saveTopic(title));
    },
    onUpdate: (title, id) => {
      dispatch(CreateTopicActions.updateTopic(title, id));
    },
    titleChange: (event) => {
      dispatch(CreateTopicActions.changeTitle(event.target.value));
    },
    resetState: () => {
      dispatch(CreateTopicActions.resetState());
    },
    onLoad: (id) => {
      dispatch(CreateTopicActions.loadTopicStart(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopicContainer);
