import React from "react";
import axios from "axios";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({username: event.target.value});
    }

    handleSubmit = (event) => {
        axios.get(`https://api.github.com/users/${this.state.username}/gists`)
            .then(res => {
                let gists = res.data
                this.props.gistSetter(gists)
            })
        event.preventDefault();
    }

    /*async componentDidMount() {
        await axios.get('https://api.github.com/gists')
            .then(res => {
                this.setState({gists: res.data})
            })
    }*/

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="username form">
                <input type='text' value={this.state.username} onChange={this.handleChange} className="username input" placeholder="Insert username here..."/>
                <input type='submit' value='Submit' className="username submit"/>
            </form>
        )
    }
}

export default SearchForm