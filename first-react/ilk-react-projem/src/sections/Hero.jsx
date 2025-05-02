import React from "react";

const Hero = () => {
  return (
    <header className="hero bg-light text-black text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bolder">A warm welcome!</h1>
        <p className="lead fs-3 fw-light">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className="btn btn-primary p-2  fw-bold fs-5 m-3">Call to action</button>
      </div>
    </header>
  );
};

export default Hero;

