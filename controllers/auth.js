
const signIn = async (req, res) => {
    const admin = req.user;
    const accessToken =  admin.generateAuthToken();
    admin.accessToken = accessToken;

    await admin.save();
    res.status(200).json({ accessToken });
};


module.exports = { signIn };
