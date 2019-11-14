import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import {fetchPost} from '../redux/singlePost'


function SinglePost(props) {
    const post = props.post;
    const postId = props.match.params.postId;
    useEffect(() => {
        props.fetchPost(postId);
      }, []);

//fetch single post

    return(
        <div id="post-container"> 
            <h2>{post.title}</h2>
            <h4>{post.date}</h4>
            <div id="post-content">
                <p>{post.content}</p>
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}

const mapState = state => {
    return {
        post: state.singlePost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId))
    }
}
export default withRouter(connect(mapState, mapDispatchToProps)(SinglePost));