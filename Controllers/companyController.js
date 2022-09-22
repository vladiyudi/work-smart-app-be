const { companySchema, kpiRecord } = require("../Schemas/companySchema");
const axios = require('axios')


exports.updateDB = async (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);

  try {
    const newAnnualRecord = new companySchema(newEntry);
    console.log(newAnnualRecord);
    await newAnnualRecord.save();
    await res.send(newAnnualRecord);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.calculateKPI = async (req, res, next) => {
  try {
    const mostRecentRecord = await companySchema
      .find({year: 2022})
      // .sort({ year: -1 })
      .limit(1);
    console.log(mostRecentRecord);
    const user = mostRecentRecord[0].user;
    const year = mostRecentRecord[0].year;
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
      .find({year: 2016})
      .limit(1);

console.log("perv", previousRecord);


    if (!previousRecord) {
      res.send({
        norecords: true,
        message:
          "Please input a record for the previous year in order to calculate KPIS",
      });
      return;
    }

    const netsales2 = previousRecord[0].netsales;
    const cogs2 = previousRecord[0].cogs;
    const sga2 = previousRecord[0].sga;
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
    newKpiEntry = {
      year: year,
      operatingMargin: (netsales1 - (cogs1 + sga1 + depreciation1)) / netsales1,
      grossMarginGrowthRate: (((netsales1 - cogs1) / (netsales2 - cogs2)) - 1),
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
        ((receivables1 + cashnow1 + otherliquid1 + inventories1) /
        (payable1 + overdraft1 + otherpayable1 + intpayable1)),

      quickRatio:
        (receivables1 + cashnow1 + otherliquid1) /
        (payable1 + overdraft1 + otherpayable1 + intpayable1),

      cashFlowNetSalesRatio: (cashnow1 - cashnow2) / netsales1,
    };

console.log("newKpiEntry", newKpiEntry);



    const kpi = await kpiRecord(newKpiEntry);
    await kpi.save();
    res.send(kpi[0]);
  } catch (error) {
    res
      .status(500)
      .send({ ok: false, message: "There was an error calculating the KPIs" });
  }
};



exports.getDataScience = async (req, res) => {
    // const {kpi} = req;


const testData = {" Operating Gross Margin":0.5972700673," Realized Sales Gross Profit Growth Rate":0.0220745598," Regular Net Profit Growth Rate":0.6897305265," Gross Profit to Sales":0.5972658371," Cash Reinvestment %":0.3728717261," Research and development expense rate":1970000000.0," Interest Coverage Ratio (Interest expense to EBIT)":0.5658006002," Equity to Liability":0.0231989712," Retained Earnings to Total Assets":0.9441406142," Current Ratio":0.0080948265," Average Collection Days":0.0071233087," Quick Ratio":0.0058416418," Cash Flow to Sales":0.6715755129}


    try{
        const result = await axios.post('http://52.29.103.127:8080/predict_bankrupt', testData)
  
     res.send(result.data)

    } catch(err){
        console.log(err)
    }


}