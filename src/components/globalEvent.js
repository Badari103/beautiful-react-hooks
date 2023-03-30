import { useState } from 'react';
import { Typography, Alert, Tag, Space } from 'antd';
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent';

const GlobalEvent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const options = { capture: true, passive: true, once: true };
  const onWindowResize = useGlobalEvent('resize', options);

  onWindowResize((event) => {
    setWindowWidth(window.innerWidth);
  });

  return (
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window to update the state" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{windowWidth}</Tag><br />
        </Typography.Paragraph>
      </Space>
  );
};

export default GlobalEvent;