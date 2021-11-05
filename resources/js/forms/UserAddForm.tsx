import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Form, Input, Space } from 'antd';
import form, { FormInstance } from 'antd/lib/form';
import React from 'react';
import route from 'ziggy-js';

interface Props {
  form: FormInstance<any>;
  onFinish: (values: any) => any;
}

const UserAddForm: React.FC<Props> = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={(values) => onFinish(values)}
    >
      <Form.Item
        label="User name"
        name="name"
        rules={[{ required: true, message: 'Enter the name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email address"
        name="email"
        rules={[{ required: true, message: 'Enter the email address' }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Enter the Password' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space size={18}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <InertiaLink href={route('user.list')}>Back</InertiaLink>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default UserAddForm;
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
