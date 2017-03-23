import React from 'react';

export default class InputUI extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Start Postcode" onChange={this.props.triggerOnChange} />
                <input type="text" placeholder="End Postcode" onChange={this.props.triggerOnChange} />
            </form>
        );
    }
}