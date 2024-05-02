export const uploadFile = async (file: File): Promise<[Error?, Data?]> => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await fetch('http://localhost:3000/api/file', {
      method: 'POST',
      body: formData
    })

    if(!res.ok) {
      return [new Error(`Error uploading file: ${res.statusText}`)]
    }

    const json = await res.json() as ApiUploadResponse

    return [undefined, json.data]

  } catch (error) {
    if(error instanceof Error) return [error]
  }
 return [new Error('Unkown Error')]
}