import { USERDATA } from "@/app/db/data";
import { redirect } from "next/navigation";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!USERDATA.find((user) => user.id === parseInt(params.id))) {
    redirect("/profile/api");
  }
  const user = USERDATA.find((user) => user.id === parseInt(params.id));
  return Response.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const updatedData = await request.json();
  const userDataIndex = USERDATA.findIndex(
    (user) => user.id === parseInt(params.id)
  );
  console.log(userDataIndex);
  USERDATA[userDataIndex].name = updatedData.name;
  return Response.json(USERDATA[userDataIndex]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const userIndex = USERDATA.findIndex(
    (user) => user.id === parseInt(params.id)
  );
  USERDATA.splice(userIndex, 1);
  return Response.json(USERDATA);
}
