import sharp from 'sharp';

export class ImageToPngConverter {
  async convertImageToPng(imagePath: string): Promise<string> {
    const pngPath = imagePath.replace(/\.[^/.]+$/, "") + ".png";
    await sharp(imagePath).png().toFile(pngPath);
    return pngPath;
  }
}
