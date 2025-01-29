import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://67920e08cf994cc680487b16.mockapi.io',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: `Bearer YOUR_API_KEY`,
  }
});

api.interceptors.request.use(
  (config) => {
    // Modify request before send
    return config;
  },
  (error) => {
    // Handle errors before send
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle success responses
    return response;
  },
  (error) => {
    // Handle errors on response
    console.log('Response error:', error);
    return Promise.reject(error);
  }
);

export async function getStudents(
  offset: number,
  pageLimit: number,
  country: string
) {
  try {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
        (country ? `&search=${country}` : '')
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getOverviewCards(startDate: Date, endDate: Date) {
  try {
    const res = await api.get(
      'https://67920e08cf994cc680487b16.mockapi.io/overview-cards'
    );
    return res.data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getOverview(startDate: Date, endDate: Date) {
  try {
    const res = await api.get(
      'https://67920e08cf994cc680487b16.mockapi.io/overview'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBubbleChart(startDate: Date, endDate: Date) {
  try {
    const cities = await api.get(
      'https://679224c0cf994cc68048e010.mockapi.io/bubble-chart-cities'
    );
    return {
      city: cities.data,
      minLat: -90,
      maxLat: 90,
      minLong: -180,
      maxLong: 180
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getVerticalStackedBarChart(
  startDate: Date,
  endDate: Date
) {
  try {
    const res = await api.get(
      'https://679224c0cf994cc68048e010.mockapi.io/vertical-stackedbar-chart'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getLineChart(startDate: Date, endDate: Date) {
  try {
    const res = await api.get(
      'https://679246b7cf994cc680496ed6.mockapi.io/line-chart'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getActivitySummaryChart(startDate: Date, endDate: Date) {
  try {
    const res = await api.get(
      'https://679246b7cf994cc680496ed6.mockapi.io/activity-summary-chart'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPieChart(startDate: Date, endDate: Date) {
  try {
    const res = await api.get(
      'https://6799ff46747b09cdcccd4d17.mockapi.io/pie-chart'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getHorizontalStackedBarChart(
  startDate: Date,
  endDate: Date
) {
  try {
    const res = await api.get(
      'https://6799ff46747b09cdcccd4d17.mockapi.io/horizontal-stacked-bar-chart'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
