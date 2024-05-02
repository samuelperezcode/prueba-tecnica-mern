import React, { useEffect, useState } from "react"
import { searchData } from "../services/search"
import {toast} from 'sonner'

export  function Search({initialData}: {initialData: Data}) {
  const [search, setSearch] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('q') ?? ''
  })
  const [users, setUsers] = useState<Data>(initialData)
 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const newPathname = search === '' 
      ? window.location.pathname 
      : `?q=${search}`
    
    window.history.replaceState({}, '', newPathname)
  }, [search])

  useEffect(() => {
    if(!search) {
      setUsers(initialData)
      return
    }
    searchData(search)
      .then(
        res => {
          const [err, newData] = res
          if(err) {
            toast.error(err.message)
            return
          }

          if(newData) {
            setUsers(newData)
          }
        }
      )
  }, [search, initialData])

  return (
    <section>
      <h1>Search</h1>
      <form action="">
        <input type="search" onChange={handleSearch} placeholder="Search user info..." defaultValue={search}/>
      </form>

      <ul className="table-data"> 
        {
          users.map( userData => (
            <li key={userData.Id}>
              <article className="card">
                {
                  Object
                    .entries(userData)
                    .map( ([key, value]) => <p><strong>{key}:</strong>{value}</p>)
                }
              </article>
            </li>
          ))
        }
      </ul>

    </section>
  )
}
