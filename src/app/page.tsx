import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import WordFadeIn from "@/components/ui/word-fade-in";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden min-h-screen">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              title="Mart"
              src="/mart-logo-dark.svg"
              alt="Mart Logo"
              width={34}
              height={32}
              className="h-7 w-auto"
            />
            <Image
              title="Mart"
              src="/mart-logotipo.svg"
              alt="Mart"
              width={87.56}
              height={24}
              className="h-6 w-auto"
            />
          </div>
          <Button asChild>
            <Link target="_blank" href="https://accounts.mart.lat/es/signup">
              Crear cuenta
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}

      <main className="h-full px-4 flex items-center justify-center py-8">
        <Particles
          className="absolute overflow-hidden inset-0"
          quantity={100}
          ease={80}
          color={"#000"}
          refresh
        />
        <Card className="max-w-2xl shadow-none bg-transparent border-0 mx-auto">
          <CardHeader>
            <CardTitle title="Inpulsa tu negocio con los servicios que ofrese Mart">
              <WordFadeIn
                className="text-4xl font-bold text-center"
                words="¡Estamos construyendo algo
              increíble!"
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 mb-6">
              En <strong>Mart</strong> desarroyamos{" "}
              <strong>soluciones innovadoras</strong> para ayudar a las{" "}
              <strong>empresas</strong> a mejorar sus <strong>ventas</strong> y
              automatizar procesos <i>repetitivos</i>.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" asChild size="lg">
                <Link target="_blank" href="https://pos.mart.lat">
                  Explora Mart POS
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="">
        <div className="container  text-sm mx-auto px-4 py-4 text-center text-gray-600">
          © 2024 Mart Inc. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
