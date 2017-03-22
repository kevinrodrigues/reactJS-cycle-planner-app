import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

//Components..
import ButtonGetRoute from "./route-btn";

export default class CycleRoute extends React.Component {

    constructor() {
        super();

        const CYCLE_CONSTANTS = window && window.CYCLEROUTE_CONFIG && window.CYCLEROUTE_CONFIG.config;

        this.state = {
            "apiUrl": `https://transportapi.com/v3/uk/cycle/journey/from/postcode:IG12ET/to/postcode:E16QL.json?app_id=${CYCLE_CONSTANTS.appId}&app_key=${CYCLE_CONSTANTS.appKey}`
        };
    }

    getCycleRoute(url) {
        return $.ajax({
            url: url
        });
    }

    displayDirections() {
        this.getCycleRoute(this.state.apiUrl).done(_.bind(function(data) {
            console.log(_.first(data.routes).instructions);
        }, this)).fail(function() {
            console.log('Failed to fetch resource');
        });
    }

    render() {
        return (
            <div className="cycle-routes">
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
                <ButtonGetRoute onClick={() => this.displayDirections()} />
            </div>
        );
    }
}
