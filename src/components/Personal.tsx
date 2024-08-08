import React, { useEffect } from "react";
import { Form, Input, Button, Select, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { PersonalInfo } from "../common/personal";
import { useAppContext } from "../hook/use-context";
import MaskedInput from "../ui/MaskedInput";

const Personal: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { personalInfo, handleSetPersonalInfo } = useAppContext();

  useEffect(() => {
    if (personalInfo) {
      form.setFieldsValue(personalInfo);
    }
  }, [form, personalInfo]);

  const onFinish = (values: PersonalInfo) => {
    handleSetPersonalInfo(values);
    navigate("/address-work");
  };

  return (
    <Row align="middle" style={{ height: "100vh" }}>
      <Col span={10} offset={7}>
        <Card title={"Персональная информация"}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="phone"
              label="Телефон"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите номер телефона!",
                },
                {
                  pattern: /^\d{4} \d{3} \d{2} \d{2}$/,
                  message: "Неправильный формат номера телефона!",
                },
              ]}
            >
              <MaskedInput />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="Имя"
              rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Фамилия"
              rules={[
                { required: true, message: "Пожалуйста, введите фамилию!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Пол"
              rules={[{ required: true, message: "Пожалуйста, выберите пол!" }]}
            >
              <Select>
                <Select.Option value="male">Мужской</Select.Option>
                <Select.Option value="female">Женский</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Далее
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Personal;
