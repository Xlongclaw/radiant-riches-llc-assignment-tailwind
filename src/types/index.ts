type TextHeadingProps = {
  title: string;
};

type SearchDetailProps = {
  icon: string;
  title: string;
  value?: string;
};

type SearchItemType = {
  image: any;
  imageTag?: string;
  name: string;
  description?: string;
  mainHighlight?: Array<{ title: string; description: string }>;
  mainHighlightList?: Array<{ rating: number; title: string }>;
  whylove?: Array<string>;
  rating?: number;
  tags?: Array<string>;
  price?: number;
  sequence?: number;
  bestValue?: boolean;
  bestChoise?: boolean;
  discount?: number;
  searchTags?: Array<string>;
};
type MainHighLightPropsType = {
  mainHighlight?: Array<{ title: string; description: string }>;
  mainHighlightList?: Array<{ rating: number; title: string }>;
  whylove?: Array<string>;
};

export type {
  TextHeadingProps,
  SearchDetailProps,
  SearchItemType,
  MainHighLightPropsType,
};
