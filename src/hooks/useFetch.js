import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, setCloseForm) => {
  
  const [infoApi, setinfoApi] = useState()

  //GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
      .then(res => setinfoApi(res.data))
      .catch(err => console.error(err))
  }
  /*
  fetch(url)
    .then(res => res.json())
    .then(data => setInfoApi(data))
    .catch(err => console.error(err))
  */

  //POST
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setinfoApi([ ...infoApi, res.data ])
        setCloseForm(true)
      })
      .catch(err => console.error(err))
  }

  //DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        const infoApiFiltered = infoApi.filter(ele => ele.id !== id)
        setinfoApi(infoApiFiltered)
      })
      .catch(err => console.error(err))
  }

  //UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.patch(url, data)
      .then(res => {
        console.log(res.data)
        const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
        setinfoApi(infoApiMapped)
        setCloseForm(true)
      })
      .catch(err => console.error(err))
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch