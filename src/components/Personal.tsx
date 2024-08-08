// src/components/PersonalInfoForm.tsx
import React, { useEffect } from 'react';
import { Form, Input, Button, Select, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PersonalInfo } from '../common/personal'
import { useAppContext } from '../hook/use-context';

const Personal: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { personalInfo, setPersonalInfo } = useAppContext();

  useEffect(() => {
    if (personalInfo) {
      form.setFieldsValue(personalInfo);
    }
  }, [form, personalInfo]);

  const onFinish = (values: PersonalInfo) => {
    setPersonalInfo(values);
    navigate('/address-work');
  };

  return (
    <Card>
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="phone" label="Телефон" rules={[{ required: true, message: 'Пожалуйста, введите телефон!' }]}>
        <Input type="tel" placeholder="0XXX XXX XXX" />
      </Form.Item>
      <Form.Item name="firstName" label="Имя" rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Фамилия" rules={[{ required: true, message: 'Пожалуйста, введите фамилию!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Пол" rules={[{ required: true, message: 'Пожалуйста, выберите пол!' }]}>
        <Select>
          <Select.Option value="male">Мужской</Select.Option>
          <Select.Option value="female">Женский</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Далее</Button>
      </Form.Item>
    </Form>
    </Card>
  )
};

export default Personal;
