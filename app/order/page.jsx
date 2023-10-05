"use server";
import React from "react";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";

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

  // order place information
  const checkOrderPlaced =
    data.result[dynamicKey].scans[3].clickpost_status_code;
  const orderDate = data.result[dynamicKey].scans[3].timestamp;

  // dispatch information
  const checkDispatched =
    data.result[dynamicKey].latest_status.clickpost_status_code;
  const location = data.result[dynamicKey].latest_status.location;

  // transit information
  const checkTransit = data.result[dynamicKey].scans[1].clickpost_status_code;

  /// out of delivery information
  const checkOutOfDelivery =
    data.result[dynamicKey].scans[0].clickpost_status_code;

  // delivered information
  const checkDelivered = data.result[dynamicKey].scans[0].clickpost_status_code;
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-6 lg:mb-10">
        <h1 className="text-3xl font-semibold mt-10">Order</h1>
        <div className="border border-gray-900 w-96 flex justify-center p-3 mt-5 flex-col">
          <div className="lg:mb-6 flex space-x-6">
            <div>
              <h1>
                {checkOrderPlaced === 1 || 2 || 3 || 28 || 25 || 10 ? (
                  <LiaEyeSolid className="text-4xl text-green-600" />
                ) : (
                  <LiaEyeSlash className="text-4xl text-red-600" />
                )}
              </h1>
            </div>
            <div>
              <h3>Order placed</h3>
              <h4>Order Date: {orderDate}</h4>
            </div>
          </div>
          <div className="lg:mb-6 flex space-x-6">
            <h1>
              {checkDispatched === 4 ? (
                <LiaEyeSolid className="text-4xl text-green-600" />
              ) : (
                <LiaEyeSlash className="text-4xl text-red-600" />
              )}
            </h1>
            <div>
              <h3>Dispatched</h3>
              <h4>
                Location:
                <span>{location}</span>
              </h4>
              <h4>{orderDate}</h4>
              <button className="text-blue-600">SEE ALL UPDATES</button>
            </div>
          </div>
          <div className="lg:mb-6 flex space-x-6">
            <h1>
              {checkTransit === 5 || 18 || 19 || 20 ? (
                <LiaEyeSolid className="text-4xl text-green-600" />
              ) : (
                <LiaEyeSlash className="text-4xl text-red-600" />
              )}
            </h1>
            <div>
              <h3>In Transit</h3>
              <h4>Location:{location}</h4>
              <h4>{orderDate}</h4>
            </div>
          </div>
          <div className="lg:mb-6 flex space-x-6">
            <h1>
              {checkOutOfDelivery === 6 ? (
                <LiaEyeSolid className="text-4xl text-green-600" />
              ) : (
                <LiaEyeSlash className="text-4xl text-red-600" />
              )}
            </h1>{" "}
            <h1>Out for delivery</h1>
          </div>
          <div className="lg:mb-6">
            <h1></h1>
            <h3>Delivered</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetData;
