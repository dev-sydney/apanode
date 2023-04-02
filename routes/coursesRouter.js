const express = require('express');
const pool = require('./../database');

const router = express.Router();

router.route('/').get(async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM Courses`);

  res.status(200).json({
    msg: rows,
  });
});
module.exports = router;
