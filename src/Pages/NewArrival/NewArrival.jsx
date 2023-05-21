import React from "react";

const NewArrival = () => {
  return (
    <div className="my-16 px-7 lg:px-16 ">
      <div className="space-y-6 mb-16">
        <h2 className="text-5xl font-bold text-center">
          New Arrival <span className="text-[#F79837]">Toy</span>
        </h2>
        <p className="text-center text-xl">
          The very recent and New updated item only for your kids
        </p>
      </div>

      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
