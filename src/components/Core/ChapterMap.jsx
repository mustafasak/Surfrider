import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

import { chapterShape } from '../../config/shapes/chapter';
import mapStyle from '../../config/mapStyle.json';

import '../../assets/css/Core/ChapterMap.css';

import Block from "./Block";
import BlockContent from "./BlockContent";

const ChapterMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAD_1qSmv3ky6phddfZWmWfsXoUIZrPfc0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => <ChapterGoogleMap {...props} />);

class ChapterGoogleMap extends PureComponent {
  constructor() {
    super();

    this.state = {
      openMarker: ''
    };

    this.renderMarkers = this.renderMarkers.bind(this);
  }

  onToggleOpen(id) {
      this.setState({
          openMarker : id
      });
  }

  onCloseClick() {
      this.setState({
          openMarker : ''
      });
  }

  renderMarkers() {
    const { chapters } = this.props;
    const filteredChapters = chapters.filter(
      chapter => chapter.longitude && chapter.latitude,
    );

    return (
      <div>
        {filteredChapters.map(chapter => (
          <Marker
            key={chapter._id}
            position={{ lat: chapter.latitude, lng: chapter.longitude }}
            className="Marker"
            icon='/img/marker.png'
            onClick={() => this.onToggleOpen(chapter._id)}
          >
            {this.state.openMarker === chapter._id &&
              <InfoBox
                onCloseClick={() => this.onCloseClick}
                options={{ enableEventPropagation: true }}
              >
                <Block title={`Antenne de ${chapter.name}`} >
                  <BlockContent label="Nom de l'antenne" value={chapter.name ? chapter.name : ''} />
                  <BlockContent label="Adresse" value={chapter.address ? chapter.address : ''} />
                </Block>
              </InfoBox> }
          </Marker>
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

ChapterGoogleMap.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
};

export default ChapterMap;
