const Profile = require('../models/Profile');

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({});
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProfile };
