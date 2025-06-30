export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm a professional event photographer with over 5 years of experience capturing life's most important
              moments. From intimate weddings to large corporate conferences, I specialize in documenting events that
              matter.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              My approach combines photojournalistic storytelling with artistic vision, ensuring every significant
              moment is preserved beautifully for years to come.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Event Specialties</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Personal Events</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>Weddings & Engagements</li>
                      <li>Birthday Celebrations</li>
                      <li>Graduations</li>
                      <li>Anniversary Parties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Corporate Events</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>Conferences & Summits</li>
                      <li>Product Launches</li>
                      <li>Team Building Events</li>
                      <li>Award Ceremonies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Recent Achievements</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Photographed 50+ weddings in 2024</li>
                  <li>• Official photographer for NYC Fashion Week</li>
                  <li>• Corporate partner with 15+ companies</li>
                  <li>• Featured in Wedding Photography Magazine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
