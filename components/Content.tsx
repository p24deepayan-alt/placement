
import React, { useState } from 'react';

const ProgramCard: React.FC<{ title: string; subtitle: string; description: string; href: string; profilesHref: string; coordinatorsHref: string }> = ({ title, subtitle, description, href, profilesHref, coordinatorsHref }) => (
  <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-200/75">
    <h3 className="text-3xl font-display font-bold text-iima-blue">{title}</h3>
    <p className="mt-2 text-lg font-body font-semibold text-gray-700">{subtitle}</p>
    <p className="mt-4 font-body text-gray-600 flex-grow">
      {description}
    </p>
    <div className="mt-8 pt-6 border-t border-gray-200">
      <a 
        href={href} 
        className="block w-full bg-iima-blue text-white font-body font-semibold text-center py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
        aria-label={`Explore the ${title} programme`}
      >
        Explore Programme
      </a>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <a 
          href={profilesHref} 
          className="block w-full text-center py-3 px-4 rounded-md font-body font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label={`View student profiles for the ${title} programme`}
        >
          View Profiles
        </a>
        <a 
          href={coordinatorsHref} 
          className="block w-full text-center py-3 px-4 rounded-md font-body font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label={`Contact co-ordinators for the ${title} programme`}
        >
          Contact Co-ordinators
        </a>
      </div>
    </div>
  </div>
);

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const DocumentIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const AccordionItem: React.FC<{ program: string; isOpen: boolean; onToggle: () => void; }> = ({ program, isOpen, onToggle }) => {
    const years = Array.from({ length: 5 }, (_, i) => 2024 - i);

    const renderContent = () => {
        if (program === 'PGP' || program === 'PGP-FABM') {
            return (
                <div className="py-4 px-2 grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <h4 className="text-xl font-display text-iima-blue/90 mb-4 pl-3">Summer Internship Placements</h4>
                        <div className="space-y-2">
                            {years.map(year => (
                                <a href="#" key={`summer-${program}-${year}`} className="flex items-center p-3 text-gray-600 rounded-md hover:bg-gray-100 hover:text-iima-blue font-body transition-colors group">
                                    <DocumentIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-iima-blue transition-colors" />
                                    IPRS Report {year}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-display text-iima-blue/90 mb-4 pl-3">Final Placements</h4>
                        <div className="space-y-2">
                            {years.map(year => (
                                <a href="#" key={`final-${program}-${year}`} className="flex items-center p-3 text-gray-600 rounded-md hover:bg-gray-100 hover:text-iima-blue font-body transition-colors group">
                                    <DocumentIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-iima-blue transition-colors" />
                                    IPRS Report {year}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="py-4 px-2 space-y-2">
                {years.map(year => (
                    <a href="#" key={`${program}-${year}`} className="flex items-center p-3 text-gray-600 rounded-md hover:bg-gray-100 hover:text-iima-blue font-body transition-colors group">
                        <DocumentIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-iima-blue transition-colors" />
                        IPRS Report {year}
                    </a>
                ))}
            </div>
        );
    };

    return (
        <div className="border-b border-gray-200">
            <h2>
                <button
                    type="button"
                    className="flex justify-between items-center w-full py-5 font-display text-2xl text-left text-iima-blue hover:bg-gray-50/50 focus:outline-none focus:bg-gray-50/50 px-2 rounded-t-md"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${program}`}
                >
                    <span>{program}</span>
                    <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div
                id={`accordion-content-${program}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[40rem]' : 'max-h-0'}`}
            >
                {renderContent()}
            </div>
        </div>
    );
};

const Content: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('PGP');
  const iprsPrograms = ['PGP', 'PGP-FABM', 'PGPX'];
  
  const programs = [
    {
      title: 'PGP',
      subtitle: 'Post-Graduate Programme in Management',
      description: 'IIMA’s flagship two-year Post-Graduate Programme, globally ranked as one of the best. It is designed to develop professional managers with strong conceptual fundamentals and skills required to manage businesses of the future.',
      href: '#',
      profilesHref: '#',
      coordinatorsHref: '#',
    },
    {
      title: 'PGP-FABM',
      subtitle: 'Post-Graduate Programme in Food & Agri-business Management',
      description: 'A unique two-year programme that prepares managers and entrepreneurs for the evolving food and agri-business sector. It combines general management principles with a deep understanding of the industry.',
      href: '#',
      profilesHref: '#',
      coordinatorsHref: '#',
    },
    {
      title: 'PGPX',
      subtitle: 'Post-Graduate Programme in Management for Executives',
      description: 'A one-year, full-time residential programme for executives with substantial work experience, designed to accelerate careers by providing a global perspective and honing leadership and strategic decision-making skills.',
      href: '#',
      profilesHref: '#',
      coordinatorsHref: '#',
    },
  ];

  const staff = [
    { name: 'Pawan Ruikar', designation: 'Assistant General Manager', email: 'agm-placements', phone: '4666' },
    { name: 'Abdulrazak Munshi', designation: 'Assistant Manager', email: 'plcoffice', phone: '4668' },
    { name: 'Grishma Nair', designation: 'Executive', email: 'plcops', phone: '4669' },
    { name: 'Bhavesh Chauhan', designation: 'Executive', email: 'plcstaff', phone: '4667' },
  ];

  return (
    <>
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-iima-blue">Our Flagship Programmes</h2>
            <div className="mt-4 w-24 h-1 bg-iima-blue mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-iima-blue">IPRS Placement Reports</h2>
            <div className="mt-4 w-24 h-1 bg-iima-blue mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto text-left space-y-6 mb-16">
            <p className="font-body text-gray-700 leading-relaxed">
              The Indian Placement Reporting Standards (IPRS) is an effort towards standardizing B-school placement reports. This initiative taken by IIM Ahmedabad and contributions made by the various stakeholders like media, recruiters and other B-schools have resulted in designing a comprehensive Placement Reporting Standard. The standards designed not only assure the privacy of the individual level data or information but also specify the format for reporting aggregate statistics which would satisfy the information needs of the different stakeholders.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              Why IPRS? The necessity for such an initiative was felt as applicants gather recruitment information using the placement reports and rankings put forward by different B-schools, media and ranking agencies. Individual B-school have different formats of placement reports. The lack of standardization and clarity may lead to the misinterpretation of the data and lead to wrong decision making. Therefore there was a need for such standards to be introduced so as to make the data on the placement reports more comparable and reliable.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {iprsPrograms.map((prog) => (
              <AccordionItem
                key={prog}
                program={prog}
                isOpen={openAccordion === prog}
                onToggle={() => setOpenAccordion(openAccordion === prog ? null : prog)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-iima-blue">Contact Us</h2>
            <div className="mt-4 w-24 h-1 bg-iima-blue mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-lg shadow-lg border border-gray-200/75">
              <div className="md:col-span-1 flex justify-center">
                  <img src="prof_vishy.jpg" alt="Prof. Vishwanath Pingali" className="rounded-full w-48 h-48 object-cover shadow-lg" />
              </div>
              <div className="md:col-span-2 text-left font-body">
                  <h3 className="text-3xl font-display font-bold text-iima-blue">Prof. Vishwanath Pingali</h3>
                  <p className="mt-2 text-lg font-semibold text-gray-800">Chairperson, Placement Committee</p>
                  <p className="mt-1 text-md text-gray-600">Associate Professor, Economics Area</p>
                  <div className="mt-6 border-t border-gray-200 pt-4 space-y-3 text-gray-600">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-iima-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <a href="mailto:chair-placement@iima.ac.in" className="hover:text-iima-blue hover:underline">chair-placement@iima.ac.in</a>
                      </div>
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-iima-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span>+91 79 7152 4650</span>
                      </div>
                       <div className="flex items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-iima-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>Placement Office, IIM Ahmedabad</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-3xl font-display font-bold text-iima-blue text-center mb-10">Placement Office Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {staff.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200/75 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold font-display text-iima-blue">{member.name}</h4>
                  <p className="mt-1 text-gray-600 font-body">{member.designation}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-iima-blue/80" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href={`mailto:${member.email}@iima.ac.in`} className="hover:text-iima-blue hover:underline font-body">
                          {member.email}@iima.ac.in
                        </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-iima-blue/80" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="font-body">+91 79 7152 {member.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
    