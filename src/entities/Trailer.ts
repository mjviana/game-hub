export default interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: Data;
}

interface Data {
  '480': string;
  max: string;
}
