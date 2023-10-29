import React from "react";

const NewShipment = () => {
    return (
        <div class="container">
            <div class="row p-4 heading text-center">
                <h1>Create New Shipment</h1>
            </div>
            <div class="row heading text-center">
                <span>Please fill all the details</span>
            </div>
            <div class="row ">
                <form className="createshipment">
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputShipment" class="form-label">Shipment Number*</label>
                            <input type="numeric" class="form-control bg-light" id="inputShipment" placeholder="Shipment Number"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputContainer" class="form-label">Container Number*</label>
                            <input type="numeric" class="form-control bg-light" id="inputContainer" placeholder="Container Number"/>
                        </div>
                    </div>
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputRoute" class="form-label">Route Details*</label>
                            <select id="inputRoute" class="form-select bg-light">
                                <option selected>Select Route</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="inputGoods" class="form-label">Goods Type</label>
                            <select id="inputGoods" class="form-select bg-light">
                                <option selected>Select Goods</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputDevice" class="form-label">Device*</label>
                            <select id="inputDevice" class="form-select bg-light">
                                <option selected>Select Device</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="inputDate" class="form-label">Expected Delivery Date*</label>
                            <input type="date" class="form-control bg-light" id="inputDate" />
                        </div>
                    </div>
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputPO" class="form-label">PO Number*</label>
                            <input type="numeric" class="form-control bg-light" id="inputPO"  placeholder="PO Number"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputDelivery" class="form-label">Delivery Number*</label>
                            <input type="numeric" class="form-control bg-light" id="inputDelivery" placeholder="Delivery Number"/>
                        </div>
                    </div>
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputNDC" class="form-label">NDC Number*</label>
                            <input type="numeric" class="form-control bg-light" id="inputNDC"  placeholder="NDC Number"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputBatch" class="form-label">Batch id*</label>
                            <input type="text" class="form-control bg-light" id="inputBatch"  placeholder="Batch id"/>
                        </div>
                    </div>
                    <div className="row g-4 p-2 justify-content-md-center">
                        <div class="col-md-4">
                            <label for="inputSerial" class="form-label">Serial number of Goods*</label>
                            <input type="numeric" class="form-control bg-light" id="inputSerial"  placeholder="Serial number of Goods"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputDescription" class="form-label">Shipment Description*</label>
                            <textarea type="text" class="form-control bg-light" id="inputDescription" />
                        </div>
                    </div>
                    <div className="row  g-4 p-2 justify-content-md-center text-center">
                        <div class="col-md-4">
                            <button>CREATE SHIPMENT</button>
                        </div>
                        <div class="col-md-4">
                            <button>CLEAR DETAILS</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewShipment;
