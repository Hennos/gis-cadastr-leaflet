import React, { Component } from 'react';

import L from 'leaflet';

import './MapView.css';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null
    };

    this._mapNode = null;
  }

  componentDidMount() {
    if (!this.state.map) {
      this.init(this._mapNode);
    }
  }

  componentWillUpdate(nextProps) {
    if (!(Array.isArray(nextProps.data) && nextProps.data.length)) {
      return;
    }
    L.geoJSON(nextProps.data).addTo(this.state.map);
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  getMapConfig() {
    let config = {};
    config.params = {
      center: [59.939095, 30.315868],
      zoom: 10
    };
    config.tileLayer = {
      uri: "https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      params: {
        attribution: '&copy; Mapbox Street contributors',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: this.props.token
      }
    };
    return config;
  }

  init(id) {
    if (this.state.map) {
      return;
    }

    const config = this.getMapConfig();

    let map = L.map(id, config.params);
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    this.setState({map, tileLayer});
  }

  render() {
    return (
      <div ref={(node) => this._mapNode = node} id="mapid"/>
    )
  }
}

export default MapView;