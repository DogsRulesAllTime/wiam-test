import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Card, Col, Row, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { AddressWorkInfo } from "../common/adress";
import { useAppContext } from "../hook/use-context";
import axios from "axios";

const Address: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { addressWorkInfo, handleSetAddressWorkInfo } = useAppContext();

  useEffect(() => {
    if (addressWorkInfo) {
      form.setFieldsValue(addressWorkInfo);
    }
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((response) => {
        setCategories(response.data);
      });
  }, [form, addressWorkInfo]);

  const onFinish = (values: AddressWorkInfo) => {
    handleSetAddressWorkInfo(values);
    navigate("/loan-parameters");
  };

  return (
    <Row align="middle" style={{ height: "100vh" }}>
      <Col span={10} offset={7}>
        <Card title={"Персональная информация"}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="workPlace"
              label="Место работы"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите место работы!",
                },
              ]}
            >
              <Select>
                {categories.map((category) => (
                  <Select.Option key={category} value={category}>
                    {category}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Адрес проживания"
              rules={[
                { required: true, message: "Пожалуйста, введите адрес!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Flex gap={20}>
                <Button onClick={() => navigate(-1)}>Назад</Button>
                <Button type="primary" htmlType="submit">
                  Далее
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Address;
