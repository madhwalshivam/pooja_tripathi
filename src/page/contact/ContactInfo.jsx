'use client';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <LocationOnIcon className="text-amber-600" />,
      title: 'Visit Our Studio',
      info: 'Pocket A, Kanchanjunga Apartment',
      subInfo: 'Sector 53, Noida, Uttar Pradesh 201301',
      action: 'Get Directions'
    },
    {
      icon: <PhoneIcon className="text-amber-600" />,
      title: 'Call Us',
      info: '+91 9811602645',
      subInfo: '',
      action: 'Call Now'
    },
    {
      icon: <EmailIcon className="text-amber-600" />,
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4 py-5">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Contact Information
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Multiple ways to reach us and start your dance journey
          </p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-amber-400 to-yellow-500 group hover:scale-[1.01] transition-all"
            >
              <div className="bg-white rounded-2xl p-6 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
                    <p className="text-gray-700 font-medium">{detail.info}</p>
                    {detail.subInfo && (
                      <p className="text-gray-600 text-sm">{detail.subInfo}</p>
                    )}
                    <button className="text-amber-600 hover:text-red-600 text-sm font-medium mt-2 cursor-pointer transition-all">
                      {detail.action}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

