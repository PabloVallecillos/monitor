import 'leaflet/dist/leaflet.css';
import { ResponsiveContainer } from 'recharts';
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import { useFilters } from '@/providers/date-filter-provider';
import { useGetBubbleChart } from '@/pages/dashboard/queries/queries';

export default function BubbleMapChart() {
  const { filters } = useFilters();
  const { data, isLoading, isError } = useGetBubbleChart(
    filters.startDate,
    filters.endDate
  );

  if (!data || data.length === 0 || isError || isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <span className="text-lg font-semibold text-gray-500">
          No data available for the selected date range
        </span>
      </div>
    );
  }

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
            center={[city.coordinates[1], city.coordinates[0]]}
            radius={5 + 5 * Math.log(city.activeUsers)}
            color="#2525B9"
            fillColor="#2525B9"
            fillOpacity={0.5}
            stroke={false}
          >
            <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
              <span
                style={{
                  fontSize: '12px',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  color: '#2525B9',
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
