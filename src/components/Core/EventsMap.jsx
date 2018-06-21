import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import mapStyle from '../../config/mapStyle.json';

import '../../assets/css/Core/EventsMap.css';

const EventsMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAD_1qSmv3ky6phddfZWmWfsXoUIZrPfc0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => <EventsGoogleMap {...props} />);

class EventsGoogleMap extends PureComponent {
  constructor() {
    super();

    this.renderMarkers = this.renderMarkers.bind(this);
  }

  renderMarkers() {
    const { events } = this.props;

    return (
      <div>
        {events.map(event => (
          <Marker
            key={event._id}
            position={{ lat: event.latitude, lng: event.longitude }}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="ChapterMap">
        <GoogleMap
          defaultZoom={5}
          defaultCenter={{ lat: 46.2276, lng: 2.2137 }}
          defaultOptions={{
            styles: mapStyle,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          {this.renderMarkers()}
        </GoogleMap>
      </div>
    );
  }
}

EventsGoogleMap.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EventsMap;
