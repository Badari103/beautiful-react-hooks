import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onWindowScroll = useWindowScroll();

  onWindowScroll(useThrottledCallback((event) => {
    setScrollY(window.scrollY);
  }));

  return (
      <Typography.Paragraph>
        current window vertical scroll: <Tag color="green">{scrollY}</Tag>
      </Typography.Paragraph>
  );
};

export default WindowScrollReporter;