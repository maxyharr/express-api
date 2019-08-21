const wwwController = {
  home: (req, res) => {
    res.send('Home page')
  },
  about: (req, res) => {
    res.send('About this wiki')
  },
  protected: (req, res) => {
    res.json({message: 'Protected! You must be logged in as', user: req.user})
  }
}

export default wwwController