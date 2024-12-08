"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Leaf,
  Scale,
  Menu,
  X,
  Megaphone,
  FileText,
  HandHeart,
  Calendar,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import diretor from "@/public/assets/diretor.jpg";
import coordenadora from "@/public/assets/coordenadora.jpg";
import presidente from "@/public/assets/presidente.jpg";
import fundo from "@/public/assets/povo.jpg";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-[#55c0ff] text-white py-4 sticky top-0 z-50">
  <div className="container mx-auto px-4">
    <nav className="flex justify-between items-center">
      <a href="#" className="text-2xl font-bold">
        Política Voz do Povo
      </a>
      <div className="hidden md:flex space-x-6">
        <a href="#sobre" className="hover:text-blue-200 transition duration-300">
          Sobre
        </a>
        <a href="#causas" className="hover:text-blue-200 transition duration-300">
          Causas
        </a>
        <a
          href="#servicos"
          className="hover:text-blue-200 transition duration-300"
        >
          Serviços
        </a>
       
        <a href="#contato" className="hover:text-blue-200 transition duration-300">
          Contato
        </a>
      </div>
      <Button
        className="md:hidden z-50"
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </Button>
    </nav>
  </div>
  <div
    className={`${
      isMenuOpen ? "block opacity-100" : "hidden opacity-0"
    } bg-white shadow-lg fixed top-16 left-0 w-full z-50 transition-opacity duration-300`}
  >
    <nav className="flex flex-col p-4 text-black">
      <a
        href="#sobre"
        className="py-2 hover:text-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        Sobre
      </a>
      <a
        href="#causas"
        className="py-2 hover:text-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        Causas
      </a>
      <a
        href="#servicos"
        className="py-2 hover:text-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        Serviços
      </a>
      
      <a
        href="#contato"
        className="py-2 hover:text-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        Contato
      </a>
    </nav>
  </div>
</header>

      


      <main className="flex-grow">
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={fundo.src}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter blur-sm"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Bem-vindo à Política Voz do Povo
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
              Juntos, construíremos um futuro mais justo, acolhedor e sustentável para todos.
              </p>
              <Button className="bg-[#68e349] text-white hover:bg-green-600 transition duration-300">
                Junte-se a nós
              </Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
              Nossa Missão
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
              A Voz do Povo é dedicada ao fortalecimento da democracia por meio
              da participação cidadã e do diálogo transparente. Acreditamos no
              poder da coletividade e na necessidade de uma política acessível e
              representativa. Nosso compromisso é construir uma sociedade mais
              justa, inclusiva e consciente, onde todas as vozes sejam ouvidas e
              contribuam para um futuro melhor para todos.
            </p>
          </div>
        </section>

        <section id="causas" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-600">
              Nossas Principais Causas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Democracia Participativa",
                  icon: <Scale className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Acreditamos no poder do diálogo e da participação popular para construir uma política mais transparente e representativa.",
                },
                {
                  title: "Inclusão Social",
                  icon: <Leaf className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Defendemos ações que promovam igualdade de direitos, oportunidades e respeito às diversidades em todas as suas formas.",
                },
                {
                  title: "Transparência e Acessibilidade",
                  icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
                  description:
                    "Trabalhamos para garantir que informações e decisões políticas sejam acessíveis, claras e próximas da população.",
                },
              ].map((causa, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition duration-300 bg-white"
                >
                  <CardContent className="flex flex-col items-center">
                    {causa.icon}
                    <h3 className="text-xl font-semibold mb-2 text-green-600">
                      {causa.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {causa.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-600">
              O que fazemos
            </h2>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-center text-blue-600">
              Nossos Serviços
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition duration-300 bg-white">
                <CardContent className="flex flex-col items-center">
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Educação Política
                  </h3>
                  <p className="text-gray-600 text-center">
                    Promovemos workshops, seminários e materiais educativos para aumentar a compreensão dos cidadãos sobre o processo político e seus direitos.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition duration-300 bg-white">
                <CardContent className="flex flex-col items-center">
                  <Megaphone className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Mobilização Comunitária
                  </h3>
                  <p className="text-gray-600 text-center">
                    Organizamos eventos e campanhas para engajar a comunidade em questões locais e nacionais, incentivando a participação ativa na política.
                  </p>
                </CardContent>
              </Card>
             
              <Card className="text-center p-6 hover:shadow-lg transition duration-300 bg-white">
                <CardContent className="flex flex-col items-center">
                  <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Organização de eventos políticos
                  </h3>
                  <p className="text-gray-600 text-center">
                    Realizamos debates, palestras e visitas para comunidades
                    distantes, promovendo o engajamento político e a
                    participação cidadã.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition duration-300 bg-white">
                <CardContent className="flex flex-col items-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Apoio à educação política
                  </h3>
                  <p className="text-gray-600 text-center">
                    Oferecemos oficinas e materiais educativos para ajudar as
                    pessoas a compreender melhor o funcionamento do sistema
                    político e as questões que impactam suas vidas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        

        <section id="contato" className="py-20 bg-gradient-to-r mb-8 from-green-500 to-green-700 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
      Entre em Contato
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Div do formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col"
      >
        <div className="space-y-4 sm:space-y-6">
          <Input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Textarea
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <Button
          type="submit"
          className="w-full py-3 mt-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300"
        >
          Enviar Mensagem
        </Button>
      </form>

      {/* Div com informações de contato */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col">
        <h3 className="text-2xl font-bold mb-6 text-green-700">
          Informações de Contato
        </h3>
        <div className="space-y-4 sm:space-y-6">
          {/* Email */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m4 0V4m-8 8a8 8 0 1016 0 8 8 0 10-16 0z"
              />
            </svg>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Email:</strong> política@gmail.com
            </p>
          </div>
          {/* Código Postal */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v2a1 1 0 001 1h4a1 1 0 001-1v-2m-7 0a5 5 0 10-4-8 5 5 0 104 8zm7-7h2a2 2 0 012 2v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5a2 2 0 012-2z"
              />
            </svg>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Código Postal:</strong> 12345-678
            </p>
          </div>
          {/* Rua */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M10 14h10m-6 4h6"
              />
            </svg>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Rua:</strong> Avenida da Liberdade, 123, Lisboa, Portugal
            </p>
          </div>
          {/* Instagram */}
          <div className="flex items-center">
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8a6 6 0 11-12 0 6 6 0 1112 0zM14 13h2a2 2 0 012 2v3a2 2 0 01-2 2h-2v-7z"
              />
            </svg>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                instagram.com/politica
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Política Voz do Povo. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

