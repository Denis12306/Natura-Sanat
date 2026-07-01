const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

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

const deleteImage = async (publicId) => {

  if (!publicId) {
    return;
  }

  return cloudinary.uploader.destroy(publicId);

};

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
