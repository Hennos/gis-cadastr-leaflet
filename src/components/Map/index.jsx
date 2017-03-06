import React, { Component } from 'react';
import { connect } from 'react-redux';

import L from 'leaflet';

import './Map.css';

let config = {};
config.params = {
  center: [59.938, 30.31],
  zoom: 10
};
config.tileLayer = {
  uri: "https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  params: {
    attribution: '&copy; Mapbox Street contributors',
    maxZoom: 18,
    id: 'mapbox.streets'
  }
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null
    };

    this._mapNode = null;
  }

  componentDidMount() {
    this.getData()
      .then(() => {
        if (!this.state.map) {
          this.init(this._mapNode);
        }
      });
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  init(id) {
    if (this.state.map) {
      return;
    }

    let map = L.map(id, config.params);
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    this.setState({map, tileLayer});
  }

  getData() {
    return fetch("http://127.0.0.1:1337/echo?token")
      .then((response) => response.json())
      .then((data) => {
        config.tileLayer.params.accessToken = data.accessToken;
      });
  }

  render() {
    return (
      <div ref={(node) => this._mapNode = node} id="mapid" />
    )
  }
}

const mapStateProps = (state) => {
  return {};
};

const mapDispatchActions = (dispatch) => {
  return {};
};

export default connect(mapStateProps, mapDispatchActions)(Map);