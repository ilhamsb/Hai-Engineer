import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
      <center>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1" style = {{height: "300px"}}
      >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img 
              className="d-block w-100"
              src="https://i.ibb.co/kXDc4PB/eng.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Planing and Analysis</h3>
            <p>First</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/tmf4zNv/eng2.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Teamwork</h3>
            <p>Second</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/qkYBqYd/eng3.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Spirit and Motivation</h3>
            <p>Third</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </center>
    <br></br>
    <div class="container">
  <div class="row">
    <div class="col-sm">
<div class="card">

  <img class="card-img-top" src="https://i.ibb.co/hgftmDq/eng4.jpg" alt="Card image cap"/>

  <div class="card-body">
    <h4 class="card-title"><a>Civil Engineering</a></h4>
    <p class="card-text"></p>
    <br></br>
    <a href="#" class="btn btn-dark">Read more</a>

  </div>

</div>
    </div> &nbsp;&nbsp;
    <div class="col-sm">
    <div class="card">

<img class="card-img-top" src="https://i.ibb.co/TvcBg02/eng5.jpg" alt="Card image cap"/>

<div class="card-body">
  <h4 class="card-title"><a>Electical Engineering</a></h4>
  <p class="card-text"></p>
  <br></br>
  <a href="#" class="btn btn-dark">Read more</a>

</div>

</div>     
    </div> &nbsp;&nbsp;
    <div class="col-sm">
    <div class="card">

<img class="card-img-top" src="https://i.ibb.co/kSCkCNw/eng6.jpg" alt="Card image cap"/>

<div class="card-body">
  <h4 class="card-title"><a>Mechanic Engineering</a></h4>
  <p class="card-text"></p>
  <br></br>
  <a href="#" class="btn btn-dark">Read more</a>

</div>

</div>
    </div> &nbsp;&nbsp;
    <div class="col-sm">
    <div class="card">

<img class="card-img-top" src="https://i.ibb.co/8bqK0wk/eng7.jpg" alt="Card image cap"/>

<div class="card-body">
  <h4 class="card-title"><a>Architect Eng</a></h4>
  <p class="card-text"></p>
  <br></br>
  <a href="#" class="btn btn-dark">Read more</a>

</div>

</div>
    </div> &nbsp;&nbsp;
    <div class="col-sm">
    <div class="card">

<img class="card-img-top" src="https://i.ibb.co/6Rcft69/eng8.jpg" alt="Card image cap"/>

<div class="card-body">
  <h4 class="card-title"><a>Informatics Eng</a></h4>
  <p class="card-text"></p>
  <br></br>
  <a href="#" class="btn btn-dark">Button</a>

</div>

</div>
    </div>
  </div>
</div>
</React.Fragment>
    );
  }
}

export default Home;
