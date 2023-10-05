"use server";
import Image from "next/image";
import React from "react";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";

async function GetData() {
  const waybill = "OIPC0008414403";
  const waybill1 = "OIPC0008424429";
  const waybill2 = "OIPC0008513563";
  const waybill3 = "OIPC0008513284";
  async function fetchData() {
    const response = await fetch(
      `https://trackmyorder.clickpost.in/api/v1/track-order?waybill=${waybill1}`
    );
    const json = await response.json();
    return json;
  }
  const data = await fetchData();

  const trackingId = Object.keys(data.result)[0];
  const result = data.result[trackingId];
  const scans = result.scans;
  const image = result.additional.order_detail[0].images;
  const description = result.additional.order_detail[0].description;

  const statusBucketMap = {
    1: "Order Placed",
    2: "Dispatched",
    3: "In Transit",
    4: "Out For Delivery",
    5: "Failed Delivery",
    6: "Delivered",
    7: "Returned",
    8: "Lost",
    9: "Damaged",
  };

  const getStatusColor = (bucket) => {
    switch (bucket) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "bg-green-400";

      default:
        return "bg-gray-300";
    }
  };

  const formatScanInfo = (bucket) => {
    let statusColor;
    const scanData = scans.find((scan) => {
      // console.log(scan.clickpost_status_bucket === bucket);
      statusColor =
        scan.clickpost_status_bucket === bucket ? "success" : "fail";
      return scan.clickpost_status_bucket === bucket;
    });

    return (
      <div
        key={bucket}
        className={`p-3 mb-4 rounded-lg ${statusColor} relative`}
      >
        <div className="flex space-x-5 space-y-4">
          {statusColor === "success" ? (
            <div className="flex lg:space-x-5 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#20C591"
                    d="M16 28c6.627 0 12-5.373 12-12 0-.758-.07-1.5-.205-2.219C26.755 8.214 21.87 4 16 4 9.373 4 4 9.373 4 16s5.373 12 12 12z"
                  />
                  <path
                    d="M11 17l3.273 3.5m0 0l8.182-7.5"
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
              <div className="text-center">{statusBucketMap[bucket]}</div>
              {scanData && (
                <div className="ml-4 text-center" suppressHydrationWarning>
                  {console.log(new Date(scanData.timestamp))}
                  {new Date(scanData.timestamp).toDateString()}{" "}
                  {new Date(scanData.timestamp).toLocaleTimeString()}
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto mb-6 p-5 border rounded-lg shadow-lg">
          <h1>Order Id: {data.result.order_id}</h1>
          <div className="flex justity-between space-x-3">
            <div>
              <Image src={image} width={100} height={100} alt="not found" />
            </div>
            <div>
              <h1>{description}</h1>
              <h3>Tracking id: {trackingId}</h3>
              <h5>shipping partner: {data.result.cp_name}</h5>
            </div>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bucket) => {
          return formatScanInfo(bucket);
        })}

        {/* <button
          className={`p-3 mt-4 ${
            showDetails ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          } rounded`}
        >
          SEE ALL UPDATES
        </button> */}
        {/* {showDetails && (
          <div className="mt-4">
            {scans.map((scan) => {
              const bucket = scan.clickpost_status_bucket;
              return (
                <div
                  key={scan.timestamp}
                  className={`p-3 mb-4 rounded-lg ${getStatusColor(bucket)}`}
                >
                  {`${statusBucketMap[bucket]}`}
                  <div className="ml-4">
                    Location: {scan.location}
                    <br />
                    {new Date(scan.timestamp).toDateString()}
                  </div>
                </div>
              );
            })}
          </div>
        )} */}

        <div className="mt-4 text-gray-700">Tracking ID: {trackingId}</div>
      </div>
    </>
  );
}

export default GetData;
