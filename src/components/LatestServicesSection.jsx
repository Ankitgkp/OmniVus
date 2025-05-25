import React from 'react';

const serviceItems = [
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(229,10,10,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(234,179,46,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(46,75,234,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(46,75,234,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(229,10,10,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(38,204,186,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path></svg>    
    ),
    title: 'Desktop Computing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  }
];

const LatestServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h5 className="text-blue-600 font-semibold tracking-widest uppercase mb-2 text-sm">
            OUR LATEST SERVICES
          </h5>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            We Offer Better Solution <br />
            For Your IT Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <div className="mb-4 w-12 h-12">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServicesSection;