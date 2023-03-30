import { useState, useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';
import useDropZone from 'beautiful-react-hooks/useDropZone';

const DragZoneComponent = () => {
  const dragRef = useRef();
  const dropRef = useRef();
  const isDragged = useDrag(dragRef, { transfer: { data: 'foo' }, transferFormat: 'text' });
  const { isOver, onDrop } = useDropZone(dropRef);
  const [data, setData] = useState();

  onDrop((event) => {
    event.preventDefault();
    const nextData = event.dataTransfer.getData('text');
    setData(nextData);
  });

  return (
    <div>
      <div ref={dragRef} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        {!isDragged && <span>Drag to send data</span>}
        {isDragged && <span>is being dragged</span>}
      </div>
      <div ref={dropRef} style={{ padding: '20px 0', marginTop: '4rem', background: isOver ? '#BE496E' : 'white' }}>
        {!data && 'Drop here to receive data'}
        {data && `Received: ${data}`}
      </div>
      </div>
  );
};

export default DragZoneComponent;