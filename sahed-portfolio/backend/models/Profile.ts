const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  contact: {
    mobile: String,
    email: String,
    github: String,
    website: String,
  },
  profile: String,
  expertise: Array,
  experience: Array,
  education: Array,
  skills: Array,
  projects: Array,
});

module.exports = mongoose.model('Profile', profileSchema);
