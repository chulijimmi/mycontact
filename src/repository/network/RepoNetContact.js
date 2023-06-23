import Http from "../../plugins/Http"

const url = "https://contact.herokuapp.com/contact"

const get = async () => {
    const response = await Http.get(url);
    return response
}

const getById = async (id) => {
    const getByIdUrl = `${url}/${id}`
    const response = await Http.get(getByIdUrl)
    return response
}

const post = async (payload) => {
    const response = await Http.post(url, payload)
    return response
}

const put = async () => {

}

const del = async () => {

}

const RepoNetContact = {
    get,
    getById,
    post,
    put,
    del
}

export default RepoNetContact