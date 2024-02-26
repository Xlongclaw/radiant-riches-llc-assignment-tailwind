import searchData from "./searchData";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  // The Search String will be pushed to searchInput
  const searchInput: string = (await request.json()).searchInput;
  const searchTags = searchInput.split(" ");
  return Response.json(searchData(searchTags));
}
