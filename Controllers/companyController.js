const companyRecord = require("../Schemas/companySchema");

exports.updateDB = async (req, res) => {
  const newEntry = req.body;
  try {
    const newAnnualRecord = await companyRecord(newEntry);
    await newAnnualRecord.save();
    res.send(
      newAnnualRecord,
      `the new fin record for ${newEntry.year} has been saved`
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

