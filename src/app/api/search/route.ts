import searchData from "./searchData";
export const dynamic = "force-dynamic";

/**
 * initialize Route handler at /api/search.
 * This route handles the POST Request and returns the Search results.
 * Required Body Example: {"searchInput":"ANY SEARCH STRING...."} in JSON
 */
export async function POST(request: Request) {

  /**
   * The Search String will be pushed to searchInput.
   */  
  const searchInput: string = (await request.json()).searchInput;

  /**
   * searchTags: Array of Words of search String.
   */
  const searchTags = searchInput.split(" ");

  /**
   * Sending out the Search Result to the Client
   */
  return Response.json(searchData(searchTags));
}
