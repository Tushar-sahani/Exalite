import React from "react";
const Dataitem = ({ data }) => {
  const { DeviceId, BatteryLevel, temperature, RouteFrom, RouteTo, Timestamp } = data;
  return (
    <div className="item1 text-center d-flex justify-content-between">
      <h6 className="item">{DeviceId}</h6>
      <h6 className="item">{BatteryLevel}</h6>
      <h6 className="item ms-5">{temperature}</h6>
      <h6 className="item ms-5">{RouteFrom}</h6>
      <h6 className="item ms-5">{RouteTo}</h6>
      <h6 className="item ">{Timestamp}</h6>
    </div>
  )
}
const DeviceData = () => {
  const data = [
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    {
      "DeviceId": 4587434500,
      "BatteryLevel": 6.0,
      "temperature": "19.0 °C",
      "RouteFrom": "Mumbai, India",
      "RouteTo": "Louisville, USA",
      "Timestamp": "2023-02-06 10:19 AM"
    },
    
  ]
  return (
    <div className="device">
      <div class="justify-content-md-center">
        <div className="device-container">
          <div className="device-id">
            <h4 className="p-3">Please Select the device id to see the data stream</h4>
            <div className="row g-4 p-4 justify-content-md-center">
              <div class="col">
                <label for="inputRoute" class="form-label">
                  Davice Id*
                </label>
                <select
                  id="inputRoute"
                  class="form-select bg-light"
                  name="route_details"
                  required
                  alert="Please select your route"
                >
                  <option selected>Select Device</option>
                  <option value="400000111">400000111</option>
                  <option value="400000222">400000222</option>
                  <option value="400000333">400000333</option>
                  <option value="400000444">400000444</option>
                </select>
              </div>
              <div class="col">
                <button className="btn-grad">Get Device Data</button>
              </div>
            </div>
          </div>
          <div className="data">
            <div className="row g-4 p-4 justify-content-md-center">
              <div className="data-head text-center d-flex justify-content-between">
                <h5 className="data-headitem ">Device Id</h5>
                <h5 className="data-headitem">Battery Level</h5>
                <h5 className="data-headitem me-5">First Sensor temperature</h5>
                <h5 className="data-headitem me-5">Route From</h5>
                <h5 className="data-headitem me-5">Route To</h5>
                <h5 className="data-headitem me-5">Timestamp</h5>
              </div>
              <div className="data-item">
                {
                  data.map((data)=>{
                    return <Dataitem data = {data}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceData;
