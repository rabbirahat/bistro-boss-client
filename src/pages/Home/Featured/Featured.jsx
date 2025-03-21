import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = (props) => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item">
            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 21, 2025</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quo nulla velit obcaecati quaerat, odio atque, neque veniam amet eveniet reiciendis fuga error, accusantium ad. Deserunt nostrum nisi magni. Eveniet, recusandae incidunt! Doloribus ad, deleniti dolore, doloremque sapiente pariatur veritatis debitis autem, quod tempore aut eaque! Ducimus sit quam dignissimos.</p>
                    <button className="btn btn-outline uppercase">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;