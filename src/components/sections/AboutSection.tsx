const AboutSection = () => {
  return (
    <section className="py-16 bg-academic-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl academic-heading">
            About Me
          </h2>
          
          <div className="academic-card">
            <p className="academic-body text-lg leading-relaxed">
              I am a computational chemical engineer with expertise in combining{" "}
              <strong>Density Functional Theory (DFT)</strong>, <strong>machine learning</strong>, 
              and <strong>functional data analysis</strong> to drive innovation in sustainable technologies. 
              My research focuses on computational catalysis for CO₂ reduction reactions (CO₂RR), 
              fuel cell optimization, and the development of advanced materials through data-driven approaches.
            </p>
            
            <p className="academic-body text-lg leading-relaxed mt-4">
              Currently at NTU Singapore, I leverage molecular simulations, artificial intelligence, 
              and functional data modeling to bridge the gap between fundamental science and practical 
              applications in clean energy and environmental sustainability. My work spans from 
              quantum mechanical calculations to large-scale machine learning frameworks, 
              always with an eye toward real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
