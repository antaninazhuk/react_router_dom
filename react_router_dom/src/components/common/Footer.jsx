import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
text-align: center;
background: #000;
color: #fff;
padding: 10px 0`

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>Created at {year}</FooterWrapper>
  )
}
