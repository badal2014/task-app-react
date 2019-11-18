import axios from 'axios';
// import _ from 'lodash';

export default function fireAjax(method, URL, data, api) {
  
  
  if (method === 'POST') {
    
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      }
    }
      return axios.post(encodeURI(URL), data, config);
    } else if(method === 'GET') {
      
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': sessionStorage.getItem('token'),          
        }
      }
      
      return axios.get(encodeURI(URL), config);
    }
    else if(method === 'PATCH') {
      
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': sessionStorage.getItem('token'),          
        }
      }
      
      return axios.patch(encodeURI(URL), data,config);
    }
    else if(method === 'DELETE') {
      
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': sessionStorage.getItem('token'),          
        }
      }
      
      return axios.delete(encodeURI(URL),config);
    }
 }