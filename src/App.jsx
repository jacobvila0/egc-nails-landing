import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"

export default function App() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const servicios = [
    {
      titulo: "Uñas semipermanentes",
      descripcion:
        "El servicio principal de EGC.NAILS. Un acabado cuidado, bonito y duradero para el día a día.",
    },
    {
      titulo: "Uñas con extensión",
      descripcion:
        "Para clientas que quieren más longitud, una forma concreta o un diseño más llamativo.",
    },
    {
      titulo: "Recogidos y secados",
      descripcion:
        "Servicios de peluquería para eventos, ocasiones especiales o para verte arreglada sin complicarte.",
    },
  ]

      const trabajos = [
      {
        titulo: "Uñas semipermanentes",
        imagen: "/trabajos/unas-semipermanentes-1.jpeg",
      },
      {
        titulo: "Diseño elegante",
        imagen: "/trabajos/unas-semipermanentes-2.jpeg",
      },
      {
        titulo: "Uñas con extensión",
        imagen: "/trabajos/unas-extension-1.jpeg",
      },
      {
        titulo: "Extensión con acabado natural",
        imagen: "/trabajos/unas-extension-2.jpeg",
      },
      {
        titulo: "Diseño personalizado",
        imagen: "/trabajos/unas-diseno-1.jpeg",
      },
      {
        titulo: "Acabado moderno",
        imagen: "/trabajos/unas-diseno-2.jpeg",
      },
  ]

  return (
    <div className="min-h-screen bg-[#fff7f2] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
              Beauty Studio
            </p>
            <h1 className="text-xl font-bold tracking-tight">EGC.NAILS</h1>
          </div>

          <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
            <a href="#servicios" className="hover:text-rose-500">
              Servicios
            </a>
            <a href="#peinados" className="hover:text-rose-500">
              Peinados
            </a>
            <a href="#trabajos" className="hover:text-rose-500">
              Trabajos
            </a>
            <a href="#citas" className="hover:text-rose-500">
              Citas
            </a>
            <a href="#contacto" className="hover:text-rose-500">
              Contacto
            </a>
          </nav>

          <Button asChild className="rounded-full bg-rose-400 hover:bg-rose-500">
            <a href="#citas">Pedir cita</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-20">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
          <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-amber-100/80 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-rose-100 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm">
                Uñas y belleza en Vallada
              </div>

              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Uñas elegantes, modernas y fáciles de reservar.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                En EGC.NAILS puedes pedir cita para uñas semipermanentes,
                uñas con extensión, recogidos y secados de Pelo. Un estilo juvenil,
                cercano y cuidado desde Vallada.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-rose-400 px-8 hover:bg-rose-500"
                >
                  <a href="#citas">Solicitar cita</a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-rose-200 bg-white px-8"
                >
                  <a href="#trabajos">Ver trabajos</a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-600">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Estilo elegante
                </span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Tonos neutros
                </span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Citas por Instagram
                </span>
              </div>
            </div>

            <Card className="rounded-[2rem] border-rose-100 bg-white/90 shadow-2xl shadow-rose-100">
              <CardContent className="p-5">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                      Galería EGC.NAILS
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">
                      Diseños destacados
                    </h3>
                  </div>

                  <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-500">
                    Vallada
                  </span>
                </div>

                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/trabajos/unas-semipermanentes-1.jpeg"
                      alt="Uñas semipermanentes EGC.NAILS"
                      className="h-72 w-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 to-transparent p-5">
                      <p className="text-sm font-semibold text-white">
                        Uñas semipermanentes
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <img
                        src="/trabajos/unas-extension-1.jpeg"
                        alt="Uñas con extensión EGC.NAILS"
                        className="h-44 w-full object-cover"
                      />

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                        <p className="text-sm font-semibold text-white">
                          Extensión
                        </p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <img
                        src="/trabajos/unas-diseno-1.jpeg"
                        alt="Trabajo destacado EGC.NAILS"
                        className="h-44 w-full object-cover"
                      />

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                        <p className="text-sm font-semibold text-white">
                          Diseño destacado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="servicios" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                Servicios
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Servicios principales
              </h2>
              <p className="mt-4 text-stone-600">
                Los precios se pueden consultar por Instagram según el servicio,
                diseño o duración.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {servicios.map((servicio) => (
                <Card
                  key={servicio.titulo}
                  className="rounded-[1.5rem] border-rose-100 bg-[#fff7f2] shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                      ✨
                    </div>
                    <h3 className="text-xl font-bold">{servicio.titulo}</h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {servicio.descripcion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="peinados" className="bg-[#fff7f2] px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                Peinados
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Recogidos y secados
              </h2>
              <p className="mt-4 text-stone-600">
                También puedes pedir cita para recogidos y secados. Ideales para eventos,
                ocasiones especiales o para verte arreglada con un acabado cuidado.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-white shadow-xl shadow-rose-100/60">
                <div className="relative">
                  <video
                    src="/trabajos/peinado-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-[520px] w-full bg-stone-100 object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-rose-500 shadow-sm">
                    Recogido
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Recogido elegante</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    Un acabado cuidado para eventos, celebraciones o días especiales.
                  </p>
                  <a
                    href="#citas"
                    className="mt-4 inline-block text-sm font-semibold text-rose-500 underline underline-offset-4"
                  >
                    Pedir cita para un recogido
                  </a>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-white shadow-xl shadow-rose-100/60">
                <div className="relative">
                  <video
                    src="/trabajos/peinado-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-[520px] w-full bg-stone-100 object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-rose-500 shadow-sm">
                    Secado
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Secado con acabado bonito</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    Para conseguir un look pulido, natural y favorecedor sin complicarte.
                  </p>
                  <a
                    href="#citas"
                    className="mt-4 inline-block text-sm font-semibold text-rose-500 underline underline-offset-4"
                  >
                    Pedir cita para secado
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="trabajos" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                  Galería
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  Trabajos recientes
                </h2>
                <p className="mt-4 max-w-2xl text-stone-600">
                  Aquí pondremos sus fotos reales. De momento son espacios de
                  ejemplo para enseñarle cómo quedaría.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-fit rounded-full border-rose-200 bg-white"
              >
                <a href="https://www.instagram.com/egc.nails/" target="_blank">
                  Ver Instagram
                </a>
              </Button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trabajos.map((trabajo) => (
                <Card
                  key={trabajo.titulo}
                  className="overflow-hidden rounded-[1.5rem] border-rose-100 bg-white shadow-sm"
                >
                  <img
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    className="h-72 w-full object-cover"
                  />

                  <CardContent className="p-5">
                    <h3 className="font-bold">{trabajo.titulo}</h3>
                    <a
                      href="#citas"
                      className="mt-3 inline-block text-sm font-semibold text-rose-500 underline underline-offset-4"
                    >
                      Quiero algo parecido
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="citas" className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                Citas
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Solicita tu cita
              </h2>
              <p className="mt-4 leading-7 text-stone-600">
                Esta primera versión no reserva automáticamente. Recoge la
                solicitud y después EGC.NAILS confirma la disponibilidad por
                Instagram.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-rose-100 bg-rose-50 p-5 text-sm text-stone-600">
                <p className="font-bold text-stone-900">Funcionamiento:</p>
                <p className="mt-2">
                  La clienta pide cita → se guarda la solicitud → se responde
                  manualmente por Instagram.
                </p>
              </div>
            </div>

            <Card className="rounded-[2rem] border-rose-100 bg-[#fffaf7] shadow-xl shadow-rose-100">
              <CardContent className="p-6">
                {sent ? (
                  <div className="rounded-[1.5rem] bg-white p-8 text-center">
                    <div className="text-4xl">✅</div>
                    <h3 className="mt-4 text-2xl font-bold">
                      Solicitud recibida
                    </h3>
                    <p className="mt-3 text-stone-600">
                      Gracias. EGC.NAILS te contactará por Instagram para
                      confirmar la cita.
                    </p>
                    <Button
                      onClick={() => setSent(false)}
                      className="mt-6 rounded-full bg-rose-400 hover:bg-rose-500"
                    >
                      Enviar otra solicitud
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="grid gap-2 text-sm font-semibold">
                        Nombre
                        <input
                          required
                          className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                          placeholder="Tu nombre"
                        />
                      </label>

                      <label className="grid gap-2 text-sm font-semibold">
                        Instagram
                        <input
                          required
                          className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                          placeholder="@usuario"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2 text-sm font-semibold">
                      Servicio
                      <select
                        required
                        className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option>Uñas semipermanentes</option>
                        <option>Uñas con extensión</option>
                        <option>Recogido de Pelo</option>
                        <option>Secado de Pelo</option>
                        <option>Otro</option>
                      </select>
                    </label>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="grid gap-2 text-sm font-semibold">
                        Día preferido
                        <input
                          required
                          className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                          placeholder="Ej. viernes"
                        />
                      </label>

                      <label className="grid gap-2 text-sm font-semibold">
                        Franja horaria
                        <select
                          required
                          className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                        >
                          <option value="">Selecciona</option>
                          <option>Mañanas</option>
                          <option>Tardes</option>
                          <option>Me da igual</option>
                        </select>
                      </label>
                    </div>

                    <label className="grid gap-2 text-sm font-semibold">
                      Comentario
                      <textarea
                        rows="4"
                        className="rounded-2xl border border-rose-100 bg-white px-4 py-3 outline-none focus:border-rose-300"
                        placeholder="Cuéntanos qué diseño quieres o si tienes alguna duda"
                      />
                    </label>

                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full bg-rose-400 hover:bg-rose-500"
                    >
                      Enviar solicitud
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                Dudas frecuentes
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Antes de pedir cita
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <Card className="rounded-[1.5rem] border-rose-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-bold">¿Cuánto duran las uñas?</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    La duración depende del cuidado, del crecimiento de la uña y
                    del tipo de servicio. Puedes preguntar por Instagram para
                    recibir una orientación.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.5rem] border-rose-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-bold">¿Dónde se realizan las citas?</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    EGC.NAILS trabaja desde casa en Vallada. La ubicación exacta
                    se confirma al cerrar la cita.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.5rem] border-rose-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-bold">¿Cómo consulto precios?</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    Lo mejor es escribir por Instagram indicando el servicio y,
                    si tienes, una foto de referencia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="bg-gradient-to-br from-rose-300 via-pink-300 to-stone-200 px-5 py-20 text-white"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                Contacto
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Reserva o pregunta por Instagram
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/90">
                Para pedir cita, consultar precios o enviar una foto de
                referencia, contacta directamente con EGC.NAILS por Instagram.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/30 bg-white/20 p-6 backdrop-blur">
              <p className="font-bold">Instagram</p>
              <a
                href="https://www.instagram.com/egc.nails/"
                target="_blank"
                className="mt-2 block text-2xl font-bold underline underline-offset-4"
              >
                @egc.nails
              </a>

              <p className="mt-6 font-bold">Zona</p>
              <p className="mt-2 text-white/90">Vallada</p>

              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-white text-rose-500 hover:bg-rose-50"
              >
                <a href="https://www.instagram.com/egc.nails/" target="_blank">
                  Ir a Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
