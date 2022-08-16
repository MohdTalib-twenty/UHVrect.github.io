import React from "react";
import "./Style.css";
export default function Faculty() {
  return (
    <>
      <div className="faculty">
        <div className="container">
          <h3 className="text-center mt-5">Faculty</h3>
          <hr className="w-25 m-auto" />
          <div className="row mt-5">
            <div className=" offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card  mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                 src={require("../Data/img/Director.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Prof. Rachna Asthana
                    <br />
                    <span>Director,(AITH)</span>
                  </h5>
                  <p className="text-center">(Dean, Value Education Cell)</p>
                </div>
              </div>
            </div>
            <div className=" offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card rj mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/Rjesh.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Dr.Rajesh Kumar Gupta
                    <br />
                    <span>Dean Student wellfare,AITH </span>
                  </h5>
                  <p className="text-center">
                    {" "}
                    (Convener- Value Education Cell)
                  </p>
                </div>
              </div>
            </div>
            <div className=" offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card dp mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/dpsingh.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Dr. Devender Pratap Singh <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Co-ordinator- VE Cell-AITH) </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card  mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/Guruji.png")}
                  className="card-img-top img-fluid mt-3 mx-auto rounded-circle"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. Satyanand Jaiswal <br />
                    <span />
                  </h5>
                  <p className="text-center">
                    {" "}
                    (Co-co-ordinator- VE Cell-AITH)
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/shwet.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Ms. Sweta Tripathi <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/kt.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Ms. Kalpna Katiyar <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh  mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/ds.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. D.K.Sachan <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/un.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Dr. Ankit Gupta <br />
                    <span />
                  </h5>
                  <p className="text-center">(Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                src={require("../Data/img/pk.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. Pankaj Kumar Yadav <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
