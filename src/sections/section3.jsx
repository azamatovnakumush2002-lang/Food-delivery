import "../css/section3.css";
const SectionThree = () => {
    return (
        <div className='section3'>
            <div className='section3-main container'>
                <div>
                    <h2 className='section3-h2'>Your nearest restaurants</h2>
                    <p className='section3-text'>
                        Each kitchen works with its own delivery area to deliver
                        food to you as soon as possible
                    </p>
                </div>

                <div>
                    <input type='text' placeholder='Enter delivery address' />
                    <button className='send-btn'>Send</button>
                </div>
            </div>
        </div>
    );
};
export default SectionThree;
