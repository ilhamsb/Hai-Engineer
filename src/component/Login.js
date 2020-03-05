import React from "react";
import API from "../helpers/API";
import axios from 'axios'
import config from "../config/api.config.json"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter} from "mdbreact";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        username: "",
        fullname: "",
        password: "",
        photo: "",
        is_deleted: 'false',
        status: 'unlocked',
        login_ke: '0',
        email: ''
      },
      isRequest: false
    };
    this.onSignIn = this.onSignIn.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.submitHandler = this.submitHandler.bind(this)
  }
  textChanged(e) {
    let tmp = this.state.formdata;
    tmp[e.target.name] = e.target.value;
    this.setState({
      formdata: tmp
    });
  }

  submitHandler(){
    let token = localStorage.getItem(config.LS.TOKEN)
    let option = {
        url:config.BASE_URL+config.ENDPOINTS.USER, method: 'post',
        header:{
            'Authorization': token,
            'Content-Type' : 'application/json'
        },
        data:this.state.formdata
    }
  axios(option)
  .then((response) =>{
      if(response.data.code === 200) {
      alert('Success')
      window.location.reload()
      } else {
          alert(response.data.message)
      }
    })
  .catch((error) => {
  console.log(error)
    })
  }
  async onSignIn() {
    this.setState({
      isRequest: true
    });

    let result = await API.login(
      this.state.formdata.username,
      this.state.formdata.password
    );

    if (result.code === 200) {
      localStorage.setItem(
        config.LS.USERDATA,
        JSON.stringify(result.message.userdata)
      );
      localStorage.setItem(config.LS.TOKEN, result.message.token);
      this.props.history.push('/home');
      window.location.reload()
    } else {
      alert(result.message);
    }

    this.setState({
      isRequest: false
    });
  }

  render() {
    return (
      <React.Fragment>
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
      <li class="nav-item active">
        <a class="nav-link text-white" href = "#masuk" data-toggle="modal">Masuk</a>
      </li>
      </div>
     </ul>
     <ul className="navbar-nav">
      <div className="mr-2">
      <li class="nav-item active">
        <a class="nav-link text-white" href = "#daftar" data-toggle="modal">Daftar</a>
      </li>
      </div>
     </ul>
  </div>
  </div>
</nav>
<div class="modal" id="masuk" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white">Masuk</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" 
          class="form-control" 
          placeholder="username"
          name="username"
          required=""
          autoFocus=""
          value={this.state.username}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" 
          class="form-control" 
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.textChanged}
          />
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" disabled={this.state.isRequest}
        onClick={this.onSignIn}>Masuk</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="daftar" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white">Daftar</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-group">
          <label for="fullname">Fullname</label>
          <input type="text" 
          class="form-control" 
          placeholder="fullname"
          name="fullname"
          value={this.state.formdata.fullname}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" 
          class="form-control" 
          placeholder="email"
          name="email"
          value={this.state.formdata.email}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" 
          class="form-control" 
          placeholder="username"
          name="username"
          value={this.state.formdata.username}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" 
          class="form-control" 
          placeholder="password"
          name="password"
          value={this.state.formdata.password}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="photo">Photo</label>
          <input type="text" 
          class="form-control" 
          placeholder="photo"
          name="photo"
          value={this.state.formdata.photo}
          onChange={this.textChanged}
          />
        </div>
          </form>
          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" onClick = {this.submitHandler}>Daftar</button>
      </div>
    </div>
  </div>
</div>
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
    <div class="jumbotron hoverable p-4">
  <div class="row">
    <div class="col-sm">
      <div class="view overlay">
        <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" class="img-fluid" 
        alt="Sample image for first version of blog listing" style={{height: "300px"}}/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      </div>

    <div class="col-sm">
      <a href="#!" class="green-text">
        <br></br>
        <h6 class="h6 pb-1"><i class="fas fa-desktop pr-1"></i> Work</h6>
      </a>
      <br></br>
      <h4 class="h4 mb-4">This is title of the news</h4>

      <p class="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
      <p class="font-weight-normal">by <a><strong>Ilham Setiabudi</strong></a></p>
      <a class="btn text-white btn-dark" href = "#login" data-toggle="modal">Get Started</a>
    </div>
  </div>
</div>
<div class="modal" id="login" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white">Masuk</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" 
          class="form-control" 
          placeholder="username"
          name="username"
          required=""
          autoFocus=""
          value={this.state.username}
          onChange={this.textChanged}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" 
          class="form-control" 
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.textChanged}
          />
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" disabled={this.state.isRequest}
        onClick={this.onSignIn}>Masuk</button>
      </div>
    </div>
  </div>
</div>

    {/* <div class="container">
  <div class="row">
    <div class="col-sm">
<div class="card">

  <img class="card-img-top" src="https://i.ibb.co/hgftmDq/eng4.jpg" alt="Card image cap"/>

  <div class="card-body">
    <h4 class="card-title"><a>Civil Engineering</a></h4>
    <p class="card-text"></p>
    <br></br>
    <a href="#" class="btn btn-dark">Button</a>

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
  <a href="#" class="btn btn-dark">Button</a>

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
  <a href="#" class="btn btn-dark">Button</a>

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
  <a href="#" class="btn btn-dark">Button</a>

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
</div> */}
</React.Fragment>


    );
  }
}

export default Header;
