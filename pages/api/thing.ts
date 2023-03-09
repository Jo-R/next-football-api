// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getBurnleyStats } from "@/lib/football";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  response: any; // TODO obvs this changes
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const result = await getBurnleyStats();
  const response = await result.json();
  return res.status(200).json({ response });
};

export default handler;

// {
//     get: 'teams/statistics',
//     parameters: { team: '44', season: '2022', league: '4365' },
//     errors: [],
//     results: 11,
//     paging: { current: 1, total: 1 },
//     response: {
//       league: {
//         id: null,
//         name: null,
//         country: null,
//         logo: null,
//         flag: null,
//         season: null
//       },
//       team: {
//         id: 44,
//         name: 'Burnley',
//         logo: 'https://media.api-sports.io/football/teams/44.png'
//       },
//       form: null,
//       fixtures: {
//         played: [Object],
//         wins: [Object],
//         draws: [Object],
//         loses: [Object]
//       },
//       goals: { for: [Object], against: [Object] },
//       biggest: {
//         streak: [Object],
//         wins: [Object],
//         loses: [Object],
//         goals: [Object]
//       },
//       clean_sheet: { home: 0, away: 0, total: 0 },
//       failed_to_score: { home: 0, away: 0, total: 0 },
//       penalty: { scored: [Object], missed: [Object], total: 0 },
//       lineups: [],
//       cards: { yellow: [Object], red: [Object] }
//     }
