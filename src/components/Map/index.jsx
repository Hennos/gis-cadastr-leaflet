import React, { Component } from 'react';
import { connect } from 'react-redux';

import {map as mapFields} from '../../constants/map';
import {
  requestAccessToken,
  requestGeoJSON
} from '../../actions/map.js';

import MapView from '../MapView/index.jsx';

class Map extends Component {
  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    this.props.requestAccessToken();
    this.props.requestGeoJSON();
  }

  render() {
    const {accessToken, mapData} = this.props;
    return (
      <div className="map">
        {(accessToken) ? <MapView token={accessToken} data={mapData}/> : null}
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    accessToken: state.map.get(mapFields.accessToken),
    mapData: state.map.get(mapFields.mapData).toArray()
  };
};

const mapDispatchActions = (dispatch) => {
  return {
    requestGeoJSON: (pattern) => {
      dispatch(requestGeoJSON(pattern))
    },
    requestAccessToken: () => {
      dispatch(requestAccessToken())
    }
  };
};

export default connect(mapStateProps, mapDispatchActions)(Map);