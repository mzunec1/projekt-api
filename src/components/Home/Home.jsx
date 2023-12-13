import "./Home.scss";
import "../../index.scss";
import HomeImg from "../../assets/images/books.jpg";
const Home = () => {
    return (
        <section className="Home">
            <figure className="Home-Figure">
                <img
                    src={HomeImg}
                    alt="Library"
                    className="Home-Img"
                />
            </figure>
            <div  className="Home-Overlay"></div>
            <div className="Home-Content">
                <div className="Home-Content-Inner">
                    <div className="Home-TextCard">
                        <h1 className="Home-Title">
                            Online knjižnica</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;