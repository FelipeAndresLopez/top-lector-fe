export const parseFileToBase64 = async (file: File): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => { resolve(reader.result as string) }
    reader.onerror = error => { reject(error) }
  })
}
