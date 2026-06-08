import { CheckCircle2 } from 'lucide-react'
import missionImg from '../assets/images/independence-arch-ghana.jpeg'
import leadershipImg from '../assets/images/leadership-traditional-wear.jpeg'
import churchImg from '../assets/images/church-community-group.jpeg'
import memorialImg from '../assets/images/community-memorial-group.jpeg'

export default function About() {
  const mission = [
    'Unite and empower Ghanaians in the Greater Chicago area',
    'Uphold democratic values and civic engagement',
    'Promote and preserve Ghanaian cultural heritage',
    'Foster social, economic, and educational advancement',
  ]

  const programs = [
    {
      title: 'Cultural Programs',
      items: ['Native language classes', 'Dance instruction', 'Cooking classes', 'Cultural celebrations']
    },
    {
      title: 'Education & Support',
      items: ['Tutoring services', 'Career development', 'Scholarship assistance', 'Leadership training']
    },
    {
      title: 'Community Services',
      items: ['Health clinic & wellness', 'Funeral assistance', 'Party planning', 'Wedding services']
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">About GNC Chicago</h1>
        <p className="body-lg max-w-3xl">
          Since its establishment, Ghana National Council of Metropolitan Chicago has been the beacon of unity, cultural preservation, and empowerment for the Ghanaian diaspora in Chicago.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 py-20">
        <div>
          <h2 className="heading-3 mb-8">Our Mission</h2>
          <div className="space-y-4">
            {mission.map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 size={24} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-lg overflow-hidden min-h-96 relative">
          <img
            src={missionImg}
            alt="Independence Arch, Accra — symbol of Ghana's freedom and justice"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-8">
            <p className="text-gray-200 font-medium">Honoring our roots — the Independence Arch in Accra, Ghana</p>
          </div>
        </div>
      </section>

      {/* Community Moments */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">Our Community, Our Family</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass overflow-hidden group h-80">
            <img
              src={churchImg}
              alt="GNC members gathered for a community church service"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-80">
            <img
              src={memorialImg}
              alt="GNC members supporting one another at a community gathering"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div key={i} className="card-lg">
              <h3 className="heading-3 mb-6">{program.title}</h3>
              <ul className="space-y-3">
                {program.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20">
        <h2 className="heading-2 mb-8">Leadership & Governance</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-lg overflow-hidden h-96">
            <img
              src={leadershipImg}
              alt="GNC Chicago leadership in traditional and formal attire"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="glass-lg p-8 md:p-12">
            <p className="text-gray-300 mb-6">
              GNC Chicago is governed by a dedicated board of directors who work tirelessly to advance the organization's mission. Our leadership comes from diverse professional backgrounds, bringing expertise in business, healthcare, education, and community service.
            </p>
            <p className="text-gray-300">
              We operate with transparency and accountability, ensuring that every decision aligns with our core values and benefits our community members.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
