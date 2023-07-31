const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../../database');

const getUserByEmail = async (email) => {
  const queryText = 'SELECT * FROM users WHERE email = $1';
  const values = [email];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const signup = async (req, res) => {
  let { firstName, lastName, email, mobileNumber, password } = req.body;
  console.log(req.body);
  try {
    const user = await getUserByEmail(email);

    if (user) {
      return res.status(403).json("Email already registered");
    }

    const salt = await bcrypt.genSalt(10);
    console.log(password);
    const encryptedPassword = await bcrypt.hash(password, salt);
    
    const query = {
      text: 'INSERT INTO users (first_name, last_name, email, mobile_number, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      values: [firstName, lastName, email, mobileNumber, encryptedPassword],
    };

    const result = await pool.query(query);
    const newUser = result.rows[0];

    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
    res.json(token);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, message: "User does not exist" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    res.json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getuser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await getUserById(userId);

    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving the user" });
  }
};

const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const values = [userId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getUserByEmail,
  signup,
  login,
  getuser,
};
