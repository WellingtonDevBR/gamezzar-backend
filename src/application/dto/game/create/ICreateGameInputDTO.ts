export interface ICreateGameInputDTO {
  title: string;
  description: string;
  region: string;
  releaseDate: Date;
  producer: string;
  category: string;
  genre: string;
  officialLink: string;
  fileContent: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  };
  slug: string;
  status: number;
}
