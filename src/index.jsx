import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ribbonSrcSuffix = (color) => {
  switch (color) {
    case 'darkblue':
      return 'darkblue_121621';
    case 'green':
      return 'green_007200';
    case 'orange':
      return 'orange_ff7600';
    case 'white':
      return 'white_ffffff';
    case 'gray':
    case 'grey':
      return 'gray_6d6d6d';
    default:
      return 'red_aa0000';
  }
};

const RibbonImage = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  position: absolute;
  top: 0;
  right: ${props => props.position === 'right' && 0};
  left: ${props => props.position === 'left' && 0};
`;

const GitHubRibbon = ({ alt, link, position, color }) => {
  const ribbonSrc = `https://s3.amazonaws.com/github/ribbons/forkme_${position}_${ribbonSrcSuffix(color)}.png`;

  return (
    <a href={link}>
      <RibbonImage src={ribbonSrc} alt={alt} />
    </a>
  );
};

GitHubRibbon.propTypes = {
  alt: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  position: PropTypes.string,
};

GitHubRibbon.defaultProps = {
  alt: 'Fork me on GitHub',
  color: 'darkblue',
  link: 'https://github.com',
  position: 'left',
};

module.exports = GitHubRibbon;
