import { Tag, Typography } from 'antd';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';

const ConnectionTest = () => {
  const isOnline = useOnlineState();

  return (
            <Typography.Paragraph>
              Connection status: <Tag color="green">{isOnline ? 'online' : 'offline'}</Tag>
            </Typography.Paragraph>
  );
};

export default ConnectionTest;