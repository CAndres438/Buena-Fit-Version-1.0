export const FileUp = async (file) => {
    
    const urlCloudinary = 'https://api.cloudinary.com/v1_1/cortiz/upload'

    const formData = new FormData()

    formData.append('upload_preset', 'BuonaFit'); //conectar con cloudinary
    formData.append('file', file); // lo que voy a subir 

   const resp= await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    console.log(data.secure_url)
    return data.secure_url

}
