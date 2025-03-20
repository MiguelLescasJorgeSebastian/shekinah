import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Sección Hero Depurada */}
      <section className="relative h-[90vh] w-full overflow-hidden mb-8">
        <Image 
          src="/Congreso_final.jpg" 
          alt="Congreso Shekinah" 
          fill
          priority
          className="object-cover object-center"
          style={{ objectPosition: 'center top' }}
        />
      </section>
      
      {/* Sección de Registro */}
      <section className="py-8 bg-black text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-white">Congreso Shekinah 2025</h1>
          <p className="text-lg text-gray-300">
            Regístrate antes del 20 de marzo de 2025
          </p>
          <Link 
            href="/register"
            className="inline-block px-8 py-3 bg-[#8c1c13] text-white rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Regístrate Ahora
          </Link>
        </div>
      </section>
      
      {/* Información sobre la Iglesia */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl text-white font-bold animate-slideInUp">
            Bienvenido a Iglesia Shekinah
          </h2>
          <p className="text-gray-300 text-lg animate-slideInUp delay-200">
            Somos una comunidad dedicada a compartir el amor y la palabra de Dios en un ambiente moderno y elegante. Nuestro propósito es acompañarte en tu crecimiento espiritual.
          </p>
          <Link 
            href="/about"
            className="inline-block mt-4 px-6 py-3 border border-[#8c1c13] text-[#8c1c13] rounded-full font-medium hover:bg-[#8c1c13] hover:text-black transition-all animate-slideInUp delay-400"
          >
            Conoce Más
          </Link>
        </div>
      </section>
      
      {/* Información Minimalista de Servicios */}
      <section className="py-16 px-4 md:px-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl text-white font-semibold">Servicios Dominicales</h3>
            <p className="text-gray-300">Domingos 10:00 AM</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl text-white font-semibold">Estudios Bíblicos</h3>
            <p className="text-gray-300">Miércoles 7:00 PM</p>
          </div>
          <div className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl text-white font-semibold">Eventos Especiales</h3>
            <p className="text-gray-300">Próximamente</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action: Visitar */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl text-white font-bold animate-fadeIn">
            ¿Primera vez en Shekinah?
          </h2>
          <p className="text-gray-300 text-lg animate-fadeIn delay-200">
            Descubre un lugar donde la fe se une con la elegancia y la modernidad.
          </p>
          <Link 
            href="/visit"
            className="inline-block px-8 py-3 bg-[#8c1c13] text-white rounded-full font-semibold transition-all transform hover:scale-105 animate-fadeIn delay-400"
          >
            Planifica tu Visita
          </Link>
        </div>
      </section>
      
      {/* Sección de Mapa */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white font-bold animate-fadeIn">
            Ubicación
          </h2>
          <p className="text-gray-300 text-lg mb-8 animate-fadeIn delay-200">
            Encuéntranos en el corazón de la ciudad para vivir una experiencia transformadora.
          </p>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg animate-fadeIn delay-400">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.518785127374!2d-122.08560808469166!3d37.422065979825325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0be14f0ecbf%3A0x3f3ba3c1148a3e0!2sGoogleplex!5e0!3m2!1ses!2sus!4v1678946512057!5m2!1ses!2sus" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Footer Minimalista */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Iglesia Shekinah. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}