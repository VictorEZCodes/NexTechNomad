import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/services/sendContactsToTg";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  sendMail(data, null);

  return NextResponse.json("post req is ok");
}
