
import React, { useRef, useEffect } from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, index }) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [index]);

  return (
    <div ref={memberRef} className="opacity-0 group">
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300 shadow-lg group-hover:shadow-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-precedential-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <h3 className="text-white font-playfair font-bold text-xl">{name}</h3>
          <p className="text-precedential-gold">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleElement = sectionRef.current?.querySelector('.section-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Al Mansouri",
      position: "Managing Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ahmed Khalid",
      position: "Senior Litigation Attorney",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fatima Rahman",
      position: "Corporate Law Specialist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mohammed Al Zaabi",
      position: "Real Estate Law Expert",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 section-title">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Meet Our <span className="text-gold-gradient">Legal</span> Experts
          </h2>
          <p className="text-precedential-black/70">
            Our team of experienced attorneys brings together decades of expertise in UAE law to serve your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 rounded-xl font-medium transition-all duration-300 text-precedential-gold border-2 border-precedential-gold hover:bg-precedential-gold hover:text-white"
          >
            Work With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
