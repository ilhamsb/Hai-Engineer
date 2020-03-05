import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4 bg-dark">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Hai Engineer
            </h6>
            <p>
              The Place of Engineers
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">List Engineers</h6>
            <p>
              <i href="#!">Civil Engineers</i>
            </p>
            <p>
              <i href="#!">Electical Engineers</i>
            </p>
            <p>
              <i href="#!">Mechanical Engineers</i>
            </p>
            <p>
              <i href="#!">Arsitech Engineers</i>
            </p>
            <p>
              <i href="#!">Informatics Engineers</i>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <i href="#!" className="fab fa-linkedin-in mr-3"/>Ilham Setiabudi
            </p>
            <p>
              <i href="#!" className= "fab fa-facebook-f mr-3"/>Ilham Setiabudi
            </p>
            <p>
              <i href="#!" className="fab fa-twitter mr-3"/>ilham_forza
            </p>
            <p>
              <i href="#!" className="fab fa-google-plus mr-3"/>ilham@gmail.com
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Depok, Jawa Barat, Indonesia 
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +6281212121212
            </p>
            <p>
              <i className="fa fa-print mr-3" /> +6281212121212
            </p>
          </MDBCol>
        </MDBRow>
        <hr style={{borderColor: "#9999"}}/>
        <MDBRow className="d-flex align-items-center">
        <center>
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <i href="#"> Ilham Setiabudi </i>
            </p>
            </center>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;