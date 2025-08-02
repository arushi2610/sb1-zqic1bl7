import React from 'react';
import { Heart, Users, Award, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Manager's Pizza</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where bold Indian flavors meet handcrafted pizza in Seattle’s University District
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Manager’s Pizza started with a simple goal: to bring together the best of two food worlds. With years of experience managing popular pizza spots, our founder set out to build something better: a cozy, welcoming place serving handcrafted pizzas with bold, unforgettable flavors.
              </p>
              <p>
                Our menu blends classic Italian technique with vibrant Indian-inspired toppings. All made fresh with premium ingredients and homemade sauces. Located in the heart of the U District, we’re a go-to for students, families, and anyone craving a slice that’s both familiar and exciting.
              </p>
              <p>
                From Butter Chicken Pizza to classic Margherita, every dish is made to bring people together.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manager's Pizza kitchen"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">Est. 2025</div>
              <div className="text-sm">Serving Seattle</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Made with Love</h4>
            <p className="text-gray-600">Every pizza is crafted with passion</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Community First</h4>
            <p className="text-gray-600">Supporting local students and families with affordable, quality meals</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Ingredients</h4>
            <p className="text-gray-600">Fresh, premium ingredients sourced from trusted local suppliers</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Local Roots</h4>
            <p className="text-gray-600">Proudly serving the University District and greater Seattle area</p>
          </div>
        </div>

{/*
        
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our diverse team brings together culinary traditions from around the world, creating a warm, 
            welcoming environment where every guest feels like family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Pizza chef"
              className="rounded-xl shadow-lg mx-auto"
            />
            <img
              src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Kitchen team"
              className="rounded-xl shadow-lg mx-auto"
            />
            <img
              src="https://images.pexels.com/photos/2474662/pexels-photo-2474662.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Service team"
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default AboutSection;