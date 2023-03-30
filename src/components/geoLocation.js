import { Typography } from 'antd';
import useGeolocation from 'beautiful-react-hooks/useGeolocation';

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation();

  onChange(() => {
    console.log('Position changed...');
  });

  return (
    <div>
            <Typography.Title>The current position is:</Typography.Title>
            {geoState.isRetrieving && (<Typography.Paragraph>Retrieving position...</Typography.Paragraph>)}
            {geoState.isSupported && geoState.position && [
              <Typography.Paragraph key={0}>Lat: {geoState.position.coords.latitude}</Typography.Paragraph>,
              <Typography.Paragraph key={1}>Lng: {geoState.position.coords.longitude}</Typography.Paragraph>
            ]}
            </div>
  );
};

export default PositionReporter;