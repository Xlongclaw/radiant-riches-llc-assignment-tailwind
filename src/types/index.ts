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
  bestChoice?: boolean;
  discount?: number;
  searchTags?: Array<string>;
};

type MainHighLightPropsType = {
  mainHighlight?: Array<{ title: string; description: string }>;
  mainHighlightList?: Array<{ rating: number; title: string }>;
  whylove?: Array<string>;
};
type DropDownPropType = {
  list: Array<{ link: string; title: string }>;
  selectedIndex: number;
  direction?: "TOP" | "BOTTOM";
}

type SearchCardPropType = {searchInput:string,changeSearchInput:(input:string)=>void,screen:"small"|"large"}


export type {
  TextHeadingProps,
  SearchDetailProps,
  SearchItemType,
  MainHighLightPropsType,
  DropDownPropType,
  SearchCardPropType
};
