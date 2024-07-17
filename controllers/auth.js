import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from '../models/Admin.js'

export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await Admin.create({
            username,
            password: passwordHash
        });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ where: { username: username } });
        if (!admin) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
        const adminWithoutPassword = admin.toJSON();
        delete adminWithoutPassword.password;
        res.status(200).json({ token, admin: adminWithoutPassword });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}