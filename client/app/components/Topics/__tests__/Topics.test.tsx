import {TopicsContainer} from '../TopicsContainer';
import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Topic } from '../../../shared/interfaces';


describe('Topics', () => {
  let props;

  beforeEach(() => {
    props = {
      topics: [{
        id: 1,
        title: 'TestTitle1',
        userName: 'TestUsername1'
      }, {
        id: 2,
        title: 'TestTitle2',
        userName: 'TestUsername2'
      }] as Topic[],
      isLoading: false,
      onLoad: () => {},
      deleteTopic: () => {}
    };
  });

  it('should render correctly, and match snapshot when it has topics, and isLoading is false', () => {

    const component = shallow(<TopicsContainer {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly, and match snapshot when it has topics, and isLoading is true', () => {
    props.isLoading = true;
    const component = shallow(<TopicsContainer {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly, and match snapshot when it does not have topics and isLoading is false', () => {
    props.topics = [];
    const component = shallow(<TopicsContainer {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly, and match snapshot when it does not have topics and isLoading is true', () => {
    props.topics = [];
    props.isLoading = true;
    const component = shallow(<TopicsContainer {...props}/>);

    expect(component).toMatchSnapshot();
  });

});
