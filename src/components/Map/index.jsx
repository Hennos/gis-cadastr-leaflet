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
    this.props.requestAccessToken();
  }

  onRequestGeoData() {
    this.props.requestGeoJSON({mark: true})
  }

  render() {
    const {accessToken} = this.props;
    return (
      <div className="map">
        {(accessToken) ? <MapView token={accessToken}/> : null}
      </div>
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
    requestGeoJSON: (pattern) => {
      dispatch(requestGeoJSON(pattern))
    },
    requestAccessToken: () => {
      dispatch(requestAccessToken())
    }
  };
};

export default connect(mapStateProps, mapDispatchActions)(Map);