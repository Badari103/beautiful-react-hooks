import React from 'react';
import { Button, Space, Input } from 'antd';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis';

const SpeechSynthesisDemoBasic = () => {
  const [name, setName] = React.useState('');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`);
  const onChange=(e)=>{
    setName(e.target.value);
  }

  return (
            <Space direction="vertical">
              <Input  onChange={onChange} placeholder="Name" />
              <Button onClick={speak} type="primary">Say hello...</Button>
            </Space>
  );
};

export default SpeechSynthesisDemoBasic;