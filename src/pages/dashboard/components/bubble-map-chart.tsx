import 'leaflet/dist/leaflet.css';
import { ResponsiveContainer } from 'recharts';
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet';

const data = {
  city: [
    { name: 'Madrid', coordinates: [-3.7038, 40.4168], activeUsers: 25 },
    { name: 'Barcelona', coordinates: [2.1734, 41.3851], activeUsers: 20 },
    { name: 'Valencia', coordinates: [-0.3763, 39.4699], activeUsers: 15 },
    { name: 'Sevilla', coordinates: [-5.9845, 37.3891], activeUsers: 10 },
    { name: 'Bilbao', coordinates: [-2.934985, 43.263012], activeUsers: 5 },
    { name: 'Zaragoza', coordinates: [-0.8773, 41.6488], activeUsers: 8 },
    { name: 'Málaga', coordinates: [-4.4214, 36.7213], activeUsers: 7 },
    { name: 'A Coruña', coordinates: [-8.4152, 43.3623], activeUsers: 3 },
    { name: 'Granada', coordinates: [-3.5986, 37.1882], activeUsers: 5 }
  ],
  minLat: 36.0,
  maxLat: 43.5,
  minLong: -9.5,
  maxLong: 3.2
};

export default function BubbleMapChart() {
  const centerLat = (data.minLat + data.maxLat) / 2;
  const distanceLat = data.maxLat - data.minLat;
  const bufferLat = distanceLat * 0.05;
  const centerLong = (data.minLong + data.maxLong) / 2;
  const distanceLong = data.maxLong - data.minLong;
  const bufferLong = distanceLong * 0.15;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <MapContainer
        className="rounded-md"
        center={[centerLat, centerLong]}
        bounds={[
          [data.minLat - bufferLat, data.minLong - bufferLong],
          [data.maxLat + bufferLat, data.maxLong + bufferLong]
        ]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.city.map((city, k) => (
          <CircleMarker
            key={k}
            center={[city['coordinates'][1], city['coordinates'][0]]}
            radius={5 + 5 * Math.log(city['activeUsers'])}
            color="#013C51"
            fillColor="#013C51"
            fillOpacity={0.5}
            stroke={false}
          >
            <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
              <span
                style={{
                  fontSize: '12px',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  color: '#013C51',
                  display: 'inline-block'
                }}
              >
                <strong className="mb-4">{`${city['name']}`}</strong>
                <br />
                {`Users: ${city['activeUsers']}%`}
              </span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </ResponsiveContainer>
  );
}
