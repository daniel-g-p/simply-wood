import sharp from "sharp";

export const reformatImage = async (buffer, width, height) => {
  return await sharp(buffer)
    .rotate()
    .resize(width, height)
    .webp({ lossless: true })
    .toBuffer();
};
