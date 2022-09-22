// exports.getCalculations = async (req, res, next) => {
//   const {
//     netsales,
//     netsalesprev, //add
//     cogs,
//     cogsprev, //add
//     sga,
//     sgaprev, //add
//     depreciation,
//     depreciationprev, //add
//     intexp,
//     intexpprev, //add
//     taxexp,
//     taxexpprev, //add
//     rnd,
//     fixedassets,
//     fixedassetsprev, //add
//     debt,
//     equity,
//     inventories,
//     inventoriesprev, //add
//     receivables,
//     receivablesprev,
//     cashnow,
//     otherliquid,
//     otherliquidprev, //add
//     payable,
//     payableprev, //add
//     overdraft,
//     overdraftprev, //add
//     intpayable,
//     intpayableprev, //add
//     otherpayable,
//     otherpayableprev, //add
//     cashprev,
//     divsnow,
//   } = req.body;

//   kpis = {
//     operatingMargin: (netsales - (cogs + sga + depreciation)) / netsales,
//     grossMarginGrowthRate: (netsales - cogs) / (netsalesprev - cogsprev) - 1,
//     netProfitGrowthRate:
//       (netsales - cogs - sga - depreciation - intexp - taxexp) /
//         (netsalesprev -
//           cogsprev -
//           sgaprev -
//           depreciationprev -
//           intexpprev -
//           taxexpprev) -
//       1,
//     grossProfitSalesRatio: (netsales - cogs) / netsales,

//     cashReinvestmentRatio:
//       (fixedassets -
//         fixedassetsprev +
//         (inventories +
//           receivables +
//           cashnow +
//           otherliquid -
//           inventoriesprev -
//           receivablesprev -
//           cashprev -
//           otherliquidprev) -
//         (payable +
//           overdraft +
//           intpayable +
//           otherpayable -
//           payableprev -
//           overdraftprev -
//           intpayableprev -
//           otherpayableprev)) /
//       (cashnow - cashprev),

//     rndExpenseRatio: rnd / netsales,

//     intCovRatio: (netsales - depreciation - cogs - sga) / intexp,

//     retainedEarningsTotalAssetsRatio:
//       (netsales - cogs - sga - depreciation - taxexp - intexp - divsnow) /
//       (inventories + receivables + cashnow + otherliquid + fixedassets),

//     currentRatio:
//       (receivables + cashnow + otherliquid + inventories) /
//       (payable + overdraft + otherpayable + intpayable),

//     quickRatio:
//       (receivables + cashnow + otherliquid) /
//       (payable + overdraft + otherpayable + intpayable),

//     cashFlowNetSalesRatio: (cashnow - cashprev) / netsales,
//   };
//   req.body.kpi = kpis;
//   next();
// };
