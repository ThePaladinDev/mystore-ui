import PageTitle from './PageTitle';

const About = () => {
  const h3Style = 'text-lg font-semibold text-primary dark:text-light mb-2';
  const pStyle = 'text-gray-600 dark:text-lighter';

  return (
    <div className="max-w-[600px] min-h-[852px] mx-auto px-6 py-8 font-primary">
      <PageTitle title="About" />
      {/* About Us Content */}
      <p className="leading-6 mt-4 mb-8 text-center text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          The Dog Store
        </span>{' '}
        is here to help you find your very own{' '}
        <span className="text-lg italic text-primary dark:text-light">
          furry friend
        </span>
        .
      </p>

      {/* Why Choose Us Section */}
      <h2 className="text-center text-2xl leading-[32px] font-bold text-primary dark:text-light mb-6">
        Why Choose Our Pups?
      </h2>

      {/* Features */}
      <div className="space-y-8">
        {/* Feature: Health Guaranteed */}
        <div>
          <h3 className={h3Style}>Healthy & Happy</h3>
          <p className={pStyle}>
            Health is our top priority. Every puppy is raised in a clean, loving
            environment and comes with up-to-date vaccinations and a clean bill
            of health.
          </p>
        </div>

        {/* Feature: Socialization */}
        <div>
          <h3 className={h3Style}>Well Socialized</h3>
          <p className={pStyle}>
            Our dogs aren't just pets; they're family. We ensure they are
            well-socialized with humans and other dogs from day one so they
            transition easily into your home.
          </p>
        </div>

        {/* Feature: Expert Guidance */}
        <div>
          <h3 className={h3Style}>Lifetime Support</h3>
          <p className={pStyle}>
            Finding a dog is a big step. We’re here to guide you through the
            process and offer advice on care and training long after you take
            your new friend home.
          </p>
        </div>

        {/* Feature: Trusted Breeds */}
        <div>
          <h3 className={h3Style}>Purebred & Pedigree</h3>
          <p className={pStyle}>
            We focus on quality over quantity. Our selection includes some of
            the most sought-after breeds, all raised with ethical standards and
            genuine care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
