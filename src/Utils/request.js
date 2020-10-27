const baseUrl = "http://localhost:8080"
const myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
  });

const getUserList = async () => {
    return fetch(baseUrl+'/getUserList', {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
      }).then(res => res.json()).then(data=>{
          return data;
      })
}
const getGroupList = async () => {
    return fetch(baseUrl+'/grouplist', {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
      }).then(res => res.json()).then(data=>{
          return data;
      })
}

export {getUserList, getGroupList}