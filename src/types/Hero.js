type Thumbnail = {
  path: string,
  extension: string,
};

export type Item = {
  name: string,
};

type Serie = {
  items: [Item],
};

export type Hero = {
  id: string,
  name: string,
  description: string,
  thumbnail: Thumbnail,
  series: Serie,
};
