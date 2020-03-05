import React from "react";
import {Link} from 'react-router-dom'
import apiconfig from '../config/api.config.json'
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";

class Header extends React.Component {

  componentWillReceiveProps(newProps) {
    this.setState({
        formdata : newProps.username,
    })
}

  onSignOut () {
    localStorage.clear();
    //this.Props.history.push('/')
}

  render() {
    let userdata = JSON.parse(localStorage.getItem(apiconfig.LS.USERDATA))
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-white ml-4" href="/home">Hi Engineer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class = "container">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Study
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Civil Engineering</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Electical Engineering</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Mechanical Engineering</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Architect Engineering</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Informatics Engineering</a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <div className="mr-2">
    <div class="dropdown">
      <button class="btn bg-transparent text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Hallo, {userdata[0].username}
      </button>
      <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item text-white" href = "#profil" data-toggle="modal">Profil</a>
        <div class="dropdown-divider"></div>
        <Link class="dropdown-item nav-link" to = "" onClick = {this.onSignOut}>
        <a>Keluar</a>
        </Link>
      </div>
      <div class="modal" id="profil" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
    <MDBRow>
      <MDBCol style={{ minHeight: '26rem' }}>
        <center>
            <img src={userdata[0].photo} alt="" className="img-circle" style={{height:"200px"}} />
            <MDBCardBody>
              <h3 className="font-weight-bold text-dark">{userdata[0].fullname}</h3>
              <hr style={{borderWidth:"2", borderColor:"#000000"}}/>
              <h5 className="font-weight-bold text-dark">Software Engineer</h5>
            </MDBCardBody>
        
          <MDBCard className="face back">
            <MDBCardBody>
              <h4 className="font-weight-bold text-dark">About me</h4>
              <hr style={{borderWidth:"2", borderColor:"#000000"}}/>
              <p class="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                dolores nihil quae in mollitia asperiores ut rerum
                repellendus, voluptatum eum, officia laudantium quaerat?
              </p>
              <hr />
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <MDBIcon icon="facebook" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="twitter" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg gplus-ic">
                    <MDBIcon icon="google-plus" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg li-ic">
                    <MDBIcon icon="linkedin" brand />
                  </a>
                </li>
              </ul>
              <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
              </a>
            </MDBCardBody>
          </MDBCard>
          </center>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
    </div>
    </div>
    </div>
      </div>
     </ul>
  </div>
  </div>
</nav>


    );
  }
}

export default Header;
