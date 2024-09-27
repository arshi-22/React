import { USERDATA } from "@/app/db/data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredData = query
    ? USERDATA.filter((user) => user.name.includes(query))
    : USERDATA;
  return Response.json(filteredData);
}

export async function POST(request: Request) {
  const req = await request.json();
  const newUser = {
    id: USERDATA.length + 1,
    name: req.name,
  };
  USERDATA.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 20,
  });
}
