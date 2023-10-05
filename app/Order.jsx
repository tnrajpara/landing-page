"use server";
import React from "react";
async function GetData() {
  // https://trackmyorder.clickpost.in/api/v1/track-order
  // query - waybill
  //   request - get

  const waybill = "OIPC0008414403";
  async function fetchData() {
    const response = await fetch(
      `https://trackmyorder.clickpost.in/api/v1/track-order?waybill=${waybill}`
    );
    const json = await response.json();
    return json;
  }
  const data = await fetchData();

  const dynamicKey = Object.keys(data.result)[0];
  const clickpostStatusCode =
    data.result[dynamicKey].latest_status.clickpost_status_code;

  return (
    <div>
      <div className="flex flex-col justify-center items-center  mb-6 lg:mb-10">
        <h1 className="text-3xl font-semibold mt-10">Order</h1>
      </div>
    </div>
  );
}

export default GetData;
