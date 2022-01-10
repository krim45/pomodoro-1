import React from 'react';
import styled from 'styled-components';
import logo from '../../images/original.svg';

const Head = styled.header`
  max-width: 1320px;
  height: 7.5rem;
  display: flex;
  align-items: center;

  img {
    height: 4rem;
    padding: 0 2rem;
  }
`;

const HeaderMobile = () => {
  return (
    <Head>
      <img src={logo} alt="logo"></img>
    </Head>
  );
};

export default HeaderMobile;
