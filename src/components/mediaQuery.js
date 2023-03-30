import { Tag, Typography, Space, Alert } from 'antd';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

const MediaQueryReporter = () => {
  const isSmall = useMediaQuery('(max-width: 48rem)');
  const isLarge = useMediaQuery('(min-width: 48rem)');

  return (
      <Space direction="vertical">
        <Alert type="info" message="Resize the browser window to see the changes" showIcon />
        <Typography.Paragraph>Small view? <Tag color={isSmall ? 'green' : 'red'}>{isSmall ? 'yes' : 'no'}</Tag></Typography.Paragraph>
        <Typography.Paragraph>Large view? <Tag color={isLarge ? 'green' : 'red'}>{isLarge ? 'yes' : 'no'}</Tag></Typography.Paragraph>
      </Space>
  );
};

export default MediaQueryReporter;