import * as React from 'react';
import {connect} from "react-redux";
import {CreateQuestionActions} from "./store/create-question.actions";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { ApplicationState } from '../../store/application-state';
import { MatchProps } from '../../shared/interfaces';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

interface TopicProps {
  title: string,
  description: string,
  url: string,
  isLoading: boolean,
  isSaving: boolean,
  descriptionChange: Function,
  urlChange: Function,
  titleChange: Function,
  onLoad: Function,
  onSave: Function,
  onUpdate: Function,
  resetState: Function,
  match: MatchProps,
}

class CreateQuestionContainer extends React.Component<TopicProps, {}> {

  componentWillMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.onLoad(this.props.match.params.id);
    } else {
      this.props.resetState();
    }
  }

  saveTopic(title, description, url) {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.onUpdate(title, description, url, parseInt(this.props.match.params.id));
    } else {
      this.props.onSave(title, description, url);
    }
  };

  render() {

    const renderTitle = this.props.isLoading
      ? <CircularProgress style={{margin: '16px 0 16px 20px'}}/>
      : <React.Fragment>
          <div>
            <TextValidator
              id="title"
              label="Title*"
              name="title"
              value={this.props.title}
              onChange={this.props.titleChange}
              style={{width: '30%'}}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              validators={['required']}
              errorMessages={['This field is required']}/>
          </div>

          <div>
            <TextValidator
              id="description"
              label="Description"
              name="description"
              value={this.props.description}
              onChange={this.props.descriptionChange}
              style={{width: '30%'}}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              multiline/>
          </div>

          <div>
            <TextValidator
              id="url"
              label="Image Url"
              name="url"
              value={this.props.url}
              onChange={this.props.urlChange}
              style={{width: '30%'}}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}/>
          </div>
      </React.Fragment>;

    return(
      <ValidatorForm style={{marginLeft: 24}} onSubmit={(event) => {
        event.preventDefault();
        return this.saveTopic(this.props.title, this.props.description, this.props.url)
      }} >
        {renderTitle}

        <div>
          <Button type="submit" variant='contained'>
            Submit
          </Button>
          {this.props.isSaving && <CircularProgress style={{width: 20, height: 20, position: 'absolute', marginTop: 8, marginLeft: 8}}/>}
        </div>

      </ValidatorForm>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    title: state.createTopic.title,
    description: state.createTopic.description,
    url: state.createTopic.url,
    isLoading: state.createTopic.isLoading,
    isSaving: state.createTopic.isSaving
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: (title, description, url) => {
      dispatch(CreateQuestionActions.saveTopic(title, description, url));
    },
    onUpdate: (title, description, url, id) => {
      dispatch(CreateQuestionActions.updateTopic(title, description, url, id));
    },
    titleChange: (event) => {
      dispatch(CreateQuestionActions.changeTitle(event.target.value));
    },
    descriptionChange: (event) => {
      dispatch(CreateQuestionActions.changeDescription(event.target.value));
    },
    urlChange: (event) => {
      dispatch(CreateQuestionActions.changeUrl(event.target.value));
    },
    resetState: () => {
      dispatch(CreateQuestionActions.resetState());
    },
    onLoad: (id) => {
      dispatch(CreateQuestionActions.loadTopicStart(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionContainer);
