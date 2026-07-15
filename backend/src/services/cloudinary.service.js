const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// logique métier de cloudinary

// Téléchargement d'images
const uploadImage = (buffer, folder) => {
  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
      },
      (error, result) => {

        if (error) {
          return reject(error);
        }

        resolve(result);
      }
    );

    streamifier
      .createReadStream(buffer)
      .pipe(stream);

  });
};

// Suppression d'images
const deleteImage = async (publicId) => {

  if (!publicId) {
    return;
  }

  return cloudinary.uploader.destroy(publicId);

};

// Remplacement d'images
const replaceImage = async (
  oldPublicId,
  buffer,
  folder
) => {

  if (oldPublicId) {
    await deleteImage(oldPublicId);
  }

  return uploadImage(buffer, folder);

};

module.exports = {
  uploadImage,
  deleteImage,
  replaceImage,
};
