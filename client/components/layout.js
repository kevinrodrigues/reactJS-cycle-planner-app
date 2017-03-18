import React from "react";
import $ from "jquery";

export default class Layout extends React.Component {

    getLiveTimes(url) {
        return $.ajax({
            url: "https://transportapi.com/v3/uk/train/station/WAT/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&darwin=false&train_status=passenger"
        }).then(function(data) {
            // $('.times').text(JSON.stringify(data));
            console.log(data);
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



