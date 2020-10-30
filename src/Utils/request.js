// TODO GTB-工程实践: + 有提取常量
const baseUrl = "http://localhost:3000"
const myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
  });

// TODO GTB-工程实践: + 把数据请求提取到单独的service
// TODO GTB-知识点: - async使用不正确，这里不需要加async，里面返回的就是一个Promise
const getUserList = async () => {
  // TODO GTB-知识点: - url设计不满足restful
    return fetch(baseUrl+'/getUserList', {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
      }).then(res => res.json()).then(data=>{
          return data;
      })
  // TODO GTB-知识点: - 最后一个then没有必要
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
