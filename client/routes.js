import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'

import NewPostForm from './components/NewPostForm'
import Root from './components/Root'
import PostList from './components/PostList'
import Projects from './components/Projects'
import SinglePost from './components/SinglePost'
/**
 * COMPONENT
 */
class Routes extends Component {

  render() {
    const isLoggedIn = true;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Root} />
        <Route path="/blog" component={PostList}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/posts/:postId" component={SinglePost}/>
        {isLoggedIn && (
          <Switch>
            <Route path="/newForm" component={NewPostForm} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
