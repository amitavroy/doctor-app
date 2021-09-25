import React from 'react';
import { Row, Col, Divider, List } from 'antd';

import Template from '../components/Template';

interface Props {
  locations: Array<any>;
}

const Locations: React.FC<Props> = ({ locations }) => {
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Locations</Divider>
        <p>
          <button>Add location</button>
        </p>
        {locations.length > 0 &&
          locations.map((location) => {
            return (
              <List.Item key={location.id}>
                <List.Item.Meta
                  title={location.name}
                  description={location.short_address}
                ></List.Item.Meta>
              </List.Item>
            );
          })}
      </div>
    </Template>
  );
};

export default Locations;
