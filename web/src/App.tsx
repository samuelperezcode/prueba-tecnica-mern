import { useState } from 'react'
import './App.css'
import { uploadFile } from './services/upload'
import {Toaster, toast} from 'sonner'
import { Search } from './components/search'

const APP_STATUS = {
  IDLE: 'idle',
  ERROR: 'error',
  READY_UPLOAD: 'ready_upload',
  UPLOADING: 'uploading',
  READY_USAGE: 'ready_usage'
} as const

const BUTTON_TEXT = {
  [APP_STATUS.READY_UPLOAD]: 'Upload file',
  [APP_STATUS.UPLOADING]: 'Uploading...',
}

type AppStatusType = typeof APP_STATUS[keyof typeof APP_STATUS]

function App() {
  const [appStatus, setAppStatus] = useState<AppStatusType>(APP_STATUS.IDLE)
  const [file, setFile] = useState<File | null >(null)
  const [data, setData] = useState<Data>([])


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target.files ?? []

    if(file){
      setFile(file);
      setAppStatus(APP_STATUS.READY_UPLOAD)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(appStatus !== APP_STATUS.READY_UPLOAD || !file) {
      return
    }

    setAppStatus(APP_STATUS.UPLOADING)
    const [err, newData] = await uploadFile(file)

    if(err) {
      setAppStatus(APP_STATUS.ERROR)
      toast.error(err.message)
      return
    }

    setAppStatus(APP_STATUS.READY_USAGE)
    if(newData) {
      setData(newData)
    }
    toast.success('File uploaded successfully')
    
  }
  
  console.log(data);
  const showButton = appStatus === APP_STATUS.READY_UPLOAD || appStatus === APP_STATUS.UPLOADING
  const showForm = appStatus !== APP_STATUS.READY_USAGE

  return (
    <>
      <Toaster />
      <h4>User information</h4>
      {
        showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="file"> 
            <input type='file' accept='.csv' name='file' onChange={handleInputChange} disabled={appStatus === APP_STATUS.UPLOADING} />
          </label>
          {
            showButton && (
              <button disabled={appStatus === APP_STATUS.UPLOADING}>
                {BUTTON_TEXT[appStatus]}
              </button>
            )
          }
        </form>
        ) : (
          <Search initialData={data} />
        )
      }
    </>
  )
}

export default App
