import React from 'react';
import { Input } from 'antd';
import { Cover, Wrapper, Logo } from './shared/common/styles';

const { Search } = Input;

function App() {
  return (
    <Cover>
      <Wrapper>
        <Logo />
        <Search
          placeholder="input a github username"
          enterButton="Search"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </Wrapper>
    </Cover>
  );
}

export default App;
