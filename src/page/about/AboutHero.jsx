import contact from '../../assets/about.jpg';

export default function AboutHero() {
  return (
    <section className="relative h-96 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
         backgroundImage: `url(${contact})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About Our
            <span className="block bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">Academy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
           Preserving the timeless tradition of Kathak dance while nurturing the next generation of dancers
          </p>
        </div>
      </div>
    </section>
  );
}
