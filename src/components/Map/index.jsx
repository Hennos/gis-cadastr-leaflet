import React, { Component } from 'react';
import { connect } from 'react-redux';

import L from 'leaflet';

import './Map.css';

import {map as mapFields} from '../../constants/map';
import {requestAccessToken} from '../../actions/map.js';

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

class Map extends Component {
  componentDidMount() {
    this.props.requestAccessToken();
  }

  render() {
    const {accessToken} = this.props;
    return (
      <div>{(accessToken) && <MapView token={accessToken}/>}</div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    accessToken: state.map.get(mapFields.accessToken)
  };
};

const mapDispatchActions = (dispatch) => {
  return {
    requestAccessToken: () => dispatch(requestAccessToken())
  };
};

export default connect(mapStateProps, mapDispatchActions)(Map);