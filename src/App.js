import React from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
import GistView from "./components/GistView";

require('dotenv').config()

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: [],
            expandedGists: []
        }
    }

    setGists = (gists) => {
        let expandedGists = new Array(gists.length).fill(false)
        this.setState({
            gists: gists,
            expandedGists: expandedGists
        })
    }

    changeGistVisibility = (index) => {
        let expG = this.state.expandedGists
        expG[index] = !expG[index]
        this.setState({
            ...this.state.gists,
            expandedGists: expG
        })
    }

    render() {
        return (
            <div className="App">
                <SearchForm gistSetter={this.setGists}/>
                {this.state.gists.map((item, index) => {
                    return <GistView gist={item} i={index} key={index} expanded={this.state.expandedGists[index]}
                                     changeGistVisibility={this.changeGistVisibility}/>
                })
                }
            </div>
        );
    }

}

export default App;
