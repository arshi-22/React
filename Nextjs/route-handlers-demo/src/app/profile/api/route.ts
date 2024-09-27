import { USERDATA } from "@/app/db/data";

export async function GET() {
  return Response.json(USERDATA);
}
