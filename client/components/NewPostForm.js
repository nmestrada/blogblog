import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newPostThunk} from '../redux/posts'

class NewPostForm extends Component {
    constructor(){
        super();
        this.state ={
            title:'',
            content:''
        }
    }
    handleSubmit = () => {
        event.preventDefault()
        this.props.newPost(this.state)
        this.setState({
            title:'',
            content:''
        }); 
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <>
            <h2>Make a New Post</h2>
            <form onSubmit={() => this.handleSubmit()}>
                <div className="form-group">
                <label htmlFor="rating">Title:</label>
                <input
                    className="form-control"
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    value={this.state.title}
                />
                </div>
                <div className="form-group">
                <label htmlFor="description">Post:</label>
                <textarea
                    className="form-control"
                    onChange={this.handleChange}
                    rows="10" 
                    cols="30"
                    name="content"
                    value={this.state.content}
                />
                </div>
                <button type="submit" className="myButton">
                Submit
                </button>
        </form>
        </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPost: (data) => dispatch(newPostThunk(data))
    }
}

export default connect(null, mapDispatchToProps)(NewPostForm)