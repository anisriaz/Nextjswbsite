const db = require('../../database');

const User = {
  create: async (firstName, lastName, email, mobileNumber, password) => {
    const query = `
      INSERT INTO users (first_name, last_name, email, mobile_number, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [firstName, lastName, email, mobileNumber, password];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating user');
    }
  }
};

module.exports = User;
