import React from 'react';

export default class InputUI extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="from" placeholder="Start Postcode" onChange={this.props.triggerOnChange} />
                <input type="text" name="to" placeholder="End Postcode" onChange={this.props.triggerOnChange} />
            </form>
        );
    }
}