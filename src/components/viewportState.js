import { Typography, Tag } from 'antd';
import useViewportState from 'beautiful-react-hooks/useViewportState';

const WindowSizeReporter = () => {
  const { width, height, scrollX, scrollY } = useViewportState();

  return (
    <div>
      <Typography.Title>Window current properties</Typography.Title>
      <Typography.Paragraph>width: <Tag color="green">{width}</Tag></Typography.Paragraph>
      <Typography.Paragraph>height: <Tag color="green">{height}</Tag></Typography.Paragraph>
      <Typography.Paragraph>horizontal scroll: <Tag color="green">{scrollX}</Tag></Typography.Paragraph>
      <Typography.Paragraph>vertical scroll: <Tag color="green">{scrollY}</Tag></Typography.Paragraph>
      </div>
  );
};

export default WindowSizeReporter;