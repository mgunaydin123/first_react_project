import React from "react";
import Card from "../components/Card";

const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="row m-4">
          <div className="col-lg-6 pb-5">
            <Card
              icon="bi bi-collection"
              title="Fresh new layout"
              description="With Bootstrap 5, we've created a fresh new layout for this template!"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Card
              icon="bi bi-cloud-download"
              title="Free to download"
              description="As always, Start Bootstrap has a powerful collectin of free templates."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Card
              icon="bi bi-card-heading"
              title="Jumbotron hero header"
              description="The heroic part of this template is the jumbotron hero header!"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Card
              icon="bi bi-bootstrap"
              title="Feature boxes"
              description="We've created some custom feature boxes using Bootstrap icons!"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Card
              icon="bi bi-code"
              title="Simple clean code"
              description="We keep our dependencies up to date and squash bugs as they come!"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Card
              icon="bi bi-patch-check"
              title="A name you trust"
              description="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;