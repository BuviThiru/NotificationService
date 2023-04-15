require("dotenv").config();

const EMAIL_ADD = process.env.EMAIL_ADD;
const EMAIL_PASSWORD =  process.env.EMAIL_PASSWORD;
const EMAIL_HOST = process.env.EMAIL_HOST;

module.export = {EMAIL_ADD,EMAIL_PASSWORD,EMAIL_HOST}