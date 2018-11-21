
const urls = {
  'localhost': 'http://localhost:3000', //dev
  'my-secret-gardens.herokuapp.com': 'https://my-secret-gardens.herokuapp.com' //production
}

export default urls[window.location.hostname];
