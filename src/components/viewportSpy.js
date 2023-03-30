import { useRef } from 'react';
import { Space, Typography, Tag } from 'antd';
import useViewportSpy from 'beautiful-react-hooks/useViewportSpy';

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref);

  return (
      <Space direction="vertical">
        <div ref={ref} style={{ padding: 20, background: '#FF6B6C', borderRadius: 5 }}>
          Observed element
        </div>
       {/* { console.log(isVisible)} */}
        <Typography.Paragraph>
          is the observed element in viewport?
          <Tag color={isVisible ? 'green' : 'red'}>{isVisible ? 'yes' : 'no'}</Tag>
        </Typography.Paragraph>
      </Space>
  );
};

export default ViewportSpyComponent;