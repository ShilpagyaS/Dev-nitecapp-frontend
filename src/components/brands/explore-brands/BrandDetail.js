import Breadcrumb from "@/components/Breadcrumb";
import BannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../mock/BrandsMock.json";
import { CustomButton } from "@/utils/Buttons";

const BrandsBrandDetail = () => {
  const brandsData = BrandsMock.Brandsdata;

  return (
    <div className="explore-brands-container text-white">
      <Breadcrumb />
      <div className="explore-brands-banner-contaiiner mb-8">
        <BannerSlider pagination={true} height="315px" />
      </div>
      <div className="culture-container">
        <h4 className="heading">Culture</h4>
        <div className="img-description-container grid grid-cols-2">
          <div className="img-container"></div>
          <div className="description-container">
            <p>
              We strive to create a memorable stay for our guests through
              personalized touches. Through the team’s collaboration and
              positive energy, we are able to make that happen.
              <span>ANDREA N.</span>
            </p>
          </div>
        </div>
        <div className="button-container"><CustomButton label="explore More" /></div>
      </div>
    </div>
  );
};

export default BrandsBrandDetail;
