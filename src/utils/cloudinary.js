import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) =>{
  try{
    if(!localFilePath) return null;
    //upload file on cloud
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    //flie has been uploaded
    console.log("file is uploaded", response);
    return response;
  }catch(error){
    fs.unlinkSync(localFilePath) //remove local saved file
    return null;
  }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  export {uploadOnCloudinary}