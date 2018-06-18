import PropTypes from 'prop-types';

export const userShape = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  isAdmin: PropTypes.bool,
}