import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, ExternalLink, Download, MapPin, Clock, Globe, Users, ChevronDown } from 'lucide-react'
import { siteData, galleryImages } from '../../data/siteData'
import VideoHero from '../../components/VideoHero'
import FallbackImage from '../../components/FallbackImage'
import SectionHeading from '../../components/SectionHeading'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../components/SocialIcons'

const tradeContacts = {
  travelTrade: {
    title: 'Travel Trade Enquiries',
    contacts: [
      {
        name: 'Anald Musonza',
        role: 'Head of Sales and Marketing',
        email: 'anald@vfsl.co.zw',
        image: 'https://vfsc-umbraco.live.fireworkx.net/media/2lcnnnsb/anald.png',
      },
    ],
  },
  internationalTrade: {
    title: 'International Trade Enquiries',
    contacts: [
      {
        name: 'Cindy Sheedy-Walker',
        role: 'International Representative',
        email: 'cindy@xitori.com',
        image: 'https://atta.travel/static/8f4d2e4f-9a44-48c1-9f458fbc26d21023/eventfoliospeakerphoto2x_7a455221b20e4cf3de23b69510225e22_4a7c7e45a350/Cindy-resized.jpg',
      },
      {
        name: 'Michaela Soule',
        role: 'International Representative (Africa)',
        email: 'afrika@michaela-soule-marketing.com',
        image: 'https://www.michaela-soule-marketing.com/wp-content/uploads/2023/08/Michaela-2023.png',
      },
    ],
  },
  media: {
    title: 'Media Enquiries',
    contacts: [
      {
        name: 'Nommy Vuma',
        role: 'Group Marketing and PR Manager',
        email: 'nommy@vfsl.co.zw',
        image: 'https://vfsc-umbraco.live.fireworkx.net/media/cywowwrd/nommy.png',
      },
    ],
  },
}

const tradeFaqs = [
  {
    question: 'I create content for a platform – can I come and visit the estate?',
    answer: 'The Victoria Falls Safari Collection periodically invites media representatives to experience the property. If you would like to be considered please email info@vfsl.co.zw. If you will be in the area and require a site visit, contact Lookout Ndlovu at aatsalesvf@vfsl.co.zw.',
  },
  {
    question: 'Which airlines service Victoria Falls?',
    answer: 'Victoria Falls International Airport is serviced by Kenya Airways, Ethiopian Airlines, Fastjet Zimbabwe, SA Airlink, South African Airways, FlySafair, CemAir, FlyNamibia, Air Zimbabwe and Mack Air.',
  },
  {
    question: 'Where can I download an activities list?',
    answer: 'Please click the Trade Downloads button on this page.',
  },
  {
    question: 'Where can I download hi-res images of the estate?',
    answer: 'High Resolution images are available in the media library. Click on Trade Downloads on this page and follow the link to Signature Images.',
  },
  {
    question: 'What are the visa requirements for visiting Zimbabwe?',
    answer: 'Zimbabwe has a three-tier visa system – Category A is visa free, Category B requires a visa which can be bought at the point of entry and Category C requires a pre-arrival e-Visa. Category A includes most regional countries; – eg South Africa, Namibia, Botswana, Kenya as well as certain others such as Malaysia and Singapore. Category B includes most Western countries including the USA, UK, EU, Canada and Australia. Category C includes nationals from countries such as Afghanistan, Bangladesh, Nigeria and Pakistan. For a full list, as well as current costs, refer to the government website at www.evisa.gov.zw.',
  },
  {
    question: 'How much does it cost to visit the Victoria Falls National Park?',
    answer: 'On the more popular Zimbabwean side of the Falls, international visitors pay US$50, SADC visitors pay USD$30 and Zimbabweans are charged USD$10.',
  },
]

export default function TravelTrade() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <VideoHero
        title="Media & Travel Trade"
        subtitle="Resources and partnerships for media and travel industry professionals — let's tell the story together."
        poster={galleryImages[2]?.src}
        height="h-[50vh]"
        minHeight="min-h-[350px]"
        align="left"
        showScroll={false}
        showVideo={false}
      />

      {/* Introduction */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-boma-charcoal mt-3 mb-5 leading-tight">
              Media & Travel Trade
            </h2>
            <p className="text-boma-charcoal/70 mb-4 leading-relaxed">
              Media: nommy@vfsl.co.zw. Travel Trade: select the relevant person on this page.
            </p>
            <p className="text-boma-charcoal/70 mb-6 leading-relaxed">
              Prefer to speak to us? +263 83 284 3202 | website@vfsl.co.zw
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://corporate-connect.profitroom.com/victoriafallssafaricollection/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Agent Portal
              </a>
              <a
                href="https://www.dropbox.com/scl/fo/b10ao3qq0in9q3koqstzy/ACvyPoCBeKLwjtv5drESaVw?rlkey=3loywfo2ljg6tx9x6f5fmpmht&st=cgleqcvh&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Trade Downloads
              </a>
            </div>
          </div>
          <div>
            <FallbackImage
              src={galleryImages[2].src}
              alt="Welcoming guests to The Boma"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Speak With Us */}
      <section className="section-padding py-16 md:py-24 bg-boma-off-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Speak With Us Directly" subtitle="Find the right person for your enquiry" />
          <div className="mt-10 space-y-10">
            {Object.entries(tradeContacts).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-lg font-bold text-boma-charcoal mb-5 pl-5 border-l-2 border-boma-rust/40">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.contacts.map((contact) => (
                    <ContactCard key={contact.email} {...contact} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Key Information" subtitle="Essential details for travel trade professionals" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Location"
              content={siteData.address}
              detail={siteData.location}
            />
            <InfoCard
              icon={<Clock className="w-5 h-5" />}
              title="Operating Hours"
              content={siteData.hours}
              detail="Open daily, including holidays"
            />
            <InfoCard
              icon={<Users className="w-5 h-5" />}
              title="Capacity"
              content="Up to 320 guests"
              detail="250 in rainy season (Nov-Mar)"
            />
            <InfoCard
              icon={<Globe className="w-5 h-5" />}
              title="Currency"
              content="USD accepted"
              detail="ZAR, EUR, GBP, AUD also accepted"
            />
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding py-16 md:py-24 bg-boma-off-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Downloads & Resources" subtitle="Marketing materials and information for trade partners" />
          <div className="mt-10 space-y-3">
            {siteData.downloads.map((dl, i) => (
              <a
                key={i}
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white hover:bg-boma-off-white transition-colors group"
              >
                <Download className="w-5 h-5 text-boma-rust shrink-0" />
                <span className="text-boma-charcoal group-hover:text-boma-rust transition-colors">{dl.title}</span>
              </a>
            ))}
            <a
              href="https://www.dropbox.com/scl/fo/b10ao3qq0in9q3koqstzy/ACvyPoCBeKLwjtv5drESaVw?rlkey=3loywfo2ljg6tx9x6f5fmpmht&st=cgleqcvh&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white hover:bg-boma-off-white transition-colors group"
            >
              <Download className="w-5 h-5 text-boma-rust shrink-0" />
              <span className="text-boma-charcoal group-hover:text-boma-rust transition-colors">Trade Downloads (Hi-Res Images & More)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Media & Travel Trade FAQs" />
          <div className="mt-10 space-y-3">
            {tradeFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding py-16 md:py-24 bg-boma-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Connect With Us" subtitle="Follow us on social media" />
          <div className="flex justify-center gap-6 mt-10">
            {[
              { icon: FacebookIcon, href: siteData.social.facebook, label: 'Facebook' },
              { icon: InstagramIcon, href: siteData.social.instagram, label: 'Instagram' },
              { icon: YoutubeIcon, href: siteData.social.youtube, label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-boma-charcoal hover:bg-boma-rust hover:text-white transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function ContactCard({ name, role, email, image }) {
  return (
    <div className="bg-white p-6">
      <FallbackImage
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h4 className="text-boma-charcoal font-semibold">{name}</h4>
      <p className="text-boma-charcoal/50 text-sm mb-3">{role}</p>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-sm text-boma-rust hover:text-boma-rust-dark transition-colors"
      >
        <Mail className="w-4 h-4" />
        {email}
      </a>
    </div>
  )
}

function InfoCard({ icon, title, content, detail }) {
  return (
    <div className="bg-white p-6">
      <div className="w-10 h-10 rounded-full bg-boma-rust/10 flex items-center justify-center text-boma-rust mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-boma-charcoal mb-2">{title}</h3>
      <p className="text-boma-charcoal/70 text-sm">{content}</p>
      {detail && <p className="text-boma-charcoal/50 text-xs mt-1">{detail}</p>}
    </div>
  )
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-boma-charcoal font-medium pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-boma-rust shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-boma-charcoal/70 leading-relaxed border-t border-boma-light-grey/30 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
