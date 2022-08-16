import React from "react";

export default function Practices() {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">Practices</h3>
        <hr className="w-25 mx-auto" />
        <div className="row">
          <div className="col-md-4">
            <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
              <img
                src={require("../Data/img/ppt.png")}
                className="card-img-top w-50 mx-auto mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">UHV2-Exercise-1</h5>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1JpqocFKJuikbxxf_hEqwwowA-4cvKObL"
                  className="btn btn-primary"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
              <img
                src={require("../Data/img/ppt.png")}
                className="card-img-top w-50 mx-auto mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">UHV2-Exercise-2</h5>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1JpqocFKJuikbxxf_hEqwwowA-4cvKObL"
                  className="btn btn-primary"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
              <img
                src={require("../Data/img/ppt.png")}
                className="card-img-top w-50 mx-auto mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">UHV2-Exercise-3</h5>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1JpqocFKJuikbxxf_hEqwwowA-4cvKObL"
                  className="btn btn-primary"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
