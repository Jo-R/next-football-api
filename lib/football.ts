const ENDPOINT =
  "https://v3.football.api-sports.io/teams/statistics?team=44&season=2022&league=40";
const key = process.env.FOOTBALL_API_KEY;

export const getBurnleyStats = async () => {
  return fetch(ENDPOINT, {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${key}`,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  });
};
