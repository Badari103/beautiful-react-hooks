import { useState, useRef } from 'react';
import useEvent from 'beautiful-react-hooks/useEvent';

const Event = () => {
  const targetRef = useRef()
  const [clicksNo, setClicksNo] = useState(0)
  const onTargetClick = useEvent(targetRef, 'click', {
    capture: true,
    passive: true,
    once: true
  });// in this the 3rd parameter is optional

  onTargetClick((event) => {
    setClicksNo(clicksNo + 1);
  });

  return (
            <div ref={targetRef}>
              Click on this text to increase the number of clicks: {clicksNo}
            </div>
  );
};

export default Event;