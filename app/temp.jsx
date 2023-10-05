"use client";
import React, { useState } from "react";

const OrderTimeline = ({ data }) => {
  const apiResponse = {
    meta: { status: 200, success: true, message: "SUCCESS" },
    result: {
      328632000206: {
        latest_status: {
          timestamp: "2023-09-30 21:44:10",
          location: "",
          remark: "InTransit",
          status: "ArrivedAtCarrierFacility",
          clickpost_status_code: 5,
          clickpost_status_description: "InTransit",
          clickpost_status_bucket: 3,
          clickpost_status_bucket_description: "In transit",
        },
        scans: [
          {
            timestamp: "2023-09-30 21:44:10",
            location: "",
            remark: "InTransit",
            status: "ArrivedAtCarrierFacility",
            clickpost_status_code: 5,
            checkpoint_id: 17552768889,
            tracking_id: 841148279,
            created_at: "2023-09-30 21:44:10",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 16:22:09",
            location: "",
            remark: "InTransit",
            status: "Departed",
            clickpost_status_code: 5,
            checkpoint_id: 17545589489,
            tracking_id: 841148279,
            created_at: "2023-09-30 16:22:09",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 16:22:01",
            location: "",
            remark: "InTransit",
            status: "Departed",
            clickpost_status_code: 5,
            checkpoint_id: 17545575324,
            tracking_id: 841148279,
            created_at: "2023-09-30 16:22:01",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 15:28:31",
            location: "",
            remark: "InTransit",
            status: "ArrivedAtCarrierFacility",
            clickpost_status_code: 5,
            checkpoint_id: 17544443882,
            tracking_id: 841148279,
            created_at: "2023-09-30 15:28:31",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 14:57:50",
            location: "",
            remark: "InTransit",
            status: "ArrivedAtCarrierFacility",
            clickpost_status_code: 5,
            checkpoint_id: 17544156005,
            tracking_id: 841148279,
            created_at: "2023-09-30 14:57:50",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 14:46:13",
            location: "",
            remark: "InTransit",
            status: "ArrivedAtCarrierFacility",
            clickpost_status_code: 5,
            checkpoint_id: 17543933161,
            tracking_id: 841148279,
            created_at: "2023-09-30 14:46:13",
            clickpost_status_description: "InTransit",
            clickpost_status_bucket: 3,
            clickpost_status_bucket_description: "In transit",
          },
          {
            timestamp: "2023-09-30 12:54:32",
            location: "",
            remark: "InTransit",
            status: "PickupDone",
            clickpost_status_code: 4,
            checkpoint_id: 17541280155,
            tracking_id: 841148279,
            created_at: "2023-09-30 12:54:32",
            clickpost_status_description: "PickedUp",
            clickpost_status_bucket: 2,
            clickpost_status_bucket_description: "Shipped",
          },
          {
            timestamp: "2023-09-29 15:36:16",
            location: "",
            remark: "PreTransit",
            status: "ReadyForReceive",
            clickpost_status_code: 25,
            checkpoint_id: 17520145141,
            tracking_id: 841148279,
            created_at: "2023-09-29 15:36:16",
            clickpost_status_description: "OutForPickup",
            clickpost_status_bucket: 1,
            clickpost_status_bucket_description: "Order placed",
          },
        ],
        valid: true,
        additional: {
          order_detail: [
            {
              description:
                "Cotton Solid Half Sleeves Mens Polo Neck T-Shirt Pack of 4, variant: M",
              images:
                "https://o1product-images.cdn.myownshop.in/5537949332.jpeg",
            },
          ],
          is_stuck: false,
        },
      },
      reference_number: "6734782969-225",
      waybill: "328632000206",
      order_id: "#1004",
      tracking_id: 841148279,
      config: {
        order_date: "2023-09-29 00:00:00",
        ship_date: null,
        show_form_on_uber_status_list: [5, 9, 18, 19, 20],
        show_failed_delivery_form: true,
        enterprise_id: 115,
        enterprise_user: "shop101-supply",
        enterprise_logo:
          "https://s3-ap-southeast-1.amazonaws.com/pyck-res-bucket/signatures/package.png",
        subdomain: "trackmyorder",
        enterprise_website: "https://www.shop101.com",
        show_rto_form: true,
        show_return_form_day_check: true,
        rms_enabled: false,
        edit_contact_details_allowed: false,
        show_courier_rating_form: true,
        is_pickup_form_visible: false,
        uber_status_list_for_pickup_form: [],
        advertisement_banner_styling_config: [],
        is_rvp: false,
      },
      cp_id: 212,
      account_code: "ATS_Clout",
      customer_info: null,
      logo_url:
        "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
      cp_name: "ATS (Amazon Transportation Services)",
      enable_security_check: false,
      security_key_valid: false,
    },
  };
  const [showDetails, setShowDetails] = useState(false);

  // Extract the tracking ID dynamically
  const trackingId = Object.keys(apiResponse.result)[0];
  const result = apiResponse.result[trackingId];
  const scans = result.scans;

  // Define status bucket mappings (as provided)
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

  // Function to determine status color based on bucket
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

  // Function to format the timestamp and location
  const formatScanInfo = (bucket) => {
    let statusColor;
    const scanData = scans.find((scan) => {
      statusColor =
        scan.clickpost_status_bucket === bucket ? "bg-green-400" : "bg-red-300";
      return scan.clickpost_status_bucket === bucket;
    });

    return (
      <div
        key={bucket}
        className={`p-3 mb-4 rounded-lg ${statusColor} relative`}
      >
        {`${statusBucketMap[bucket]}`}
        {scanData && (
          <div className="ml-4" suppressHydrationWarning>
            {console.log(new Date(scanData.timestamp))}
            {new Date(scanData.timestamp).toDateString()}{" "}
            {new Date(scanData.timestamp).toLocaleTimeString()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bucket) => {
        return formatScanInfo(bucket);
      })}
      <button
        className={`p-3 mt-4 ${
          showDetails ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
        } rounded`}
        onClick={() => setShowDetails(!showDetails)}
      >
        SEE ALL UPDATES
      </button>
      {showDetails && (
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
      )}
      <div className="mt-4 text-gray-700">Tracking ID: {trackingId}</div>
    </div>
  );
};

export default OrderTimeline;
