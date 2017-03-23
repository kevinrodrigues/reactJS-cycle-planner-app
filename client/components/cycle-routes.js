import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

//Components..
import ButtonGetRoute from './route-btn';
import InputUI from './input-ui'

export default class CycleRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "from": "IG12ET",
            "to": "IG12TG"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            from: event.target.value,
            to: event.target.value
        });
    }

    handleClick() {
        console.log(this.state);
    }

    getCycleRoute(url) {
        return $.ajax({
            url: url
        });
    }

    formatPostcodeUserInput(str) {
        return str.replace(/\s+/g, '').toUpperCase();
    }

    getInputValue(event) {
        return console.log(this.formatPostcodeUserInput(event.target.value));
    }

    displayDirections() {
        const CYCLE_CONSTANTS = window.CYCLEROUTE_CONFIG && window.CYCLEROUTE_CONFIG.config;

        this.getCycleRoute(`https://transportapi.com/v3/uk/cycle/journey/from/postcode:${this.state.postcode.from}/to/postcode:${this.state.postcode.to}.json?app_id=${CYCLE_CONSTANTS.appId}&app_key=${CYCLE_CONSTANTS.appKey}`).
        done(_.bind((data) => {
            console.log(_.first(data.routes));
        }, this)).
        fail(() => {
            console.log('Failed to fetch resource');
        });
    }

    render() {
        return (
            <div className="cycle-routes">
                <InputUI triggerOnChange={this.getInputValue.bind(this)}/>
                <ButtonGetRoute handleClickEvent={this.handleClick.bind(this)} />
            </div>
        );
    }
}
