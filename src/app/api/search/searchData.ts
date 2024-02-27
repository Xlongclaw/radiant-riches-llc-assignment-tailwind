import { BUILDERS_DATA } from "@/constants";


/**
 * searchData - function that searches for matches of the searchTags of searchInput
 *  with the Search Tags of BUILDER_DATA Object and returns the result.
 */
const searchData = function (searchTags: Array<string>) {
  /**
   * Searching for those Object in BUILDER_DATA Whose searchTags
   *  matches the words of Search Input.
   */
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
