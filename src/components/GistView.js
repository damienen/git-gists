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
                         style={{display: this.props.expanded === true ? 'block' : 'none'}}>{this.props.gist.url}</div>
                </span>

            )
        }
    }

    renderBadges = (file, index) => {
        return <span key={index} className="badge">{file.language}</span>
    }

    handleCollapse = (event) => {
        this.props.changeGistVisibility(this.props.i)
    }
}


export default GistView