import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--borderBottom': '1px solid black',
    '--fontSize': 14 + 'px',
    '--height': 24 / 16 + 'rem',
    '--iconSize': 16 + 'px',
    iconSize: 16,
  },
  large: {
    '--borderBottom': '2px solid black',
    '--fontSize': 18 + 'px',
    '--height': 36 / 16 + 'rem',
    '--iconSize': 24 + 'px',
    iconSize: 24,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={styles}>
      <Icon id={icon} size={styles.iconSize} />
    </IconWrapper>
    <TextInput {...delegated} style={styles}/>
  </Wrapper>
  )
};

const Wrapper = styled.label`
   display: block;
   position: relative;
   color: ${COLORS.gray700};

   &:hover {
      color: ${COLORS.black};
    }
`;


const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconSize);
`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--border-bottom);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
`;

export default IconInput;
