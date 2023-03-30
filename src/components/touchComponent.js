import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouch from 'beautiful-react-hooks/useTouch';

const TouchReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [touches, { onTouchStart, onTouchEnd }] = useTouch(ref);

  onTouchStart(() => setShowCoords(true));
  onTouchEnd(() => setShowCoords(false));

  return (
            <div ref={ref}>
              <Space direction="vertical">
                <Alert message="Swipe this box to get the event coordinates" type="info" showIcon />
                {showCoords && touches.length > 0 && ([
                  <Tag color="green">Touch X: {touches[0].clientX}</Tag>,
                  <Tag color="green">Touch Y: {touches[0].clientY}</Tag>
                ])}
              </Space>
            </div>
  );
};

export default TouchReporter;