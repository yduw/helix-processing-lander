import Image from "next/image";

export const metadata = {
  title: "About Us - Helix Processing",
  description: "Learn about Helix Processing's mission, vision, and team dedicated to healthcare automation and innovation.",
};

// Team member data
const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Executive Officer",
    bio: "Dr. Chen brings over 15 years of healthcare innovation experience, focusing on the intersection of medical technology and patient care.",
    imagePlaceholder: "[Portrait: Female executive in professional attire]"
  },
  {
    name: "Michael Rodriguez",
    title: "Chief Technology Officer",
    bio: "With a background in AI and machine learning, Michael leads our technology initiatives to create smarter healthcare solutions.",
    imagePlaceholder: "[Portrait: Male tech executive]"
  },
  {
    name: "Dr. James Wilson",
    title: "Medical Director",
    bio: "Dr. Wilson ensures all our products and services meet the highest medical standards and truly address healthcare needs.",
    imagePlaceholder: "[Portrait: Male doctor in white coat]"
  },
  {
    name: "Aisha Patel",
    title: "Head of Operations",
    bio: "Aisha oversees our global supply chain and ensures efficient distribution of medical equipment to healthcare providers.",
    imagePlaceholder: "[Portrait: Female operations executive]"
  },
  {
    name: "Robert Kim",
    title: "Chief Financial Officer",
    bio: "Robert manages our financial strategy to ensure sustainable growth while maintaining our commitment to healthcare quality.",
    imagePlaceholder: "[Portrait: Male finance executive]"
  },
  {
    name: "Elena Gonzalez",
    title: "Director of Compliance",
    bio: "Elena ensures all our products and services meet FDA regulations and maintain the highest standards of safety and efficacy.",
    imagePlaceholder: "[Portrait: Female compliance director]"
  }
];

export default function AboutPage() {
  return (
    <div className="py-16 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Helix Processing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming healthcare through technology, compliance, and innovation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Streamlining Healthcare Delivery</h2>
            <p className="text-gray-600 mb-6 text-lg">
              At Helix Processing, our mission is to transform healthcare delivery through innovative solutions that combine advanced technology with rigorous medical compliance. We strive to reduce administrative burden, improve patient outcomes, and make quality healthcare more accessible.
            </p>
            <p className="text-gray-600 text-lg">
              We believe that by providing healthcare professionals with better tools, we enable them to focus more on what matters most: patient care. Our comprehensive approach addresses both the technological and regulatory challenges faced by modern healthcare providers.
            </p>
          </div>
          <div>
            <div className="bg-teal-100 text-teal-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-4">
              Our Vision
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Future of Intelligent Healthcare</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We envision a healthcare ecosystem where administrative processes are seamlessly automated, medical equipment is intelligently connected, and patients receive more personalized care through data-driven insights.
            </p>
            <p className="text-gray-600 text-lg">
              By 2030, we aim to be the leading provider of integrated healthcare automation solutions, serving over 10,000 healthcare facilities globally and positively impacting the lives of millions of patients through faster, more efficient healthcare delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-4">
              Our Core Values
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unwavering Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards in all our business practices, ensuring transparency and honesty in everything we do.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relentless Innovation</h3>
              <p className="text-gray-600">
                We constantly pursue new ideas and technologies that can revolutionize healthcare delivery and improve patient outcomes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Approach</h3>
              <p className="text-gray-600">
                We design all our products and services with the ultimate goal of improving patient care and health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experts dedicated to revolutionizing healthcare through technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 text-sm">{member.imagePlaceholder}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to an industry leader in healthcare automation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
                      2018
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      Helix Processing was founded with a mission to address inefficiencies in healthcare administration through technology.
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div></div>
                  <div className="md:pl-12">
                    <div className="bg-teal-100 text-teal-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion into DME</h3>
                    <p className="text-gray-600">
                      Expanded our services to include durable medical equipment distribution, focusing on quality and compliance.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
                      2022
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Technology Launch</h3>
                    <p className="text-gray-600">
                      Introduced our AI-powered insurance claims processing technology, revolutionizing healthcare administration.
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div></div>
                  <div className="md:pl-12">
                    <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
                      2024
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Expansion</h3>
                    <p className="text-gray-600">
                      Expanded operations to multiple countries, bringing our healthcare solutions to a global market.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="bg-teal-100 text-teal-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
                      2025
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">The Future</h3>
                    <p className="text-gray-600">
                      Continuing to innovate and expand our services to further streamline healthcare delivery globally.
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}