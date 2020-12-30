import React, { Component } from 'react';

export default class ItemForm extends Component {
    inputIsEmpty = () => {
        return this.props.value === '';
    }

    handleChange = (e) => {
        this.props.handleChange(e.target.value);
    }

    addItem = (e) => {
        this.props.addItem()
    }

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.props.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()} onClick={this.addItem}>Add</button>
                </form>
            </div>
        )
    }
}