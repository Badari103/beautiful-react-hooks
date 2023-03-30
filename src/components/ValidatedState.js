import { Input, Space, Typography } from 'antd';
import useValidatedState from 'beautiful-react-hooks/useValidatedState';

const passwordValidator = (password) => password.length > 3;

const ValidatedField = () => {
  const [password, setPassword, validation] = useValidatedState(passwordValidator);
  console.log(89);
  return (
      <Space direction="vertical">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          status={!validation.valid && 'error'}
          placeholder="Insert password"
        />
        <Typography.Paragraph>
          {validation.valid ? 'Password is valid' : 'Password is too short'}
        </Typography.Paragraph>
      </Space>
  );
};

export default ValidatedField;