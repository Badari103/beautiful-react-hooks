import { useState } from 'react';
import { Tag, Typography } from 'antd';
import useValueHistory from 'beautiful-react-hooks/useValueHistory';
import useInterval from 'beautiful-react-hooks/useInterval';

const ValueHistory = () => {
  const [count, setCount] = useState(0);
  const countHistory = useValueHistory(count);

  useInterval(() => setCount(1 + count), 500);

  return (
    <div>
      <Typography.Paragraph>Count: <Tag color="blue">{count}</Tag></Typography.Paragraph>
      <Typography.Paragraph>The history of the `count` state is:</Typography.Paragraph>
      <Tag color="green">
        {countHistory.join(', ')}
      </Tag>
      </div>
  );
};

export default ValueHistory;