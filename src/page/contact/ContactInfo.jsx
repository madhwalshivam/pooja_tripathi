import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <LocationOnIcon className="text-red-600" />,
      title: 'Visit Our Studio',
      info: 'Pocket A, Kanchanjunga Apartment',
      subInfo: 'Sector 53, Noida, Uttar Pradesh 201301',
      action: 'Get Directions'
    },
    {
      icon: <PhoneIcon className="text-red-600" />,
      title: 'Call Us',
      info: '+91 9811602645',
      subInfo: '',
      action: 'Call Now'
    },
    {
      icon: <EmailIcon className="text-red-600" />,
      title: 'Email Us',
      info: 'pooja.designer@gmail.com',
      subInfo: '',
      action: 'Send Email'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Multiple ways to reach us and start your dance journey
          </p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
                  <p className="text-gray-700 font-medium">{detail.info}</p>
                  {detail.subInfo && (
                    <p className="text-gray-600 text-sm">{detail.subInfo}</p>
                  )}
                  <button className="text-red-600 hover:text-red-600 text-sm font-medium mt-2 cursor-pointer">
                    {detail.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

