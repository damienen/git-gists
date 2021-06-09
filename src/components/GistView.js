import React from "react";
import axios from "axios";

class GistView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gist: null,
            loading: false
        }
    }

    render() {
        if (this.state.loading === true) {
            return ('Loading')
        } else {
            let files = Object.values(this.props.gist.files)
            return (
                <span className="gistContainer">
                    <div className="collapsible" onClick={this.handleCollapse}>
                        <div>{this.props.gist.id}</div>
                        <div>{files.map(this.renderBadges)}</div>
                        <div>{this.props.gist.created_at}</div>
                    </div>
                    <div className="content"
                         style={{display: this.props.expanded === true ? 'block' : 'none'}}>
                        {this.state.gist != null ? Object.values(this.state.gist.files).map(this.renderFiles) : 'Loading'}
                        <br/>
                        <br/>
                        Forks:
                        <div className="forksContent">
                            {this.state.gist != null ? this.state.gist.forks.slice(0, 3).map(this.renderForks) : 'Loading'}
                        </div>
                    </div>
                </span>

            )
        }
    }

    renderBadges = (file, index) => {
        return <span key={index} className="badge">{file.language}</span>
    }

    handleCollapse = (event) => {
        if (this.state.gist == null || this.state.gist.id !== this.props.gist.id) {
            axios.get(this.props.gist.url).then(res => {
                this.setState({gist: res.data})
                this.props.changeGistVisibility(this.props.i)
            })
        } else {
            this.props.changeGistVisibility(this.props.i)
        }
    }

    renderFiles = (file, index) => {
        return <span key={index}>
            <h3 key={index}>{file.filename}
                <span key={index} className="badge">{file.language}</span>
            </h3>
            <span className="fileContent">{file.content}</span>
            </span>
    }

    renderForks = (fork, index) => {
        return <p key={index}>
            {fork.user.login}
            <img className="avatar" src={fork.user.avatar_url} alt="avatar of the user"/>
        </p>
    }
}


export default GistView