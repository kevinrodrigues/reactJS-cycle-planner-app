import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

//Components..
import ButtonGetRoute from './route-btn';
import InputUI from './input-ui'

export default class CycleRoute extends React.Component {

    constructor(props) {
        super(props);

        const CYCLE_CONSTANTS = window && window.CYCLEROUTE_CONFIG && window.CYCLEROUTE_CONFIG.config;

        let defaults = {
            "postcode": {
                "from": "IG12ET",
                "to": "IG12TG"
            }
        };

        this.state = {
            "apiUrl": `https://transportapi.com/v3/uk/cycle/journey/from/postcode:${defaults.postcode.from}/to/postcode:${defaults.postcode.to}.json?app_id=${CYCLE_CONSTANTS.appId}&app_key=${CYCLE_CONSTANTS.appKey}`,
            valueStart: "Enter Start",
            valueEnd: "Enter End"
        };
    }

    getCycleRoute(url) {
        return $.ajax({
            url: url
        });
    }

    getUiValue(event) {
        return event.target.value;
    }

    displayDirections() {
        this.getCycleRoute(this.state.apiUrl).
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
                <InputUI triggerClick={this.getUiValue.bind(this)}/>
                <ButtonGetRoute onClick={() => this.displayDirections()} />
            </div>
        );
    }
}
