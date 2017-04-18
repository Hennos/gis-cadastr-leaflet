import React, { Component } from 'react';

import L from 'leaflet';
import 'leaflet.pm';

import './MapView.css';
import 'leaflet.pm/dist/leaflet.pm.css';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null,
      dataLayer: null
    };

    this._mapNode = null;
  }

  componentDidMount() {
    if (!this.state.map) {
      this.init(this._mapNode);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.data) && nextProps.data.length) {
      let dataLayer = L.geoJSON(nextProps.data).addTo(this.state.map);
      this.setState({dataLayer: dataLayer});
    }
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
    config.pmControls = {
      position: 'topleft',
      drawPolygon: true,
      editPolygon: true,
      deleteLayer: true
    };
    config.drawMode = {
      snappable: true,
      snapDistance: 20,
      hintlineStyle: {
        color: 'red',
        dashArray: [5, 5]
      },
      cursorMarker: false,
      finishOnDoubleClick: false
    };
    config.editMode = {
      draggable: true,
      snappable: true,
      snapDistance: 20
    };
    return config;
  }

  init(id) {
    if (this.state.map) {
      return;
    }

    const config = this.getMapConfig();

    let map = L.map(id, config.params);
    map.pm.addControls(config.pmControls);

    map.pm.Draw.enable('Poly', config.drawMode);

    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    this.setState({map, tileLayer});
  }

  render() {
    return (
      <div ref={(node) => this._mapNode = node} id="mapid"></div>
    )
  }
}

export default MapView;