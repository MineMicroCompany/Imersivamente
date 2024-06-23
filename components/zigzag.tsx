import Image from 'next/image'
import VideoDogThumb from '@/public/images/dog-image.png'
import VideoAirplaneThumb from '@/public/images/airplane.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import ModalVideo from './modal-video'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Uma Solução, Possibilidades Ilimitadas</h1>
            <p className="text-xl text-gray-400">Com a ImersivaMente, um único produto oferece soluções completas para tratamentos psicológicos, possibilitando a exposição de pacientes a ambientes controlados para tratamento de medos e fobias</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">

                <ModalVideo
                  thumb={VideoDogThumb}
                  thumbWidth={1024}
                  thumbHeight={576}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/dogVideo.mp4"
                  videoWidth={1920}
                  videoHeight={1080} />

              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Exemplo de tratamento</div>
                  <h3 className="h3 mb-3">Tratando Cinofobia</h3>
                  <p className="text-xl text-gray-400 mb-4">Ao lado, o paciente pode interagir com um cachorro para se acostumar gradualmente com a presença do animal, facilitando a superação da fobia</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <ModalVideo
                  thumb={VideoAirplaneThumb}
                  thumbWidth={1024}
                  thumbHeight={576}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/airplaneVideo.mp4"
                  videoWidth={1920}
                  videoHeight={1080} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Exemplo de tratamento</div>
                  <h3 className="h3 mb-3">Tratando Aerofobia</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Exposição do paciente como passageiro em simulações de voos para enfrentar o medo de viajar de avião</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
