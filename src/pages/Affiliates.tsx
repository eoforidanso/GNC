import unityImg from '../assets/images/group-traditional-black.jpeg'

export default function Affiliates() {
  const affiliates = [
    { name: 'Asanteman Association', region: 'Ashanti Region' },
    { name: 'Ewe Association', region: 'Volta Region' },
    { name: 'Kwahu United', region: 'Eastern Region' },
    { name: 'Okyeman Association', region: 'Akim Abuakwa' },
    { name: 'Zongo Community', region: 'Northern Regions' },
    { name: 'Ga/Adangbe Association', region: 'Greater Accra' },
    { name: 'Fante Association', region: 'Central Region' },
    { name: 'Northern Region Union', region: 'Northern Ghana' },
    { name: 'Upper East Association', region: 'Upper East Region' },
    { name: 'Upper West Association', region: 'Upper West Region' },
    { name: 'Akyem Association', region: 'Eastern Region' },
    { name: 'Brong-Ahafo Union', region: 'Brong-Ahafo Region' },
    { name: 'Akuapem Association', region: 'Eastern Region' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">Our Affiliates</h1>
        <p className="body-lg max-w-3xl">
          GNC Chicago brings together 13 vibrant regional and ethnic associations, each representing different areas of Ghana. United in our mission, we celebrate the diversity within our diaspora community.
        </p>
      </section>

      {/* Affiliates Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {affiliates.map((affiliate, i) => (
            <div key={i} className="card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <span className="font-bold text-slate-900">{affiliate.name.charAt(0)}</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-gold-400 transition">{affiliate.name}</h3>
              <p className="text-gray-400 text-sm">{affiliate.region}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Affiliates */}
      <section className="grid md:grid-cols-2 gap-12 py-20 items-center">
        <div className="glass-lg overflow-hidden h-96 relative">
          <img
            src={unityImg}
            alt="Affiliate members standing together in traditional attire"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent flex items-end p-8">
            <p className="text-gray-200 font-medium">United in diversity, strong in community</p>
          </div>
        </div>

        <div>
          <h2 className="heading-3 mb-6">Strength in Unity</h2>
          <p className="text-gray-300 mb-4">
            Each affiliate organization represents a unique region or ethnic group within Ghana. Together, they form the backbone of GNC Chicago, organizing cultural events, providing mutual support, and preserving traditions.
          </p>
          <p className="text-gray-300 mb-4">
            Whether you're from Ashanti, Volta, Northern regions, or any other part of Ghana, you'll find your community here while celebrating our shared Ghanaian identity.
          </p>
          <div className="glass-sm p-4 mt-6">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-gold-400">Interested in joining?</span> Contact us to connect with your regional affiliate and become part of the GNC family.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
