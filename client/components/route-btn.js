import React from 'react';


export default class ButtonGetRoute extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClickEvent}>Get Cycle Route</button>
        );
    }
}
