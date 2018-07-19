// what working group fetch, this polyfill will ensure that this code runs on browsers that don't yet fetch support natively
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

/***** public *****/
export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}


/***** private *****/
// abstracting away web API from appliation
function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  console.log(url);
  const request = new Request(baseUrl + url, {method: 'DELETE'});
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
