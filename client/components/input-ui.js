import React from 'react';

export default class InputUI extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Start Postcode" onClick={this.props.triggerClick} />
                <input type="text" placeholder="End Postcode" onClick={this.props.triggerClick} />
            </form>
        );
    }
}