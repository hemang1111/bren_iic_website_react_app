import React, {Component} from 'react';
import './assets/css/style.css'
import banner4 from './assets/img/banner4.jpg'
import BREN from './assets/img/BREN.png'
import  Passion from "./assets/img/Passion.jpg"
import versatility from "./assets/img/versatility.jpg"
import userfocused from "./assets/img/userfocused.jpg"
import stressfree from "./assets/img/stressfree.jpg"
import banner2 from "./assets/img/banner2.jpg"
import banner1 from "./assets/img/banner1.jpg"
import logodraftsywhitetm from "./assets/img/Logo Draftsy White_TM.png"
import brian from "./assets/img/brian.png"
import rob from "./assets/img/rob.jpg"
import eddie from "./assets/img/eddie.jpg"
import neadom from "./assets/img/Neadom.jpg"
import $, { post } from 'jquery'


$( "#navbar" ).css( "border", "3px solid red" );




// if ($(window).width() < 960) {
//   $('#navbar').toggleClass('navbar')
//   $('i').toggleClass('bi-x')
//   console.log($(window).width())
// }
// else {
//   alert('More than 960');
// }


//  $(window).on("load",()=>{
//     $('#preloader').removeClass('d-none')
//     setTimeout(function(){
//     $('#preloader').addClass('d-none')
//     },1000)
//  })

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  // Do something
  if($('#navbar').hasClass( "navbar-mobile" )){
    $('#navbar').removeClass( "navbar-mobile" )
    $('#navbar').addClass( "navbar" )
    $('#navbar i').removeClass('bi-x')
    $('#navbar i').add('bi-list')

  }

  if(scroll > 20){
    $('#backtotop').addClass('active')
    $('#header').addClass('header-scrolled')
  }
  else{
    $('#header').removeClass('header-scrolled')
    $('#backtotop').removeClass('active')
  }
})



class  App extends Component {

  constructor(props){
    super(props)
    //state varible
    this.state={
      post  : {}
    }
    //bind methods
    this.navbarMobileClick = this.navbarMobileClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.callApi = this.callApi.bind(this)

    this.handleFormData = this.handleFormData.bind(this)
  }

  navbarMobileClick(){
    $('#navbar').toggleClass('navbar')
    $('#navbar').toggleClass('navbar-mobile')
    $('#navbar i').toggleClass('bi-x')
  }  

// async callApi(){
//   console.log("call api")
//   const response = await fetch('/api/hello');
//   const body = await response.json();
//   if (response.status !== 200) throw Error(body.message);
  
//   return body;
// }

handleFormData(name,value){
  console.log(name)
  console.log(value)
  this.state.post[name] = value
  console.log(this.state.post)
  this.setState({post : this.state.post},()=>{
    console.log(this.state.post)
  })
}

  async handleSubmit(e){
    e.preventDefault()
    const response = await fetch('/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({post : Object.assign({},{})})
  }
  // return(
  //   <>
  
  //   <section id="hero" class="d-flex align-items-start justify-content-center">
  
  //     <div align="center" class="container" style={{zIndex : 2 , position : 'absolute'}}>
	// 			<h1><b>WELCOME TO BREN, LLC</b></h1>
	// 			<h2><b>We Provide A Unique & Stressless Experience with Passion </b></h2>
	// 			<a href="#contact1" class="btn-get-started scrollto">Contact Us</a>
  //     </div>


  //     <div  class=" col-lg-12 d-flex justify-content-center align-items-stretch position-relative">
  //     <img src={banner4} alt="image" class="img-fluid bg-img" />    
  //      <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a> 
  //       </div>
	
  // </section>
  //   </>
  // )

  componentDidMount(){
    this.setState({post : {}})
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  render(){
    return (
    
      <>
      <div className="App">
        {/* ======= Top Bar ======= */}
    {/* <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between"> */}
        {/* <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i> <a href="mailto:hello@bren.llc">hello@bren.llc</a>
          <i className="bi bi-phone"></i> +91 9685746352
        </div> */}
        {/*<div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></i></a>
        </div> 
      </div>
    </div> */}
  
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
  
        {/* <h1 className="logo me-auto"><a href="index.html">BREN LLC</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
      
      <a href="index.html"><img style={{width:"15%"}} src={BREN} className="img-fluid logo me-auto" alt /></a>
  
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">Our Values</a></li>
            <li><a className="nav-link scrollto" href="#whyus1">Our Story</a></li>
        <li><a className="nav-link scrollto" href="#services">Our Apps</a></li>
            <li><a className="nav-link scrollto" href="#doctors">Our Founders</a></li>
            {/* <li><a className="nav-link scrollto" href="#departments">Departments</a></li> */}
            {/*<li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> */}
            <li><a className="nav-link scrollto" href="#contact1">Contact us</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={this.navbarMobileClick}></i>
        </nav>{/* .navbar */}
  
        {/* <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a> */}
  
      </div>
    </header>{/* End Header */}
  
    {/* ======= Hero Section ======= */}
    
    
    
    <section id="hero" className="d-flex align-items-start justify-content-center">
    
    {/* <div className="container">
        <h1 >WELCOME TO BREN LLC </h1>
        <h2>We Provide A Unique & Stressless Experience with Passion </h2>
        <a href="#contact" className="btn-get-started scrollto">Contact Us</a>
      </div> */}
    
    {/* ==================================== -- >
    {/* Define the slideshow container */}
      {/* <div id="slideshow"> */}
          {/* <div  className="slide-wrapper"> */}
               
          {/* Define each of the slides and write the content */}
            
              {/* <div  className="slide">
                  <h1 className="slide-number">
                      <img src="assets/img/banner1.jpg" alt="" className="img-fluid">					
                  </h1>
              </div> */}
               {/* <div  className="slide">
                  <h1 className="slide-number">
                      <img src="./assets/img/banner2.jpg" alt="" className="img-fluid">
                  </h1>
              </div>
              <div  className="slide">
                  <h1 className="slide-number">
                      <img src="./assets/img/1.jpg" alt="" className="img-fluid">
                  </h1>
              </div> */}
        {/* <div className="slide">
                  <h1 className="slide-number">
                      <img src="./assets/img/banner4.jpg" alt="" className="img-fluid">
                  </h1>
              </div> */}
         {/* </div> */}
      {/* <div align="center" className="container">
          <h1><b>WELCOME TO BREN, LLC</b></h1>
          <h2><b>We Provide A Unique & Stressless Experience with Passion </b></h2>
          <a href="#contact1" className="btn-get-started scrollto">Contact Us</a>
        </div>
      </div> */}
      {/* <div className="row"> */}
        <div align="center" className="container" style={{zIndex : '2' , position : 'absolute'}}>
          <h1><b>WELCOME TO BREN, LLC</b></h1>
          <h2><b>We Provide A Unique & Stressless Experience with Passion </b></h2>
          <a href="#contact1" className="btn-get-started scrollto">Contact Us</a>
        </div>
      {/* </div> */}
      
        <div style={{overflow:"hidden " , position : "absolute"}} style={{width:"100%"}} className="col-lg-12 d-flex justify-content-center align-items-stretch position-relative">
          <img src={banner4} alt="" className="img-fluid bg-img" />
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
        </div>
    
    {/* ================================================= */}
    
      
    </section>{/* End Hero */}
  
    <main id="main">
  
      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container">
  
          <div className="row">
              {/*<div className="col-lg-4 d-flex align-items-stretch">
               <div className="row">
                <h3>Why Choose BREN LLC?</h3>
          <h4>Passion</h4>
                <p align ="left">
                  We bring enthusiasm and passion to every project, allowing us to produce amazing results.
                </p>
                <div className="text-center">
                  <a href="#about" className="more-btn">Know More <i className="bx bx-chevron-right"></i></a>
                </div>
          
          
          
        </div> 
              </div>*/}
        
            <div className=" d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="d-flex flex-column d-sm-flex flex-sm-row"> 
          
          <div   className="col-sm-3 d-flex align-items-stretch justify-content-center">
          
                    <div className="icon-box mt-4 mt-xl-0">
            <img style={{width:"25%"}} src={Passion} alt="" className="img-fluid" />
                      {/* <i className="bx bx-receipt"></i> */}
                      <h4>Passion</h4>
                      <p align ="left">We bring enthusiasm and passion to every project, allowing us to produce amazing results.</p>
                    </div>
                  </div>
          
                  <div  className="col-sm-3 d-flex align-items-stretch justify-content-center">
                    <div className="icon-box mt-4 mt-xl-0">
            <img style={{width:"25%"}} src={versatility} alt="" className="img-fluid" />
                      {/* <i className="bx bx-receipt"></i> */}
                      <h4>Versatility</h4>
                      <p align ="left">Remaining open-minded allows us to create unique products and be adaptable.</p>
                    </div>
                  </div>
                  <div  className="col-sm-3 d-flex align-items-stretch justify-content-center">
                    <div className="icon-box mt-4 mt-xl-0">
            <img style={{width:"25%"}} src={userfocused} alt="" className="img-fluid" />
                      {/* <i className="bx bx-cube-alt"></i> */}
                      <h4>User-Focused</h4>
                      <p align ="left">Everything we do is with users in mind with the aim of making our apps a success.</p>
                    </div>
                  </div>
                  <div  className="col-sm-3 d-flex align-items-stretch justify-content-center">
                    <div className="icon-box mt-4 mt-xl-0">
            <img style={{width:"25%"}} src={stressfree}  alt="" className="img-fluid" />
                      {/* <i className="bx bx-images"></i> */}
                      <h4>Stress-Free</h4>
                      <p align ="left">Our working relationships are relaxed and productive – nobody needs stress.</p>
                    </div>
                  </div>
                </div>
              </div>{/* End .content*/}
            </div>
          </div>
  
        </div>
      </section>{/* End Why Us Section */}
  
      {/* ======= About Section ======= */}
    
    <section id="about" className="about">
        <div className="container">
            
          <div className="section-title">
            <h2>Our Focus & Values</h2>
            <h3> A mobile app development company with a difference </h3>
            <p align="justify" align="left">We exist to solve problems. Through custom mobile app development, we create systems that fill gaps within businesses, 
        streamline processes, and provide the tools you need to skyrocket the efficiency of operations. 
        At the heart of our purpose is to make applications that give the user a stressless experience. 
        From initial idea conception through testing and final delivery, we ensure a smooth and enjoyable ride, 
        meaning we can always focus on our end goal.</p>
          </div>
      
      <div className="section-title">
      </div>
      <div className="container-fluid">
      <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-stretch position-relative">
        <img src={banner2}  alt="" className="img-fluid" />
               {/*<a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
            </div>
        </div>
        </div>
      </div>
      {/* <div className="section-title">
            <h2>Our Story</h2>
        <h3> The making of BREN, LLC </h3>
            <p align="left">What do you get when you cross two pool guys, an IT guy, and an accountant? Heck, 
          if we know, but that is where each of the BREN, LLC founders come from. Born out of the beautiful city of Charleston, SC, 
          we’ve combined our passions for project management, customer service, and mobile app development to provide users with a fun, 
          engaging, and stress-free experience, with the added bonus of world-class apps.</p>
      </div> */}
      
      {/* <div className="section-title">
            <h2>Our apps</h2>
        <p align="left">An innovative, fearless, and energetic approach leads us to create unique ideas that fill gaps, 
          inspire engagement, and produce endless amounts of fun. Our skillset is versatile, we’re open-minded, and 
          we’ll work together to produce an application users love.</p>
      </div> */}
    </section>
    
    <section id="whyus1" className="whyus1">
        <div className="container">
  
          <div className="section-title">
            <h2>Our Story</h2>
        <h3> The making of BREN, LLC </h3>
            <p align="justify" align="left">What do you get when you cross two pool guys, an IT guy, and an accountant? Heck, 
          if we know, but that is where each of the BREN, LLC founders come from. Born out of the beautiful city of Charleston, SC, 
          we’ve combined our passions for project management, customer service, and mobile app development to provide users with a fun, 
          engaging, and stress-free experience, with the added bonus of world-class apps.</p>
    
    
       <section id="about" className="about">
        <div className="container-fluid">
  
          {/* <div className="row"> */}
            <div className="col-lg-12">
              <img src={banner1} alt="" className="img-fluid" />
               {/*<a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
            </div>
  
            {/*<div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Our Focus & Values</h3>
        <h4> A Mobile app development company with a difference </h4>
              <p align="left"> We exist to solve problems. Through custom mobile app development, we create systems that fill gaps within businesses, 
        streamline processes, and provide the tools you need to skyrocket the efficiency of operations. 
        At the heart of our purpose is to make applications that give the user a stressless experience. 
        From initial idea conception through testing and final delivery, we ensure a smooth and enjoyable ride, 
        meaning we can always focus on our end goal. </p>
  
              <div className="icon-box">
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title"><a href="">Our Story, The Making of Bren LLC</a></h4>
                <p className="description" align="left">What do you get when you cross two pool guys, an IT guy, and an accountant? Heck, 
          if we know, but that is where each of the BREN, LLC founders come from. Born out of the beautiful city of Charleston, SC, 
          we’ve combined our passions for project management, customer service, and mobile app development to provide users with a fun, 
          engaging, and stress-free experience, with the added bonus of world-class apps.</p>
              </div>
  
              <div className="icon-box">
                {/*<div className="icon"><i className="bx bx-gift"></i></div> 
          <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title"><a href="">Our Apps</a></h4>
                <p className="description" align="left">An innovative, fearless, and energetic approach leads us to create unique ideas that fill gaps, 
          inspire engagement, and produce endless amounts of fun. Our skillset is versatile, we’re open-minded, and 
          we’ll work together to produce an application users love.</p>
              </div>
  {/* ------
              <div className="icon-box">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <h4 className="title"><a href="">Dine Pad</a></h4>
                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
              </div>  ----------------- 
  
            </div>
          </div>
  
        </div>
      </section> End About Section */}
  
  
      {/* ======= Counts Section ======= */}
      {/* <section id="counts" className="counts">
        <div className="container">
  
          <div className="row">
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                <p>Doctors</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="far fa-hospital"></i>
                <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                <p>Departments</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                <p>Research Labs</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                <p>Awards</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section> End Counts Section */}
  
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>Our Apps</h2>
            <p align="justify" align="left">An innovative, fearless, and energetic approach leads us to create unique ideas that fill gaps, 
          inspire engagement, and produce endless amounts of fun. Our skillset is versatile, we’re open-minded, and 
          we’ll work together to produce an application users love.</p>
        
        {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-pills"></i></div>
                <h4><a href="">Sed ut perspiciatis</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-hospital-user"></i></div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-dna"></i></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-wheelchair"></i></div>
                <h4><a href="">Dele cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-notes-medical"></i></div>
                <h4><a href="">Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section> End Services Section */}
  
      
      {/* ======= Departments Section ======= */}
      <section id="departments" className="departments">
        <div className="container">
  
          {/* <div className="section-title">
            <h2>Our applications</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div> */}
  
          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Draftsy</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Draftsy Fantasy Sports</h3>
                      <h4 className="fst-italic"> Your New Fantasy </h4>
                      <p style={{fontSize:"13px"}} style={{fontFamily:"verdana"}} align="justify" align="left" >Fantasy sports platforms just got a feel. Draftsy offers a unique experience and variety of games that appeal to all sports fans. 
        Using a simplified draft pick environment, this app unites sports fans through a draft platform like no other. 
        Often, fantasy sports users lose interest throughout the season or get consumed with the amount of time it takes to manage their team. 
        With Draftsy, the simplified process and minimal user commitment mean players will spend less time managing their team and more time 
        enjoying the sport they love. Our hometown approach is designed to bring people together in a competitive environment but without the 
        need of being a tactical genius to be in with a chance of winning. Draftsy is for everyone.</p>
            </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={logodraftsywhitetm} style={{padding:"25px"}} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane" id="tab-2">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-2.jpg" alt="" className="img-fluid">
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-3.jpg" alt="" className="img-fluid">
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-4.jpg" alt="" className="img-fluid">
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-5.jpg" alt="" className="img-fluid">
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
  
        </div>
      </section>   {/* End Departments Section */}
    
    {/* ======= Appointment Section ======= 
      <section id="appointment" className="appointment section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div className="validate"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="department" id="department" className="form-select">
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="doctor" id="doctor" className="form-select">
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
                <div className="validate"></div>
              </div>
            </div>
  
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Make an Appointment</button></div>
          </form>
  
        </div>
      </section> End Appointment Section */}
  
  
      {/* ======= Doctors Section ======= */}
      <section id="doctors" className="doctors">
        <div className="container">
  
          <div className="section-title">
            <h2>Our Founders</h2>
            {/*<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
        Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
  
          <div className="row">
  
            <div className="col-lg-6 mt-4 mt-lg-4">
              <div className="d-flex flex-column d-sm-flex flex-sm-row">
                <div className="pic col-lg-4 col-sm-6"><img src={brian} className="img-fluid" alt="" /></div>
                <div className="member-info col-sm-6 p-3 pt-0">
                  <h4>Brian Peppin </h4>
                  <span><b><i>Chief Finance Officer</i></b></span>
                  <p  style={{fontSize:"11px"}}  align="justify"> &emsp; "Sacrificing a short time of joy and stress-free life to result in a lifetime of joy and happiness for everyone around you is simply just worth it. Embrace the risk for a Life altering reward".</p>
                  {/* <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 mt-4 mt-lg-4">
              <div className=" d-flex flex-column d-sm-flex flex-sm-row">
                <div className="pic col-lg-4 col-sm-6"><img src={rob} className="img-fluid" alt="" /></div>
                <div className="member-info col-sm-6 p-3 pt-0">
                  <h4>Rob Peppin </h4>
                  <span><b><i>Chief Operations Officer</i></b></span>
                  <p style={{fontSize:"11px"}} align="justify"> &emsp; "There is always room for improvement, internally 
          and in everything else".</p>
                  {/* <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 mt-4 mt-lg-4">
              <div className="d-flex flex-column d-sm-flex flex-sm-row">
                <div className="pic col-lg-4 col-sm-6"><img src={eddie} className="img-fluid" alt="" /></div>
                <div className="member-info col-sm-6 p-3 pt-0">
                  <h4>Eddie O’Donnell </h4>
                  <span><b><i>Chief Marketing Officer</i></b></span>
          
                  <p style={{fontSize:"11px"}}  align="justify"> &emsp;"We all deserve to enjoy life, and we live for 
          the moments that bring us this joy. It is a truly remarkable feeling to create something that brings people together and then to witness the joy they experience".  </p>
                  {/*  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 mt-4 mt-lg-4">
              <div className="d-flex flex-column d-sm-flex flex-sm-row">
                <div className="pic col-lg-4 col-sm-6"><img src={neadom} className="img-fluid" alt="" /></div>
                <div className="member-info col-sm-6 p-3 pt-0">
                  <h4>Neadom Tucker </h4>
                  <span><b><i>Chief Technology Officer</i></b></span>
                  <p style={{fontSize:"11px"}}  align="justify">&emsp; “Our mind is our only limit. It is when we push 
          ourselves beyond what we thought we could do that we achieve greatness”.</p>
                  {/* <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div> */}
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>{/* End Doctors Section */}
  
      {/* ======= Frequently Asked Questions Section =======
      <section id="faq" className="faq section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>
  
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
  
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>
  
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>
  
              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  </p>
                </div>
              </li>
  
            </ul>
          </div>
  
        </div>
      </section> End Frequently Asked Questions Section */}
  
      {/* ======= Testimonials Section ======= 
      <section id="testimonials" className="testimonials">
        <div className="container">
  
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="">
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>  {/* End testimonial item 
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="">
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>   {/* End testimonial item 
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="">
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>    {/* End testimonial item 
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="">
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>    {/* End testimonial item 
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="">
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>   {/* End testimonial item 
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section> End Testimonials Section */}
  
      {/* ======= Gallery Section ======= 
      <section id="gallery" className="gallery">
        <div className="container">
  
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
  
        <div className="container-fluid">
          <div className="row g-0">
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid">
                </a>
              </div>
            </div>
  
          </div>
  
        </div>
      </section> End Gallery Section */}
  
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
  
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p> Whether you’d like to share some ideas or get on board and invest in BREN LLC, we’d love to hear from you.  </p>
      </div>
        </div>
      <div className="pic"><img src="assets/img/contactus-banner.jpg" className="img-fluid" alt="" />
      </div>
        {/*<div>
          <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div> */}
      
      
    <section id="contact1" className="contact1">
        <div className="container">
          <div className="row mt-5">
  
            <div className="col-lg-2">
              <div className="info">
                {/* <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
  
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>hello@bren.llc</p>
                </div>
  
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div> */}
  
              </div>
  
            </div>
  
            <div className="col-lg-8">
  
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" onChange={(e)=>{this.handleFormData(e.target.name,e.target.value)}} className="form-control" 
                     value={this.state.post.name ? this.state.post.name : ''} id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" onChange={(e)=>{this.handleFormData(e.target.name,e.target.value)}}
                    value={this.state.post.email ? this.state.post.email : ''} id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" onChange={(e)=>{this.handleFormData(e.target.name,e.target.value)}} 
                  value={this.state.post.subject ? this.state.post.subject : ''} id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" onChange={(e)=>{this.handleFormData(e.target.name,e.target.value)}} 
                  value={this.state.post.message ? this.state.post.message : ''} placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit"> Send Message</button></div>
            
              </form>
  
            </div>
  
          </div>
  
        </div>
      </section>
      
      <div className="copyright">
            &copy; Copyright <strong><span>BREN,LLC</span></strong>. All Rights Reserved
          </div>
      
      </section>{/* End Contact Section */}
  
      </div>
      </div>
      </section>
      </div>
      </section>
      </div>
      </div>
      </section>
  
    </main>{/* End #main */}
  
    {/* ======= Footer ======= */}
    {/*<footer id="footer">
  
      <div className="footer-top">
        <div className="container">
          <div className="row">
  
            {/* <div className="col-lg-3 col-md-6 footer-contact">
              <h3>BREN, LLC</h3>
              <p>
                A108 Adam Street <br>
                New York, NY 535022<br>
                United States <br><br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong>Email:</strong> hello@bren.llc<br>
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#home">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#doctors">Team</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe">
              </form>
            </div>
  
          </div>
        </div>
      </div> */}
    
      {/* <div className="container d-md-flex py-4">
  
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>BREN,LLC</span></strong>. All Rights Reserved
          </div> */}
          {/*<div className="credits"> */}
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          {/* </div> */}
       {/*  </div> */}
        {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>*/}
    {/* </footer> */} {/* End Footer */}
  
      <div id="preloader" className="d-none"></div>
        <a href="#" id="backtotop" className="back-to-top d-flex align-items-center justify-content-center "><i className="bi bi-arrow-up-short"></i></a>
      </div>
      </>
    )
  }
  
}

export default App
