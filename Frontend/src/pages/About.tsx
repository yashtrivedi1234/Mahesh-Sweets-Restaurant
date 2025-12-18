import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '39+', label: 'Years of Service' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Award, value: '100+', label: 'Menu Items' },
    { icon: MapPin, value: '1', label: 'Iconic Location' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Story
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            A journey of taste, tradition, and trust since 1985
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Welcome to Mahesh Sweets & Restaurant
            </h2>
            <p className="text-muted-foreground mb-6">
              Nestled in the heart of Sitapur, Uttar Pradesh, Mahesh Sweets & Restaurant has been 
              serving authentic Indian cuisine and traditional sweets for over three decades. What 
              started as a small sweet shop by Late Shri Mahesh Prasad has now grown into one of 
              the most beloved culinary destinations in the region.
            </p>
            <p className="text-muted-foreground mb-6">
              Our recipes are treasured family secrets, passed down through generations. Each sweet 
              is handcrafted with love, using only the finest ingredients sourced locally. From our 
              melt-in-mouth Gulab Jamuns to the aromatic Biryani, every dish tells a story of 
              tradition meeting perfection.
            </p>
            <p className="text-muted-foreground mb-8">
              Today, under the guidance of the third generation of the family, we continue to 
              honor our heritage while embracing modern conveniences like online ordering and 
              home delivery. Because we believe that great food should be accessible to everyone, 
              everywhere.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl card-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on the quality of ingredients. Every item is prepared fresh daily.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Tradition & Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  While we honor our traditional recipes, we also embrace new techniques and flavors.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Customer Happiness</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our success. We go the extra mile to ensure you have a great experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
