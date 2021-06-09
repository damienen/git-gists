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
        }
    }

    setGists = (gists) => {
        this.setState({
            gists: gists,
        })
    }

    render() {
        return (
            <div className="App">
                <SearchForm gistSetter={this.setGists}/>
                {this.state.gists.map((item,index)=>{
                    return <GistView gist={item} key={index}/>
                })
                }
            </div>
        );
    }

}

export default App;
