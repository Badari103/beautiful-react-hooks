import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouse from 'beautiful-react-hooks/useMouse';

const MouseReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref);
  const [isAboveCursor,setIsAboveCursor ]=useState(false); // added by me 

  onMouseEnter(() => {setShowCoords(true); setIsAboveCursor(true)});
  onMouseLeave(() => {setShowCoords(false);setIsAboveCursor(false)});

  return (
    <div>
            <div ref={ref}>
              <Space direction="vertical">
                <Alert message="Move mouse over this box to get its current coordinates" type="info" showIcon />
                <Tag color="green">ClientX: {position.clientX}</Tag>
                <Tag color="green">ClientY: {position.clientY}</Tag>
              </Space>
            </div>
            <div>
                {isAboveCursor && "Yes the cursor is hovering our div"}
            </div>
            </div>
  );
};

export default MouseReporter;