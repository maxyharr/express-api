const wwwController = {
  home: (req, res) => {
    res.send('Home page')
  },
  about: (req, res) => {
    res.send('About this wiki')
  },
  protected: (req, res) => {
    res.send('Protected! You must be logged in')
  }
}

export default wwwController