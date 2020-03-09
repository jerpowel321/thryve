import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Card from "../components/Cards";
import "./style.css";
import API from "../utils/API";

class NutritionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    console.log("THY ISNT THIS WORKING")
    API.getAllFoods()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div>
        <Navbar
          home="/trucker/dashboard"
          firstPage="/trucker/application"
          firstPageName="Application"
          secondPage="/trucker/account"
          secondPageName="Account"
        />
        <div id="nutritionSearch">
          <div className="container">
            <h1 className="pt-5 text-center">Food Search</h1>
            <p>We know finding foods to improve you gut can be challenging which is why we offer a simple tool to search for foods which boost your system.</p>

            <div className="d-flex justify-content-center">
              <Form parentCallback={this.callbackFunction} />
            </div>



          </div>
          <div id="gradient" className="mt-5" />
          <div id="nutrutionSearchResults">
            <div className="container">
              <h2 className="text-center">What do I do now.</h2>

              <div className="nextSteps">
                <Card
                  img="/images/icons/experts.svg"
                  alt="Health Experts"
                  title="Health Experts"
                  text="Have confidence in knowing we have all the experts helping you."
                />
                <Card
                  img="/images/icons/envelope.svg"
                  alt="Envelope Results"
                  title="Get Your Results"
                  text="Get your results as quick as a week."
                />
                <Card
                  img="/images/icons/utensils.svg"
                  alt="Utensils"
                  title="Start Eating"
                  text="Eat recommended foods with peace of mind."
                />
              </div>
            </div>

            <div id="gradient2" />

            {this.state.results.map((a, i) =>
              <div key={i} className="project" style={{ border: '5px solid colors[i]' }}>
               <p>{a.name}</p>
              </div>

            )}



          </div>



        </div>
        <footer className="footer" />
      </div >
    );
  }

};

export default (NutritionSearch);