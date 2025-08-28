function requireQueryParams(...params) {

  return (req, res, next) => {

    for (let param of params) {
      if (!req.query[param]) {
        return res.status(400).json({ error: `Missing query parameter: ${param}` });
      }
    }
    next();
  };
}

module.exports = requireQueryParams;

// Usage
// app.get('/search', requireQueryParams('q', 'type'), (req, res) => {
//   res.send(`Searching for ${req.query.q} of type ${req.query.type}`);
// });
