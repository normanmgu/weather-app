import React from 'react';
import './App.scss';


async function GetTemp() {
  const APIKEY="c570c325ef0e117472d3a16d662290a8";
  const long = "38.44";
  const lat = "94.04";
  let latitude;
  

  let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${APIKEY}`)
    // .then(response => response.json())
    // .then(data => console.log(data.coord.lat));

  let result = await res.json();
  latitude = result.coord.lat;
  console.log(latitude)

  return lat;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
    }
  }

  async componentDidMount() {
    let lat = await GetTemp();
    this.setState({lat: lat});

  }

  render () {
    return (
      <body>
        <div className="top-part">
          <div className="tempature">{this.state.lat}</div>
          <div className="weather">sunny</div>
        </div>
        <div className="bottom-part"></div>
      </body>
    );
  }
};

export default App;
