import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const waybill = "OIPC0008414403";

    const res = await fetch(
      `https://trackmyorder.clickpost.in/api/v1/track-order?waybill=${waybill}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
};
