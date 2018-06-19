import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import * as animationData from '../../assets/animations/loader.json';
import '../../assets/css/Core/Loader.css';

class Loader extends PureComponent {
  constructor() {
    super();

    this.state = { isStopped: false, isPaused: false };

    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    if (!this.props.loading) {
      this.props.onFinish();
    }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="Loader__container">
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          eventListeners={[
            {
              eventName: 'loopComplete',
              callback: this.handleComplete,
            },
          ]}
        />
      </div>
    );
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default Loader;
