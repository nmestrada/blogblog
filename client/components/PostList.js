import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchAllPosts} from '../redux/posts'
import {Link, withRouter} from 'react-router-dom'

function PostList(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        props.fetchPosts();
      }, []);
    return(
        <ul>
        {props.posts.map(post => <Link to={`/posts/${post.id}`} key={post.id}><li>
            {post.title} - {post.date}
        </li></Link>)}
        </ul>
    ) 
        
}

const mapState = (state) => {
    return {
        posts: state.posts 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchAllPosts())
    }
}
export default withRouter(connect(mapState, mapDispatchToProps)(PostList))