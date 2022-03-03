/* This example requires Tailwind CSS v2.0+ */
import { EyeOffIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Better opportunities',
    description:
      'Within our growing community you have the chance to gow as a content creator.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Better fees',
    description:
      'We only do 1% of the transaction fee to the content creators, it’s our way of saying thanks.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Buy, sell and transfer your content in a matter of seconds.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Security',
    description:
      'We offer better security, with a strong focus on the privacy of the content creators.',
    icon: EyeOffIcon,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-[#313338] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <br/>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A better way to interact with blockchain
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            The Zen is a decentralized platform that runs smart contracts.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#6d3ff8] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-xl leading-8 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-200">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
