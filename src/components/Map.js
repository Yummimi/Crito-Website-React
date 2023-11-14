import React from 'react'
import './stylesheets/Map.scss';

const Map = () => {
    const iframeStyle = {
        border: '0',
      };
  return (
    <section className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8139.117856639252!2d18.043556720302266!3d59.336635696320364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1sen!2sse!4v1696524122878!5m2!1sen!2sse"
      style={iframeStyle}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </section>
  )
}

export default Map