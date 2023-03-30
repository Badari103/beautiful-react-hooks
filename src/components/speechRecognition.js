import React from 'react';
import { Button, Space, Tag, Typography, Input } from 'antd';
import useSpeechRecognition from 'beautiful-react-hooks/useSpeechRecognition';

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { startRecording, transcript, stopRecording, isRecording, isSupported } = useSpeechRecognition();

  return (
      <Space direction="vertical">
        <Typography.Paragraph>
          Supported: <Tag color={isSupported ? 'green' : 'red'}>{isSupported ? 'Yes' : 'No'}</Tag>
        </Typography.Paragraph>
        <Button onClick={!isRecording ? startRecording : stopRecording} type="primary">
          {isRecording ? 'Stop' : 'Start'} recording
        </Button>
        <Typography.Paragraph>
          {transcript}
        </Typography.Paragraph>
      </Space>
  );
};

export default SpeechSynthesisDemo;