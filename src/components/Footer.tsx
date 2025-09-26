export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-2xl hover:text-[#A62639] transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl hover:text-[#A62639] transition">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-2xl hover:text-[#A62639] transition">
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <p className="text-sm">
          © 2025. Criado por um fã para fãs. Todos os direitos de Kimetsu no Yaiba pertencem a Koyoharu Gotouge.
        </p>
      </div>
    </footer>
  );
}