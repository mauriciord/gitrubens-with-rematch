import styled from 'styled-components';
import { Input, Form } from 'antd';

import logo from '../../assets/images/logo.png';

export const Cover = styled.div`
  width: calc(100vw - 20px);
  height: calc(100vh - 60px);
  background-color: #fff;
  padding: 30px 5px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  margin: auto;
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

export const SearchForm = styled(Form)`
  display: flex;
  align-self: stretch;
`;

export const FormItem = styled(Form.Item)`
  display: flex;
  align-self: stretch;
  width: 100%;
`;

export const Search = styled(Input.Search)`
  display: flex;
  align-self: stretch;
  width: 100%;
`;
