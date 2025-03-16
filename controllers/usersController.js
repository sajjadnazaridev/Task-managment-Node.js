const usersServices = require('../services/usersServices');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await usersServices.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await usersServices.createUser(req.body);
        res.status(201).json(user);
    } catch {
        res.status(500).json({ message: error.message });
    }
}