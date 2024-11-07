require('dotenv').config()
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.uploadFile = async (file, email) => {
    try {
      const { data, error } = await supabase.storage
        .from('fileuploads')
        .upload(`${email}/${file.originalname}`, file);

      if (error) {
        console.error('Error uploading file:', error);
        return null;
      } else {
        return data.path;
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
}

exports.getDownloadLink = async (filePath) => {
    const { data, error } = await supabase.storage
      .from('fileuploads')
      .createSignedUrl(`${filePath}`, 60);
  
    if (error) {
      console.error("Error generating signed URL:", error.message);
      return null;
    }
  
    return data.signedUrl;
}

exports.deleteFile = async(filePath) => {
    const { data, error } = await supabase.storage
      .from('fileuploads')
      .remove([filePath]);
  
    if (error) {
      console.error("Error deleting file:", error.message);
      return false;
    }
  
    console.log("File deleted successfully:", data);
    return true;
  }
