const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }
    next();
};

const validateUser = (req, res, next) => {
    const { username, name, email } = req.body;
    if (!username || !name || !email) {
        return res.status(400).json({ error: 'Username, name, and email are required' });
    }
    next();
};


module.exports = {
    validateId,
    validateUser
};
