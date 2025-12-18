import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Clock, Truck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FoodCard from '@/components/FoodCard';
import { foodItems } from '@/data/dummyData';

const Index = () => {
  const popularItems = foodItems.filter((item) => item.isPopular).slice(0, 4);

  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, locally sourced ingredients',
    },
    {
      icon: Heart,
      title: 'Traditional Taste',
      description: 'Authentic recipes passed down through generations',
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Hot and fresh food delivered within 30 minutes',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free delivery on orders above ₹500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Authentic Sweets &<br />
              Delicious Food
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Experience the taste of tradition from Sitapur. Fresh sweets, mouthwatering dishes, delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="xl" variant="hero-outline" className="w-full sm:w-auto bg-card text-primary hover:bg-card/90 border-0">
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button
                  size="xl"
                  variant="ghost"
                  className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Popular Items
              </h2>
              <p className="text-muted-foreground">
                Our most loved dishes by customers
              </p>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/menu">
              <Button variant="outline">
                View All Menu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We've been serving happiness on a plate since 1985
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-hero flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                Craving Something Delicious?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Order now and get your favorite sweets and dishes delivered hot and fresh!
              </p>
              <Link to="/menu">
                <Button size="xl" className="bg-card text-primary hover:bg-card/90">
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
