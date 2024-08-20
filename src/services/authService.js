const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

class AuthService {
    async register(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await Usuario.create({ email, password: hashedPassword });
    }

    async login(email, password) {
        const user = await Usuario.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
    }

    async verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

module.exports = new AuthService();
