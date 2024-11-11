import React from 'react';


const Home = () => {

  const marqueeStyle = {
    fontSize: '20px',
    backgroundColor: 'rgb(255,250,205)',
  };

  const carouselImageStyle = {
    height: '620px',
    width: '80%',
  };

  const ourServicesStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: 'rgb(245,222,179)',
  };

  const serviceCardStyle = {
    display: 'inline-block',
    width: '280px',
    height: '380px',
    margin: '15px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: ' rgb(224,255,255)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    verticalAlign: 'top',
  };

  const serviceImageStyle = {
    height: '150px',
    width: '100%',
    objectFit: 'cover', 
    borderRadius: '8px 8px 0 0',
  };

  const serviceTitleStyle = {
    fontSize: '20px bold',
    margin: '10px 0',
  };

  const serviceDescriptionStyle = {
    fontSize: '15px',
    color: 'black',
  };

  return (
    <>
     
      <marquee style={marqueeStyle} scrollAmount="10">
        Welcome to our event management services
      </marquee>

      
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://alankaran.com/wp-content/uploads/2019/11/Alankaran-Wedding-Event-Planner-Hyderabad.jpg" className="d-block w-100" alt="..." style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Marriage at Delhi mahal</h5>
              <p>Elegant setting for couples, with luxurious venues and exquisite services to create a memorable wedding experience.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://blog.woodenstreet.com/images/data/image_upload/1668162838banner_image.jpg" className="d-block w-100" alt="..." style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Children's day</h5>
              <p>Children's Day celebrates children's rights, joy, and well-being with activities.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.licdn.com/dms/image/v2/C5612AQFDXzzapeJe0A/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520196055762?e=1736380800&v=beta&t=7lnDYvcXdk3Dztf37WHhkCCSNwkT8CuSgbYc_lAdsjo" className="d-block w-100" alt="..." style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>College Fest at UP university</h5>
              <p>A college fest is a vibrant celebration of student creativity, talent, culture, music, dance, and workshops.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
      <div style={ourServicesStyle}>
        <h2>Our Services</h2>
        <div style={serviceCardStyle}>
          <img src="https://www.reventals.com/blog/wp-content/uploads/2019/06/AdobeStock_199908874.jpeg" alt="Food Service" style={serviceImageStyle} />
          <h3 style={serviceTitleStyle}>Food Catering</h3>
          <p style={serviceDescriptionStyle}>Delicious and diverse menu options catering to various tastes, with professional staff ensuring a memorable dining experience for every event.</p>
        </div>
        <div style={serviceCardStyle}>
          <img src="https://as1.ftcdn.net/v2/jpg/05/81/37/26/1000_F_581372657_7TjQTPFhNLCj9RXTVVfVVhugwzVYoxjK.jpg" alt="DJ Service" style={serviceImageStyle} />
          <h3 style={serviceTitleStyle}>DJ & Music</h3>
          <p style={serviceDescriptionStyle}>Our DJ services bring the best of music, creating an energetic ambiance with professional DJs and high-quality sound systems.</p>
        </div>
        <div style={serviceCardStyle}>
          <img src="https://s.hdnux.com/photos/01/20/64/15/21185399/3/rawImage.jpg" alt="Fireworks" style={serviceImageStyle} />
          <h3 style={serviceTitleStyle}>Fireworks</h3>
          <p style={serviceDescriptionStyle}>Light up your special event with our breathtaking fireworks displays, tailored to amaze and create unforgettable moments.</p>
        </div>
        <div style={serviceCardStyle}>
          <img src="http://3.bp.blogspot.com/-5iRRCWre_Qk/VE_wahtsmUI/AAAAAAAATuM/jhNzs34hI4c/s1600/145.JPG" alt="Rain Dance" style={serviceImageStyle} />
          <h3 style={serviceTitleStyle}>Rain Dance</h3>
          <p style={serviceDescriptionStyle}>Enjoy a fun-filled rain dance experience with safe, controlled water flow and lively music to keep everyone entertained.</p>
        </div>
      </div>
      <br/><br/><br/>
    </>
  );
};

export default Home;
