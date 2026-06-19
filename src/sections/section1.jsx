import Icons from "../icons";

const SectionOne = () => {
    return (
        <div style={{ marginBlock: "25px 48px" }} className='container'>
            <div className='section1-main'>
                <div className='section1-desc'>
                    <h1>Your Food court at home</h1>
                    <div className='mini-box'>
                        <div className='section-one-box'>
                            <h4>Delivery</h4>
                            <span>Order in</span>
                        </div>
                        <div className='section-one-box'>
                            <h4>Takeout</h4>
                            <span>Grab and go</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <img className='first-img' src='rucola-png.png' alt='img' />
                    <img
                        className='second-img'
                        src='Photo-plate.png'
                        alt='img'
                    />
                </div>
            </div>

            <div className='delivery-part'>
                <div className='service'>
                    <Icons.TimeIcon />
                    <p className='text'>
                        delivery in all paris in less than 30 minutes
                    </p>
                </div>

                <div className='service'>
                    <Icons.DeliveryIcon />
                    <p className='text'>Free delivery from 29 euros</p>
                </div>

                <div className='service'>
                    <Icons.HeartIcon />
                    <p className='text'>Only fresh and French products</p>
                </div>
            </div>
        </div>
    );
};
export default SectionOne;
