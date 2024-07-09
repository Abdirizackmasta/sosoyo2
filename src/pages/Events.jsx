import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import logo from '../assets/logo2.png'
import book from '../assets/book.png'
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import '../css/event.css';
import county from '../assets/county.jpg'

export default function Events() {
    return (
        <>
            <Navbar />
            <PageHeader title="Flagship Events" content='we would like to cordially invite you join us in our upcoming mentorship program' path="/event" name="Events" />
            <section className="section">
                <div>
                    <div className="top-div">
                        <img src={logo} alt="" />
                        <p>Join us for an inspiring day of mentorship and guidance for high school students</p>
                    </div>
                    <div className="middle-div">
                        <div>
                            <p>
                                <span><FaCalendarAlt className="event-icon"/></span>
                                <span>20th JULY 2024</span>
                            </p>
                            <p>
                                <span><IoLocation className="event-icon"/></span>
                                <span>Garissa</span>
                            </p>
                            <p>
                                Hosted by solution to the society youth Organization
                            </p>
                        </div>
                        <img src={county} alt="" />
                    </div>
                    <div></div>
                    <div className="change-div">
                        <img src={book} alt="" />
                        <p>
                            Be the change,<br/>Shape the future
                        </p>
                    </div>
                </div>
            </section>    
            <Footer />
            <BackToTop />
        </>
    );
}