/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    height: "8px",
    padding: "0px",
    radius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0px",
    radius: "4px",
  },
  large: {
    height: "24px",
    padding: "4px",
    radius: "8px",
  }
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{ '--padding': sizes[size].padding, '--radius': sizes[size].radius }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ '--width': value + '%', '--height': sizes[size].height, '--padding': sizes[size].padding }} />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  /* Crop corners when close to the limit */.
  overflow: hidden;
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  `
export default ProgressBar;
