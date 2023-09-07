const userController = {
  user: (req, res) => {
    res.json({
      message: 'You are logged in.',
    })
  },
}
module.exports = userController
