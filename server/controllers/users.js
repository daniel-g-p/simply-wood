export default {
  login: async (req, res, next) => {
    console.log(req.body);
    return res.status(200).json({ ok: true });
  },
};
