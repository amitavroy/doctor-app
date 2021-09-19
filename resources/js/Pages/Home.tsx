import React from 'react';
import { Button } from 'antd';
import Template from '../components/Template';

const Home = () => {
  let foo: string = 'React';
  const bar: string = 'TypeScript';

  return (
    <Template>
      <p>Render this</p>
    </Template>
  );
};

export default Home;
