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

exports.calculateKPI = async (req,res) => {
  try {
    const mostRecentRecord = await companySchema
      .find({userid:req.body.userid})
      .find({year:2022})
      .sort({ year: -1 })
      .limit(1);
    console.log(mostRecentRecord);
    const user=mostRecentRecord[0].user
    const year=mostRecentRecord[0].year
    const netsales1 = mostRecentRecord[0].netsales;
    const cogs1 = mostRecentRecord[0].cogs;
    const sga1 = mostRecentRecord[0].sga;
    const depreciation1 = mostRecentRecord[0].depreciation;
    const intexp1 = mostRecentRecord[0].intexp;
    const taxexp1 = mostRecentRecord[0].taxexp;
    const rnd1 = mostRecentRecord[0].rnd;
    const fixedassets1 = mostRecentRecord[0].fixedassets;
    const debt1 = mostRecentRecord[0].debt;
    const equity1 = mostRecentRecord[0].equity;
    const inventories1 = mostRecentRecord[0].inventories;
    const receivables1 = mostRecentRecord[0].receivables;
    const cashnow1 = mostRecentRecord[0].cashnow;
    const otherliquid1 = mostRecentRecord[0].otherliquid;
    const payable1 = mostRecentRecord[0].payable;
    const overdraft1 = mostRecentRecord[0].overdraft;
    const intpayable1 = mostRecentRecord[0].intpayable;
    const otherpayable1 = mostRecentRecord[0].otherpayable;
    const divsnow1 = mostRecentRecord[0].divsnow;
    
    const previousRecord = await companySchema
      .find({userid:req.body.userid})
      .sort({ year: -1 })
      .skip(1)
      .limit(1);
    const netsales2 = previousRecord[0].netsales;
    const cogs2 = previousRecord[0].cogs;
    const sga2 = mostRecentRecord[0].sga;
    const depreciation2 = previousRecord[0].depreciation;
    const intexp2 = previousRecord[0].intexp;
    const taxexp2 = previousRecord[0].taxexp;
    const rnd2 = previousRecord[0].rnd;
    const fixedassets2 = previousRecord[0].fixedassets;
    const debt2 = previousRecord[0].debt;
    const equity2 = previousRecord[0].equity;
    const inventories2 = previousRecord[0].inventories;
    const receivables2 = previousRecord[0].receivables;
    const cashnow2 = previousRecord[0].cashnow;
    const otherliquid2 = previousRecord[0].otherliquid;
    const payable2 = previousRecord[0].payable;
    const overdraft2 = previousRecord[0].overdraft;
    const intpayable2 = previousRecord[0].intpayable;
    const otherpayable2 = previousRecord[0].otherpayable;
    const divsnow2 = previousRecord[0].divsnow;
    console.log(user);
    console.log(year)
    console.log(netsales1)
    console.log(depreciation1)
    console.log(fixedassets2)
    console.log(otherpayable2)
    console.log(previousRecord, 'previous record')
    console.log(mostRecentRecord,'most recent record')
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
  console.log(newKpiEntry, "new kpi record");
  const kpi= new kpiRecord(newKpiEntry)
  console.log(kpi);
  await kpi.save()
  res.send(kpi[0])

  } catch (error) {
 console.log('fuck you')  }
};
