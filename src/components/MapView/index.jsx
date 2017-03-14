import React, { Component } from 'react';
import { connect } from 'react-redux';

import L from 'leaflet';

import {map as mapFields} from '../../constants/map';

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

  componentWillUnmount() {
    this.state.map.remove();
  }

  getMapConfig() {
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

const mapStateProps = (state) => {
  return {
    mapData: state.map.get(mapFields.mapData)
  };
};

export default connect(mapStateProps)(MapView);