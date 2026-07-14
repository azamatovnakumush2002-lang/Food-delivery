import "../css/section6.css";
const SectionSix = () => {
    return (
        <div className='map container'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5006469103696!2d60.619308575054404!3d41.55840807127867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1sru!2s!4v1781627406080!5m2!1sru!2s'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    );
};
export default SectionSix;
