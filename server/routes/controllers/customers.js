module.exports = {
  get: (req, res) => {
    res.send('hello /customers get');
  },
  post: (req, res) => {
    res.send('hello /customers post');
  }
}
