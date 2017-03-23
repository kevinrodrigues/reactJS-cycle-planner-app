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
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: this.formatPostcode(event.target.value)
        });
    }

    getCycleRoute(url) {
        return $.ajax({
            url: url
        });
    }

    formatPostcode(str) {
        return str.replace(/\s+/g, '').toUpperCase();
    }

    displayDirections() {
        const CYCLE_CONSTANTS = window.CYCLEROUTE_CONFIG && window.CYCLEROUTE_CONFIG.config;

        this.getCycleRoute(`https://transportapi.com/v3/uk/cycle/journey/from/postcode:${this.state.from}/to/postcode:${this.state.to}.json?app_id=${CYCLE_CONSTANTS.appId}&app_key=${CYCLE_CONSTANTS.appKey}`).
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
                <InputUI triggerOnChange={this.handleChange.bind(this)}/>
                <ButtonGetRoute handleClickEvent={this.displayDirections.bind(this)} />
            </div>
        );
    }
}
