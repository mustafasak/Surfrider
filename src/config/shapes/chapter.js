import PropTypes from 'prop-types';

export const chapterShape = {
  userGroups: PropTypes.arrayOf(PropTypes.string),
  _id: PropTypes.string,
  name: PropTypes.string,
  slug: PropTypes.string,
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};