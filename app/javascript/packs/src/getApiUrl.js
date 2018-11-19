
const urls = {
  'localhost': 'http://localhost:3000', //dev
  'savage-garden.herokuapp.com': 'https://savage-garden.herokuapp.com/api/v1' //production
}

export default urls[window.location.hostname];
