const baseUrl = "http://localhost:8080"

const getUser = async () => {
    return fetch(baseUrl,{
        method: "GET"
    })
}

export {getUser}