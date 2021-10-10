import {
  ClockCircleOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import route from 'ziggy-js';

import IBreadcrumb from '../../interfaces/IBreadcrumb';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  breadcrumbs?: Array<IBreadcrumb>;
}

const Template: FC<Props> = ({ children, breadcrumbs }) => {
  useEffect(() => {
    // console.log(route().current());
  }, []);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState([`${route().current()}`]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={!menuIsOpen}>
        <div className="logo" onClick={() => setMenuIsOpen(!menuIsOpen)} />
        <Menu
          theme="dark"
          defaultSelectedKeys={currentRoute}
          mode="inline"
          selectedKeys={currentRoute}
        >
          <Menu.Item key="home" icon={<PieChartOutlined />}>
            <InertiaLink href={route('home')}>Home</InertiaLink>
          </Menu.Item>
          <Menu.Item key="locations" icon={<DesktopOutlined />}>
            <InertiaLink href={route('locations')}>Locations</InertiaLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<ClockCircleOutlined />}
            title="Appointments"
          >
            <Menu.Item key="appointment/list">
              <InertiaLink href={route('appointments.list')}>
                View appointments
              </InertiaLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Patients">
            <Menu.Item key="patients/list">
              <InertiaLink href={route('patients.list')}>
                View patients
              </InertiaLink>
            </Menu.Item>
            <Menu.Item key="patients/add">
              <InertiaLink href={route('patients.add')}>Add new</InertiaLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbs && (
              <>
                {breadcrumbs.map((breadcrumb) => {
                  return (
                    <Breadcrumb.Item key={breadcrumb.name}>
                      {breadcrumb.link != '' ? (
                        <InertiaLink href={breadcrumb.link}>
                          {breadcrumb.name}
                        </InertiaLink>
                      ) : (
                        <>{breadcrumb.name}</>
                      )}
                    </Breadcrumb.Item>
                  );
                })}
              </>
            )}
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Template;
