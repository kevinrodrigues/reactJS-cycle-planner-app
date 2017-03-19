import React from "react";
import $ from "jquery";

export default class Layout extends React.Component {

    getLiveTimes(url) {
        return $.ajax({
            url: url
        }).then(function(data) {
            console.log(data);
        }).fail(function() {
            console.log('Failed to fetch resource');
        });
    }

    render() {
        return (
            <div className="liveTimes">
                <input type="text" placeholder="From"/>
                <input type="text" placeholder="To"/>
                <button onClick={() => this.getLiveTimes('https://transportapi.com/v3/uk/cycle/journey/from/postcode:IG12ET/to/postcode:E16QL.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97')}>Get Cycle Route</button>
            </div>
        );
    }
}
