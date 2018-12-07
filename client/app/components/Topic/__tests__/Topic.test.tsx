import { TopicContainer } from '../TopicContainer';
import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Topic } from '../../../shared/interfaces';


describe('Topic', () => {
  let props;

  beforeEach(() => {
    props = {
      topic: {
        id: 1,
        title: 'TestTitle1',
        userName: 'TestUsername1',
        comments: [{
          id: 100,
          description: 'TestDescription',
          user: {
            id: 1000,
            username: 'TestUserName2'
          }
        }]
      } as Topic,
      isLoading: false,
      match: {
        params: {
          id: 100
        }
      },
      onLoad: () => {},
      addComment: () => {},
      deleteComment: () => {},
    };
  });

  it('should render correctly, and match snapshot', () => {

    const component = shallow(<TopicContainer {...props}/>);

    expect(component).toMatchSnapshot();
  });

});
