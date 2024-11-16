import FbLogo from '../assets/fb.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'

const FindUs = () => {
    return (
        <div className="mt-6">
            <h2 className="font-semibold">Find Us On</h2>
            <div className="join flex join-vertical mt-4 *:bg-base-100">
                <button className="btn join-item ">
                    <img src={FbLogo} alt="" />
                    Facebook
                </button>
                <button className="btn join-item">
                    <img src={Twitter} alt="" />
                    Twitter
                </button>
                <button className="btn join-item">
                    <img src={Instagram} alt="" />
                    Instagram
                </button>
            </div>

        </div>
    );
};

export default FindUs;