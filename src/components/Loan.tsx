import React, { useEffect ,useState} from 'react';
import { Form, Button, Slider, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoanParameters} from '../common/loan'
import ConfirmationModal from './ConfirmationModal';
import { useAppContext } from '../hook/use-context';

const Loan: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loanParameters, setLoanParameters, personalInfo } = useAppContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (loanParameters) {
      form.setFieldsValue(loanParameters);
    }
  }, [form, loanParameters]);

  const onFinish = (values:  LoanParameters) => {
    setLoanParameters(values);
    axios.post('https://dummyjson.com/products/add', {
      title: `${personalInfo?.firstName} ${personalInfo?.lastName}`
    }).then(response => {
      console.log(response.data);
      setIsModalVisible(true);
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigate('/');
  };

  return (
    <Card>
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="loanAmount" label="Сумма займа" rules={[{ required: true, message: 'Пожалуйста, выберите сумму займа!' }]}>
        <Slider marks={{200:'200', 1000:'1000'}}min={200} max={1000} step={100} />
      </Form.Item>
      <Form.Item name="loanDuration" label="Срок займа" rules={[{ required: true, message: 'Пожалуйста, выберите срок займа!' }]}>
        <Slider marks={{10:'10', 30:'30'}} min={10} max={30} step={1} />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <Button type="primary" htmlType="submit">Подать заявку</Button>
      </Form.Item>
    </Form>
    {personalInfo && loanParameters && (
        <ConfirmationModal
          open={isModalVisible}
          onClose={handleCloseModal}
          lastName={personalInfo.lastName}
          firstName={personalInfo.firstName}
          loanAmount={loanParameters.loanAmount}
          loanDuration={loanParameters.loanDuration}
        />)}
    </Card>
  )
};

export default Loan;




