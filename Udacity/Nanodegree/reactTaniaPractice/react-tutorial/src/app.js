import React, { Component } from 'react';
import Table from './table';
import Form from './form';

class App extends Component {
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    state = {
        characters: []
    };

    render() {
        // const characters = [];

        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}    
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;