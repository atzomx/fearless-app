export interface File {
  name: string;
  uri: string;
  type?:
    | 'application/pdf'
    | 'image/bmp'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/png'
    | string;
}
