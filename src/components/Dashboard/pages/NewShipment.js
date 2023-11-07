import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../../context/context";

const NewShipment = () => {
  const { dispatch } = useContext(TokenContext);

  const [shipmentData, setShipmentData] = useState({
    shipment_no: "",
    container_no: "",
    route_details: "",
    goods_type: "",
    device: "",
    expected_delivery_date: "",
    po_number: "",
    delivery_number: "",
    ndc_number: "",
    batch_id: "",
    serial_number_goods: "",
    shipment_description: "",
  });

  const handleChangeShipment = useCallback((e) => {
    const { name, value } = e.target;
    setShipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleShipmentSubmit = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:8000/shipment/register", shipmentData)
        .then((res) => {
          const statusCode = res.status; // Check the status code from the backend
          if (statusCode === 201) {
            alert("Shipment created Successfully");
            const token = res.data.token.access_token;
            // Dispatch action to update token and login state
            dispatch({ type: "SET_TOKEN", payload: token });
            dispatch({ type: "SET_LOGGED_IN", payload: true });
          } else {
            // console.log(res); // Log the entire response object for debugging
            alert("An error occurred. Please try again later.");
          }
        })
        .catch((error) => {
          if (error.response) {
            const statusCode = error.response.status;
            const errorMessage = error.response.data.detail;
            alert(`Error: ${statusCode} - ${errorMessage}`);
          } else if (error.request) {
            alert("No response received from the server"); // The request was made but no response was received
          } else {
            // Something happened in setting up the request that triggered an error
            alert("Error: " + error.message);
          }
        });
    },
    [shipmentData, dispatch]
  );
  return (
    <div class="container">
      <div class="row p-4 heading text-center">
        <h1>Create New Shipment</h1>
      </div>
      <div class="row heading text-center">
        <span>Please fill all the details</span>
      </div>
      <div class="shipment w-100 justify-content-md-center relative">
        <form className="createshipment" onSubmit={handleShipmentSubmit}>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputShipment" class="form-label">
                Shipment Number*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputShipment"
                placeholder="Shipment Number"
                name="shipment_no"
                required
                alert="Please fill the shipment number"
              />
            </div>
            <div class="col">
              <label for="inputContainer" class="form-label">
                Container Number*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputContainer"
                placeholder="Container Number"
                name="container_no"
                required
                alert="Please fill the container number"
              />
            </div>
          </div>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputRoute" class="form-label">
                Route Details*
              </label>
              <select
                id="inputRoute"
                class="form-select bg-light"
                name="route_details"
                onChange={handleChangeShipment}
                required
                alert="Please select your route"
              >
                <option selected>Select Route</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Tirupati">Tirupati</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div class="col">
              <label for="inputGoods" class="form-label">
                Goods Type
              </label>
              <select
                id="inputGoods"
                class="form-select bg-light"
                name="goods_type"
                onChange={handleChangeShipment}
                required
                alert="Please select your Goods Type"
              >
                <option selected>Select Goods</option>
                <option value="Electronics">Electronics</option>
                <option value="Raw Material">Raw Material</option>
                <option value="Industrial">Industrial</option>
                <option value="Fragile">Fragile</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputDevice" class="form-label">
                Device*
              </label>
              <select
                id="inputDevice"
                class="form-select bg-light"
                name="device"
                onChange={handleChangeShipment}
                required
                alert="Please select the Device"
              >
                <option selected>Select Device</option>
                <option value="400000111">400000111</option>
                <option value="400000222">400000222</option>
                <option value="400000333">400000333</option>
                <option value="400000444">400000444</option>
              </select>
            </div>
            <div class="col">
              <label for="inputDate" class="form-label">
                Expected Delivery Date*
              </label>
              <input
                onChange={handleChangeShipment}
                type="date"
                class="form-control bg-light"
                id="inputDate"
                name="expected_delivery_date"
                required
                alert="Please select the Delivery Date"
              />
            </div>
          </div>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputPO" class="form-label">
                PO Number*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputPO"
                placeholder="PO Number"
                name="po_number"
                required
                alert="Please fill the PO Number"
              />
            </div>
            <div class="col">
              <label for="inputDelivery" class="form-label">
                Delivery Number*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputDelivery"
                placeholder="Delivery Number"
                name="delivery_number"
                required
                alert="Please fill the Delivery Number"
              />
            </div>
          </div>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputNDC" class="form-label">
                NDC Number*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputNDC"
                placeholder="NDC Number"
                name="ndc_number"
                required
                alert="Please fill the NDC Number"
              />
            </div>
            <div class="col">
              <label for="inputBatch" class="form-label">
                Batch id*
              </label>
              <input
                onChange={handleChangeShipment}
                type="text"
                class="form-control bg-light"
                id="inputBatch"
                placeholder="Batch id"
                name="batch_id"
                required
                alert="Please fill the Batch id"
              />
            </div>
          </div>
          <div className="row g-4 p-2 justify-content-md-center">
            <div class="col">
              <label for="inputSerial" class="form-label">
                Serial number of Goods*
              </label>
              <input
                onChange={handleChangeShipment}
                type="numeric"
                class="form-control bg-light"
                id="inputSerial"
                placeholder="Serial number of Goods"
                name="serial_number_goods"
                required
                alert="Please fill the Serial number of Goods"
              />
            </div>
            <div class="col">
              <label for="inputDescription" class="form-label">
                Shipment Description
              </label>
              <textarea
                onChange={handleChangeShipment}
                type="text"
                class="form-control bg-light"
                id="inputDescription"
                name="shipment_description"
              />
            </div>
          </div>
          <div className="row  g-4 p-2 justify-content-md-center text-center">
            <div class="col">
              <button type="submit" className="btn-grad">CREATE SHIPMENT</button>
            </div>
            <div class="col">
              <button type="reset" className="btn-grad2">CLEAR DETAILS</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewShipment;
