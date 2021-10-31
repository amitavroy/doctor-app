import {
  ClockCircleOutlined,
  DesktopOutlined,
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
    menuGroups.has(route().current())
      ? setDefaultSubMenu([menuGroups.get(route().current())])
      : setDefaultSubMenu(['']);
  }, []);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [defaultSubMenu, setDefaultSubMenu] = useState(['']);
  const [currentRoute, setCurrentRoute] = useState([`${route().current()}`]);
  const menuGroups = new Map();
  menuGroups.set('appointments.list', 'sub1');
  menuGroups.set('patients.list', 'sub2');
  menuGroups.set('patients.add', 'sub2');

  const handleMenuActive = (event: any) => {
    if (event.keyPath.length > 1) {
      setCurrentRoute([event.keyPath[1]]);
    }
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={!menuIsOpen}>
        <div className="logo" onClick={() => setMenuIsOpen(!menuIsOpen)} />
        <Menu
          theme="dark"
          defaultOpenKeys={defaultSubMenu}
          mode="inline"
          selectedKeys={currentRoute}
          onClick={handleMenuActive}
          multiple
        >
          <Menu.Item key="home" icon={<PieChartOutlined />}>
            <InertiaLink href={route('home')}>Home</InertiaLink>
          </Menu.Item>
          <Menu.Item key="doctor.dashboard" icon={<PieChartOutlined />}>
            <InertiaLink href={route('doctor.dashboard')}>
              Doctor Dashboard
            </InertiaLink>
          </Menu.Item>
          <Menu.Item key="locations" icon={<DesktopOutlined />}>
            <InertiaLink href={route('locations')}>Locations</InertiaLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<ClockCircleOutlined />}
            title="Appointments"
          >
            <Menu.Item key="appointments.list">
              <InertiaLink href={route('appointments.list')}>
                View appointments
              </InertiaLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Patients">
            <Menu.Item key="patients.list">
              <InertiaLink href={route('patients.list')}>
                View patients
              </InertiaLink>
            </Menu.Item>
            <Menu.Item key="patients.add">
              <InertiaLink href={route('patients.add')}>Add new</InertiaLink>
            </Menu.Item>
          </SubMenu>
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
