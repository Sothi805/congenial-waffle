const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (user) => {
    const { name, email } = user;
    const result = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return result.insertId;
};

const updateUser = async (id, user) => {
    const { name, email } = user;
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
