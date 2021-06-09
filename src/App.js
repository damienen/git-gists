import React from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
import GistView from "./components/GistView";
import axios from "axios";

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
                <button type="button" onClick={this.loadMoreGists}
                        style={{display: this.state.gists.length % 30 === 0 && this.state.gists.length !== 0 ? 'block' : 'none'}}>
                    Load more gists
                </button>
            </div>
        );
    }

    loadMoreGists() {
        axios.get(`https://api.github.com/users/${this.state.username}/gists?page=${this.state.gists.length / 30}`)
            .then(res => {
                let oldGists = this.state.gists
                let gists = []
                gists.push(oldGists)
                gists.push(res.data)
                this.setState({
                    gists: gists
                })
            })
    }
}

export default App;
