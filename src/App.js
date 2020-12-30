import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemForm from './ItemForm.js';
import ItemsList from './ItemsList.js';

export default class App extends Component {
  state = {
    value: '',
    items: [],
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  }

  addItem = () => {
    this.setState(oldState => ({
      value: '',
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ItemForm value={this.state.value} addItem={this.addItem} handleChange={this.handleChange} />

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}