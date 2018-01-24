module.exports = {
  get: (req, res) => {
    res.send('hello /products get');
  },
  post: (req, res) => {
    res.send('hello /products post');
  }
}
