'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(props => props.trim())
    .reduce((acc, prop) => {
      const [property, value] = prop.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
