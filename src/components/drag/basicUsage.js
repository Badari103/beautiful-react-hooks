import { useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';

const DragComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref);

  return (
      <div ref={ref} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
  );
};

export default DragComponent;