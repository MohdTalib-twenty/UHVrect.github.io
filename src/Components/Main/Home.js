import React from "react";
import "./Style.css"

export default function Home() {
  return (
    <>
      <>
        <div id="head" className="pt-5">
          <div className="container ">
            <div className="row mt-5">
              <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                <h3 className="text-white">Induction Program Cell</h3>
                <h4 className="text-white">
                  Faculty Development Program <br /> on Student Induction
                  (FDP-SI )
                </h4>
                <button className="btn mt-3">
                  <a className="text-white ">Register Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* History */}
        <div id="history">
          <div className="container mt-5">
            <h2 className="text-center mt-5">History</h2>
            <hr className="w-25 m-auto" />
            <p className="mt-5 ">
              The journey of Value Education Cell in Dr. Ambedkar Institute of
              Technology for Handicapped (AITH), Kanpur has been quite
              encouraging. It was established in 17 November 2018 at AITH to
              address the need and role of value education to the development of
              a holistic and human world vision. There has been organised one
              day seminar for establishing the VE- Cell in AITH. It was
              conducted in the presence of Prof. Rachna Asthana,
              Director-AITH-Kanpur, Dr. Rajesh Kumar Gupta, Dean, Student well
              fair, AITH, Sri. Bhanu Pratap Singh, HOD-Value education
              department- AKTU, Director, Dean, all Hods and all faculties of
              AITH also participated in the seminar to understand the real need
              and application of Value education. It has been decided by the
              institute that all the courses of Value education must be
              completed by all students with their semester. The institute will
              now organize weekly meetings with those faculty members who have
              gone through the short and full eight days workshop conducted by
              AKTU. Many faculty members re-attended the eight days Faculty
              development program with their family members and also attended
              the higher-level workshops. Some faculty members are practicing
              this more rigorously and in continuation of the same they are
              facilitating the workshop in other institutions and universities
              as resource person. Faculty members of institute are voluntarily
              conducting the workshops on their own for the students, faculty
              and staff. On behalf of such environment, we are also able to do
              evening workshop with handicapped students. We are also conducting
              the weekly meeting with handicapped and general students both. As
              a result of such types of courses, workshop and meetings we are
              getting that the student are being more confident in their life
              and self-disciplined. It is prime importance of Value Education
              Cell to provide an adequate value input (which is based on the
              existential reality) for a perfectional transformation and
              development of a holistic world vision through a guided process of
              self-exploration.
            </p>
          </div>
        </div>
        {/* gallery */}
        <div id="galler">
          <div className="container">
            <div className="row">
              <div className=" offset-3 col-6 mt-5">
                <h3 className="text-center">Gallery</h3>
                <hr className="w-25 m-auto" />
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide mt-5"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={require("../Data/img/p1.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                      src={require("../Data/img/p2.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                      src={require("../Data/img/p3.webp")}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
