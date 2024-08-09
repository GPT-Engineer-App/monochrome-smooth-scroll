import { useState } from 'react';
import { Menu, X, ChevronDown, Briefcase, Users, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">Company</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">Services</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
              <Button variant="ghost" className="w-full justify-start">Contact</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Professional Solutions for Your Business
          </h1>
          <p className="mt-4 text-xl">
            We provide cutting-edge services to help your company thrive in the digital age.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="w-10 h-10 text-gray-600 mb-2" />
                <CardTitle>Business Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expert advice to optimize your business processes and increase profitability.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-gray-600 mb-2" />
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Strategies and tools to enhance team collaboration and productivity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="w-10 h-10 text-gray-600 mb-2" />
                <CardTitle>Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Powerful insights from your data to drive informed decision-making.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With years of experience and a passion for excellence, we're committed to delivering top-notch solutions for businesses of all sizes.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                { name: 'Innovative Approach', description: 'We leverage cutting-edge technologies and methodologies.' },
                { name: 'Client-Centric Focus', description: 'Your success is our top priority. We tailor our solutions to your unique needs.' },
                { name: 'Expert Team', description: 'Our professionals bring diverse expertise to every project.' },
                { name: 'Proven Track Record', description: 'We've helped numerous businesses achieve their goals and grow.' },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                      <ChevronDown className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-xl">
              Ready to take your business to the next level? Get in touch with us today.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="max-w-xl w-full">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input type="text" name="name" id="name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md" placeholder="Message"></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold">Company</span>
              <p className="mt-2 text-sm">© 2023 Company, Inc. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
