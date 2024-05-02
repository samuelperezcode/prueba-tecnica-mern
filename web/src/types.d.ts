type Data = Array<Record<string, string>>

type ApiUploadResponse = {
  message: string,
  data: Data
}

type ApiSearchResponse = {
  data: Data
}