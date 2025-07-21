import User from '../models/User.js';

export const protectUser = async (req, res, next) => {

    try {
        const userId = req.auth().userId;
        if (!userId) {
            return res.json({ success: false, message: "Not authenticated" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found (this is coming from protectUser in auth.js)" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.json({ success: false, message:"lan" + error.message });
    }
}

