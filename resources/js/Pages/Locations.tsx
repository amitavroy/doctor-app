import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, List, Row } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IBreadcrumb from '../interfaces/IBreadcrumb';

interface Props {
  locations: Array<any>;
}

const Locations: React.FC<Props> = ({ locations }) => {
  return (
    <Template breadcrumbs={breadcrumbs}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Locations</Divider>
        <Col>
          <Row justify="end">
            <InertiaLink href={route('locations.add')}>
              <Button type="primary">Add location</Button>
            </InertiaLink>
          </Row>
        </Col>
        {locations.length > 0 &&
          locations.map((location) => {
            return (
              <List.Item key={location.id}>
                <List.Item.Meta
                  title={
                    <InertiaLink href={route('locations.view', { location })}>
                      {location.name}
                    </InertiaLink>
                  }
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

const breadcrumbs: Array<IBreadcrumb> = [
  { name: 'Home', link: route('home') },
  { name: 'Locations', link: '' },
];
