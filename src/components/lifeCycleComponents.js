import { useCallback } from 'react';
import { Alert } from 'antd';
import useLifecycle from 'beautiful-react-hooks/useLifecycle';

const LifeCycleComponent = () => {
  const onMount = useCallback(() => {
    console.log('Component did mount');
  }, []);

  const onUnmount = useCallback(() => {
    console.log('Component will unmount');
  }, []);

  useLifecycle(onMount, onUnmount);

  return (
      <Alert icon message="Please check the javascript console to read mount/unmount messages" />
  );
};

export default LifeCycleComponent;