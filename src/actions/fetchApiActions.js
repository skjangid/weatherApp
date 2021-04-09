export async function doPost(url, payload, token = '') {
  return await doRequest(url, payload, token)
}

export async function doPatch(url, payload, token = '', method = 'PATCH') {
  return await doRequest(url, payload, token, method)
}

export async function doGet(url, token = '') {
  return await doRequest(url, {}, token, 'GET')
}

export async function doDelete(url, token = '') {
  return await doRequest(url, {}, token, 'DELETE')
}

async function doRequest(url, payload, token, method = 'POST') {
  console.log('url', url)
  const  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'  // I added this line
}

  console.log('headers', headers)
  const request = {
    cache: 'no-cache',
    method: method,
    headers: headers,
  }

  console.log('method', method)
  if (method !== 'GET') request.body = JSON.stringify(payload)

  console.log('request', request)
  const responseStream = await fetch(url, request)
console.log('responseStream', responseStream)
  //successful no body
  if (responseStream.status === 204) {
    return {}
  }

  const resp = await responseStream.json()
  console.log('resp====', resp)
  if (resp.hasOwnProperty('data') || (responseStream.status >= 200 && responseStream.status < 300)) {
    return resp;
  }

  var errorMessage = "";
  if (resp.hasOwnProperty('error') && resp.error.details && resp.error.details.messages && typeof resp.error.details.messages === 'object') {
    var messsage = resp.error.details.messages
    var keys = Object.keys(messsage);
    keys.forEach(element => {
      resp.error.details.messages[element].forEach(msg => {
        errorMessage = errorMessage + capitalize(element) + " : " + msg + '\n';
      })
    });
  } else if (resp.error && resp.error.message) {
    var messsage = resp.error.message;
    errorMessage = capitalize(messsage);
  }

  throw {
    responseStatus: responseStream.status,
    errorCodes: resp.hasOwnProperty('error') ? resp.error.statusCode : ['unknown'],
    errorMessage: errorMessage
  }
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}