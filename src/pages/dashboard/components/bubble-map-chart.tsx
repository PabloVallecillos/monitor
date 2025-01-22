import { useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
import { ResponsiveContainer } from 'recharts';
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import { useFilters } from '@/providers/date-filter-provider';

export default function BubbleMapChart() {
  const { filters } = useFilters();
  const data = {
    city: [
      {
        name: 'Madrid',
        coordinates: [-3.7038, 40.4168],
        activeUsers: 25,
        lastActive: '2025-01-10'
      },
      {
        name: 'Barcelona',
        coordinates: [2.1734, 41.3851],
        activeUsers: 20,
        lastActive: '2025-01-15'
      },
      {
        name: 'Valencia',
        coordinates: [-0.3763, 39.4699],
        activeUsers: 15,
        lastActive: '2024-12-25'
      },
      {
        name: 'Sevilla',
        coordinates: [-5.9845, 37.3891],
        activeUsers: 10,
        lastActive: '2024-12-20'
      },
      {
        name: 'Bilbao',
        coordinates: [-2.934985, 43.263012],
        activeUsers: 5,
        lastActive: '2025-01-05'
      },
      {
        name: 'Zaragoza',
        coordinates: [-0.8773, 41.6488],
        activeUsers: 8,
        lastActive: '2025-01-12'
      },
      {
        name: 'Málaga',
        coordinates: [-4.4214, 36.7213],
        activeUsers: 7,
        lastActive: '2024-12-30'
      },
      {
        name: 'A Coruña',
        coordinates: [-8.4152, 43.3623],
        activeUsers: 3,
        lastActive: '2025-01-01'
      },
      {
        name: 'Granada',
        coordinates: [-3.5986, 37.1882],
        activeUsers: 5,
        lastActive: '2025-01-17'
      }
    ],
    minLat: 36.0,
    maxLat: 43.5,
    minLong: -9.5,
    maxLong: 3.2
  };

  const filteredData = useMemo(() => {
    const { startDate, endDate } = filters;

    return {
      ...data,
      city: data.city.filter((city) => {
        const cityDate = new Date(city.lastActive);
        return cityDate >= new Date(startDate) && cityDate <= new Date(endDate);
      })
    };
  }, [filters]);

  const centerLat = (filteredData.minLat + filteredData.maxLat) / 2;
  const distanceLat = filteredData.maxLat - filteredData.minLat;
  const bufferLat = distanceLat * 0.05;
  const centerLong = (filteredData.minLong + filteredData.maxLong) / 2;
  const distanceLong = filteredData.maxLong - filteredData.minLong;
  const bufferLong = distanceLong * 0.15;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <MapContainer
        className="rounded-md"
        center={[centerLat, centerLong]}
        bounds={[
          [filteredData.minLat - bufferLat, filteredData.minLong - bufferLong],
          [filteredData.maxLat + bufferLat, filteredData.maxLong + bufferLong]
        ]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredData.city.map((city, k) => (
          <CircleMarker
            key={k}
            center={[city.coordinates[1], city.coordinates[0]]}
            radius={5 + 5 * Math.log(city.activeUsers)}
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
                  display: 'inline-block',
                  margin: '2.5px 0'
                }}
              >
                <strong>{city.name}</strong>
                <br />
                {`Users: ${city.activeUsers}`}
                <br />
                {`Last Active: ${city.lastActive}`}
              </span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </ResponsiveContainer>
  );
}
