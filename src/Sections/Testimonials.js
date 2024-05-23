import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import '../Styling/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'John Doe',
      feedback: 'GFTech provided excellent service and the team, led by Abdulfatai, was incredibly responsive and professional. Highly recommended!',
      rating: 5
    },
    {
      name: 'Jane Smith',
      feedback: 'The project was delivered on time and exceeded our expectations. Abdulfatai from GFTech is a top-notch developer!',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      feedback: 'Working with GFTech has been a fantastic experience. Abdulfatai is very knowledgeable and delivered high-quality work.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      feedback: 'GFTech offers exceptional service and support. Abdulfatai ensured that all our requirements were met and provided valuable insights.',
      rating: 5
    },
    {
      name: 'David Brown',
      feedback: 'Abdulfatai and his team at GFTech are great to work with. They are efficient, skilled, and very professional. I highly recommend them!',
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="testimonials container mt-5">
      <h2 className="text-center mb-4">Customer Feedback & Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-2">
            <div className="cardd ">
              <div className="cardd-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.feedback}</p>
                <div className="rating mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={20} color="#FFD700" />
                  ))}
                </div>
                <p className="card-text text-end"><small className="text-muted">- Abdulfatai, GFTech</small></p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;