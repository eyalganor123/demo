class HttpService {
  constructor () {}

  request (method, url, cb, data) {
    const r = new XMLHttpRequest ();
    r.open (method, url);
    r.setRequestHeader ('Access-Control-Allow-Origin', '*');
    r.onload = function (e) {
      cb (JSON.parse(e.target.responseText));
    };
    r.send ();
  }
}

function test () {
  var service = new HttpService ();
  service.request (
    'GET',
    'http://jsonplaceholder.typicode.com/todos/2',
    function (jjjj) {
      console.log (jjjj);
    }
  );
}

// test ();
