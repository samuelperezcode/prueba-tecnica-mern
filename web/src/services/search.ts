export const searchData = async (query: string): Promise<[Error?, Data?]> => {
  try {
    const res = await fetch(`http://localhost:3000/api/users?q=${query}`)

    if(!res.ok) {
      return [new Error(`Error searching user data: ${res.statusText}`)]
    }

    const json = await res.json() as ApiSearchResponse

    return [undefined, json.data]

  } catch (error) {
    if(error instanceof Error) return [error]
  }
 return [new Error('Unkown Error')]
}