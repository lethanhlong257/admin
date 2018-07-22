const LOCALHOST2000 = 'http://localhost:2000';
const LOCALHOST3000 = 'http://localhost:3000';

const APIs = {
  apiBookingCount: `${LOCALHOST2000}/api/booking/count`,
  apiUserCount: `${LOCALHOST3000}/api/user/count`,
  apiPostCount: `${LOCALHOST3000}/api/post/count`,
  apiPlayfieldCount: `${LOCALHOST2000}/api/playfield/count`,
  apiBookingCountByHour: `${LOCALHOST2000}/api/booking/count/by/hour`,
  apiBookingTop10: `${LOCALHOST2000}/api/booking/top10`,
  apiBookingShowAll: `${LOCALHOST2000}/api/booking/show/all`,
  apiUserShowAll: `${LOCALHOST3000}/api/user/show/all`,
  apiPostShowAll: `${LOCALHOST2000}/api/post/show/all`,
  apiPlayfieldShowAll: `${LOCALHOST2000}/api/playfield/show/all`,
  apiUserByID: `${LOCALHOST3000}/api/user/show/ID/`,

  apiHistoryBookingByUser: `${LOCALHOST2000}/history/booking/`,
};

export { APIs, LOCALHOST2000, LOCALHOST3000 };
