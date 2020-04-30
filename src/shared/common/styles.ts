import styled from 'styled-components';
import { backgroundImages, between, cover } from 'polished';

import logo from '../../assets/images/logo.png';

export const Cover = styled.div`
  ${cover()};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1024px;
  flex: 1;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
}))`
  max-width: 450px;
  width: 220px;
  height: auto;
  margin-bottom: 20px;
`;
