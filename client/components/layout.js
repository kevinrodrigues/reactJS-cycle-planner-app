import React from "react";
import $ from "jquery";

export default class Layout extends React.Component {

    getDefaults() {
        return {

        }
    }

    getLiveTimes(url) {
        return $.ajax({
            url: "https://transportapi.com/v3/uk/cycle/journey/from/postcode:IG62HJ/to/postcode:IG61EG.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97"
        }).then(function(data) {
            console.log(data);
        }).fail(function() {
            console.log('Failed to fetch resource');
        });
    }

    render() {
        return (
            <div className="liveTimes">
                <div className="times"></div>
                <button onClick={this.getLiveTimes.bind(this)}>Get Times</button>
            </div>
        );
    }
}



