import * as React from 'react';
import Main from '../templates/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { Helmet } from 'react-helmet';
import * as counterActions from '../../redux/actions/counter';
import * as postActions from '../../redux/actions/post';

const frontload = async props => await props.PostActions.requestPost(1);

class Post extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.counter !== nextProps.counter) {
      this.getPost(nextProps.counter);
    }
    return true;
  }

  getPost = async id => {
    const { PostActions } = this.props;
    PostActions.requestPost(id);
  };

  render() {
    const { post, counter, CounterActions } = this.props;

    return (
      <div>
        <Helmet>
          <title>post</title>
        </Helmet>
        <h1>{counter}</h1>
        <button onClick={CounterActions.incrementAsync}>+</button>
        <button onClick={CounterActions.decrementAsync}>-</button>
        {post.pending ? (
          <h2>Loading...</h2>
        ) : post.error ? (
          <h1>Error!</h1>
        ) : (
          <div>
            <h1>{post.data.title}</h1>
            <p>{post.data.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Main(
  connect(
    state => ({
      counter: state.counter,
      post: state.post.toJS()
    }),
    dispatch => ({
      CounterActions: bindActionCreators(counterActions, dispatch),
      PostActions: bindActionCreators(postActions, dispatch)
    })
  )(
    frontloadConnect(frontload, {
      onMount: true,
      onUpdate: false
    })(Post)
  )
);
