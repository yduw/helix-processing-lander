'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DmePage() {
  // Equipment categories with product types
  const equipmentCategories = [
    {
      title: "Home Medical Equipment",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "Hospital Beds",
        "Overbed Tables",
        "Pressure Pads",
        "Patient Lifts",
        "Commodes",
        "Trapeze Bars",
        "Bed Rails"
      ]
    },
    {
      title: "Mobility Products",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "Manual Wheelchairs",
        "Power Wheelchairs",
        "Transport Chairs",
        "Walkers",
        "Rollators",
        "Canes",
        "Crutches",
        "Wheelchair Accessories"
      ]
    },
    {
      title: "Home Therapy Equipment",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "TENS Units",
        "Lymphedema Pumps",
        "CPM Machines",
        "Negative Pressure Wound Therapy",
        "Infusion Pumps",
        "Exercise Equipment",
        "Therapy Bands"
      ]
    },
    {
      title: "Orthopedic Support",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "Knee Braces",
        "Back Braces",
        "Ankle Braces",
        "Wrist Braces",
        "Cervical Collars",
        "Shoulder Immobilizers",
        "Slings",
        "Boot Walkers"
      ]
    },
    {
      title: "Bathroom Safety",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "Shower Chairs",
        "Bath Benches",
        "Grab Bars",
        "Raised Toilet Seats",
        "Transfer Benches",
        "Bathroom Safety Rails",
        "Commodes"
      ]
    },
    {
      title: "Maternity & Baby",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
      image: "/images/service-card-pictures/dme.jpg",
      products: [
        "Breast Pumps",
        "Maternity Support Belts",
        "Prenatal Support Cushions",
        "Bili Lights",
        "Baby Scales",
        "Infant Phototherapy Blankets",
        "Nursing Supplies"
      ]
    }
  ];

  return (
    <div className="min-h-screen pattern-background">
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Durable Medical Equipment
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nova Medical provides FDA-compliant, high-quality medical equipment designed to enhance patient comfort, improve mobility, and support recovery. Our comprehensive selection of durable medical equipment is crafted to meet the diverse needs of patients and healthcare providers while maintaining the highest standards of safety and regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">100% FDA-compliant equipment from trusted manufacturers</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comprehensive service plans and maintenance options</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Expert guidance on insurance coverage and reimbursement</span>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  href="/locations" 
                  className="px-6 py-3 nova-gradient text-white font-bold rounded-md button-hover pulse-on-hover inline-flex items-center"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full blur-card rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/service-card-pictures/dme.jpg"
                  alt="Durable Medical Equipment"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 blur-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Equipment Categories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nova Medical offers a comprehensive range of FDA-compliant durable medical equipment to meet diverse patient needs, ensuring safety, quality, and regulatory compliance. Browse our categories below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <div 
                key={index} 
                className="blur-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 nova-gradient text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="h-48 rounded-lg overflow-hidden mb-4">
                  <div className="relative h-full w-full">
                    <Image 
                      src={category.image}
                      alt={category.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance and Billing Section */}
      <section className="py-16 pattern-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blur-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance Coverage & Billing Support</h2>
                <p className="text-gray-700 mb-6">
                  We understand that navigating insurance coverage for DME can be complex. Our team of experts is here to help you with the entire process, from verification of benefits to billing and reimbursement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Verification of benefits before equipment delivery</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Direct billing to Medicare, Medicaid, and private insurance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Authorization assistance and documentation support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flexible payment plans for non-covered items</span>
                  </li>
                </ul>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700"
                >
                  Download Our Insurance Guide
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
              </div>
              <div className="bg-blue-50 p-8 md:p-12 flex items-center justify-center">
                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Assistance With Insurance?</h3>
                  <p className="text-gray-700 mb-6">
                    Our insurance specialists are ready to help you navigate coverage for your medical equipment needs. Contact us today for a complimentary insurance verification.
                  </p>
                  <Link 
                    href="/locations" 
                    className="px-6 py-3 nova-gradient text-white font-bold rounded-md button-hover inline-flex items-center"
                  >
                    Contact Our Insurance Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise Section */}
      <section className="py-16 blur-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Nova Medical Difference</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              When you choose Nova Medical for your durable medical equipment needs, you're choosing a partner dedicated to your health and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="blur-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 nova-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FDA Compliance & Quality</h3>
              <p className="text-gray-700">
                All our equipment is FDA-compliant and undergoes rigorous quality testing to meet or exceed industry standards for safety and durability.
              </p>
            </div>
            
            <div className="blur-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 nova-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prompt Delivery</h3>
              <p className="text-gray-700">
                We pride ourselves on timely delivery and professional setup of all equipment in the patient's home.
              </p>
            </div>
            
            <div className="blur-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 nova-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-700">
                Our service doesn't end with delivery. We provide ongoing support, maintenance, and technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 pattern-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blur-card rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Learn More About Our DME Solutions?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your specific needs and discover how Nova Medical's durable medical equipment can improve comfort and care.
            </p>
            <Link 
              href="/locations" 
              className="px-8 py-4 nova-gradient text-white font-bold rounded-md button-hover pulse-on-hover inline-flex items-center text-lg"
            >
              Contact Us Today
              <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}