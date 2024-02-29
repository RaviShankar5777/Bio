import SimpleSlider from "../Carousel/Carousel";
import "./OurVision.css";

const Ourvision = () => {
  return (
    <div className="our-vision-main-container">
      <div className="our-vision-header">
        <h2>Our Vision</h2>
        <hr />
      </div>

      <div className="our-vision-container">
        <div className="our-vision-container-part-1">
          {/* <SwipeableTextMobileStepper/> */}
          <SimpleSlider />
        </div>
        <div className="our-vision-container-part-2">
          <p>
            The most significant advantage of having a landscape is the
            preservation of nature. Urban architecture is full of wooden decking
            and concrete flooring. People have started acknowledging the
            importance of plants and trees in their lives. BIOMBHUMI offers
            solutions to various environmental issues, and protects natural
            resources and ecology. Biobhumi green solutions is a full-service
            garden landscaping company. Our established systems allow us to
            deliver industry-leading landscape design and landscape solutions to
            commercial and residential clients. We are driven by a passion to
            exceed customer expectations and consistently deliver client
            satisfaction. We undertake projects which includes commercial and
            domestic landscaping works and also govt. projects with elite
            expertise in hardscape ,softscape ,water features, irrigation
            works,civil works based on agricultural and horticultural usage . We
            also provide vertical gardening with state of the art drip
            irrigation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourvision;
