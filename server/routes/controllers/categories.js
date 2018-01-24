module.exports = {
  get: (req, res) => {
    res.send('hello /categories get');
  },
  post: (req, res) => {
    res.send('hello /categories post');
  }
}
