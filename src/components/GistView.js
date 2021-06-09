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
            let files = null;
            files = Object.values(this.props.gist.files)
            return (
                <div className="collapsible">
                    <div className="collapsibleRow">
                        <div>{this.props.gist.id}</div>
                        <div>{files.map(this.renderBadges)}</div>
                        <div>{this.props.gist.created_at}</div>
                    </div>
                </div>
            )
        }
    }

    renderBadges = (file, index) => {
        return <span key={index} className="badge">{file.language}</span>
    }
}


export default GistView