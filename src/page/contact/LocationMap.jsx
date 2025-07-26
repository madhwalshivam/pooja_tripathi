import {
  DirectionsSubwayOutlined,
  DirectionsCarOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

export default function LocationMap() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-800 mb-4 py-2">
              <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                 Find Our Studio
              </span>              
            </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of Noida, easily accessible by public transport
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14043.102837972786!2d77.35279729360385!3d28.594052707501596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ed7ee3882d%3A0xa57453058a0458f!2sKathak%20Nrityashala%20%23PoojaTripathi!5e0!3m2!1sen!2sin!4v1721826751396!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kathak Nrityashala Studio Location"
            ></iframe>
          </div>

          <div className="p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Public Transport */}
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DirectionsSubwayOutlined className="text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Transport</h3>
                <p className="text-gray-600 text-sm">
                  Sector 52 Metro Station (10 min walk)<br />
                  Easy cab and rickshaw access
                </p>
              </div>

              {/* Parking */}
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DirectionsCarOutlined className="text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Free on-site parking<br />
                  Gated and secure
                </p>
              </div>

              {/* Landmarks */}
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LocationOnOutlined className="text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Landmarks</h3>
                <p className="text-gray-600 text-sm">
                  Near Kanchanjunga Market<br />
                  Close to Sector 52 Metro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
