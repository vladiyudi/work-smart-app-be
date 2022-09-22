const {companySchema,kpiRecord} = require("../Schemas/companySchema");
exports.updateDB = async (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
 
  try {

    const newAnnualRecord = new companySchema(newEntry);
    console.log(newAnnualRecord)
    await newAnnualRecord.save();
    console.log("hi")
    await res.send(newAnnualRecord)
      // .message(`the new fin record for ${newEntry.year} has been saved`);
  } catch (error) {
    // res.status(500).send(error);
  }
};

exports.calculateKPI = async (res) => {
  try {
    const mostRecentRecord = await companySchema
      .find()
      .sort({ year: -1 })
      .limit(1);
    console.log(mostRecentRecord);
    const user=mostRecentRecord.user
    const year=mostRecentRecord.year
    const netsales1 = mostRecentRecord.netsales;
    const cogs1 = mostRecentRecord.cogs;
    const sga1 = mostRecentRecord.sga;
    const depreciation1 = mostRecentRecord.depreciation;
    const intexp1 = mostRecentRecord.intexp;
    const taxexp1 = mostRecentRecord.taxexp;
    const rnd1 = mostRecentRecord.rnd;
    const fixedassets1 = mostRecentRecord.fixedassets;
    const debt1 = mostRecentRecord.debt;
    const equity1 = mostRecentRecord.equity;
    const inventories1 = mostRecentRecord.inventories;
    const receivables1 = mostRecentRecord.receivables;
    const cashnow1 = mostRecentRecord.cashnow;
    const otherliquid1 = mostRecentRecord.otherliquid;
    const payable1 = mostRecentRecord.payable;
    const overdraft1 = mostRecentRecord.overdraft;
    const intpayable1 = mostRecentRecord.intpayable;
    const otherpayable1 = mostRecentRecord.otherpayable;
    const divsnow1 = mostRecentRecord.divsnow;
    const previousRecord = await companySchema
      .find()
      .sort({ year: -2 })
      .limit(1);
    const netsales2 = previousRecord.netsales;
    const cogs2 = previousRecord.cogs;
    const sga2 = mostRecentRecord.sga;
    const depreciation2 = previousRecord.depreciation;
    const intexp2 = previousRecord.intexp;
    const taxexp2 = previousRecord.taxexp;
    const rnd2 = previousRecord.rnd;
    const fixedassets2 = previousRecord.fixedassets;
    const debt2 = previousRecord.debt;
    const equity2 = previousRecord.equity;
    const inventories2 = previousRecord.inventories;
    const receivables2 = previousRecord.receivables;
    const cashnow2 = previousRecord.cashnow;
    const otherliquid2 = previousRecord.otherliquid;
    const payable2 = previousRecord.payable;
    const overdraft2 = previousRecord.overdraft;
    const intpayable2 = previousRecord.intpayable;
    const otherpayable2 = previousRecord.otherpayable;
    const divsnow2 = previousRecord.divsnow;
    newKpiEntry = { 
      user:user,
      year:year,
      operatingMargin: (netsales1 - (cogs1 + sga1 + depreciation1)) / netsales1,
      grossMarginGrowthRate: (netsales1 - cogs1) / (netsales2 - cogs2) - 1,
      netProfitGrowthRate:
        (netsales1 - cogs1 - sga1 - depreciation1 - intexp1 - taxexp1) /
          (netsales2 - cogs2 - sga2 - depreciation2 - intexp2 - taxexp2) -
        1,
      grossProfitSalesRatio: (netsales1 - cogs1) / netsales1,

      cashReinvestmentRatio:
        (fixedassets1 -
          fixedassets2 +
          (inventories1 +
            receivables1 +
            cashnow1 +
            otherliquid1 -
            inventories2 -
            receivables2 -
            cashnow2 -
            otherliquid2) -
          (payable1 +
            overdraft1 +
            intpayable1 +
            otherpayable1 -
            payable2 -
            overdraft2 -
            intpayable2 -
            otherpayable2)) /
        (cashnow1 - cashnow2),

      rndExpenseRatio: rnd1 / netsales1,

      intCovRatio: (netsales1 - depreciation1 - cogs1 - sga1) / intexp1,

      retainedEarningsTotalAssetsRatio:
        (netsales1 -
          cogs1 -
          sga1 -
          depreciation1 -
          taxexp1 -
          intexp1 -
          divsnow1) /
        (inventories1 + receivables1 + cashnow1 + otherliquid1 + fixedassets1),

      currentRatio:
        (receivables1 + cashnow1 + otherliquid1 + inventories1) /
        (payable1 + overdraft1 + otherpayable1 + intpayable1),

      quickRatio:
        (receivables1 + cashnow1 + otherliquid1) /
        (payable1 + overdraft1 + otherpayable1 + intpayable1),

      cashFlowNetSalesRatio: (cashnow1 - cashnow2) / netsales1,
    };
  const kpi=await kpiRecord(newKpiEntry)
  await kpi.save()
  res.send(kpi[0])

  } catch (erroe) {
  res.status(500).send("can't send the company's kpis")  }
};
