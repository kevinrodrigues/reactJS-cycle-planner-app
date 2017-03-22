import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

//Components..
import ButtonGetRoute from "./route-btn";

export default class CycleRoute extends React.Component {

    constructor() {
        super();

        this.state = {
            "config": {
                "appId": "03bf8009",
                "appKey": "d9307fd91b0247c607e098d5effedc97"
            }
        };
    }

    getCycleRoute(url) {
        return $.ajax({
            url: url
        });
    }

    displayDirections() {
        this.getCycleRoute('https://transportapi.com/v3/uk/cycle/journey/from/postcode:IG12ET/to/postcode:E16QL.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97').done(_.bind(function(data) {
            console.log(_.first(data.routes).instructions);
            console.log(this.state);
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
