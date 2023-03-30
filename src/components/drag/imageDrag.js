import { useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';

const DragImageComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref, {
    dragImage: "mi.png",
    dragImageXOffset: 5,
    dragImageYOffset: 5,
  });

  return (
      <div ref={ref} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        Drag..
        {isDragged && <span>is being dragged</span>}
      </div>
  );
};

export default DragImageComponent;