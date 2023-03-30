import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';

const PreviousValue = () => {
  const [seconds, setSeconds] = useState(0);
  const prevSeconds = usePreviousValue(seconds);

  useInterval(() => setSeconds(1 + seconds), 1000);

  return (
    <div>
      <Typography.Paragraph>
        {seconds}s
      </Typography.Paragraph>
      <Typography.Paragraph>
        The previous value of the state 'seconds' was: <Tag color="green">{prevSeconds}</Tag>
      </Typography.Paragraph>
      </div>
  );
};

export default PreviousValue;