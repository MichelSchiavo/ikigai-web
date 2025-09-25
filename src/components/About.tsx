import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <Image
              src="https://placehold.co/800x1000/1A1A1A/FFFFFF?text=Imagem+de+Tanjiro"
              alt="Tanjiro Kamado"
              width={800}
              height={1000}
              className="rounded-lg shadow-2xl shadow-[#A62639]/20"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-6">
              A Jornada do <span className="text-[#A62639]">Exilado</span>
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Em uma era onde demônios devoradores de homens espreitam na noite, uma sociedade secreta conhecida como Demon Slayer Corps trava uma guerra secreta contra eles. Estes bravos guerreiros, armados com espadas especiais e técnicas de respiração sobre-humanas, arriscam tudo para proteger os inocentes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cada caçador tem uma história, uma motivação, um fogo que arde em sua alma. Qual será o seu caminho? Que respiração você dominará? O destino da humanidade pode depender da sua escolha.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}