
const urls = {
  'localhost': 'http://localhost:3000', //dev
  'savage-garden.herokuapp.com': 'https://savage-garden.herokuapp.com' //production
}

export default urls[window.location.hostname];
