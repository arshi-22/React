import { USERDATA } from "@/app/db/data";

export async function GET() {
  return Response.json(USERDATA);
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
    status: 201,
  });
}
