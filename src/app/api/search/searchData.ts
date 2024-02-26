import { BUILDERS_DATA } from "@/constants";

const searchData = function (searchTags: Array<string>) {
  // Linear Search Algorithm
  let searchResult: any = [];
  let matches = 0;
  for (let i = 0; i < BUILDERS_DATA.length; i++) {
    for (let j = 0; j < searchTags.length; j++) {
      for (let k = 0; k < BUILDERS_DATA[i].searchTags.length; k++) {
        if (
          searchTags[j].toLowerCase() ==
          BUILDERS_DATA[0].searchTags[k].toLowerCase()
        ) {
          matches++;
          break;
        }
      }
    }

    if (matches > searchTags.length / 2) searchResult.push(BUILDERS_DATA[i]);
    matches = 0;
  }
  return searchResult;
};

export default searchData;
