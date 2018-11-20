
const urls = {
  'localhost': 'http://localhost:3000', //dev
  'secret-gardens.herokuapp.com': 'https://secret-gardens.herokuapp.com' //production
}

export default urls[window.location.hostname];
