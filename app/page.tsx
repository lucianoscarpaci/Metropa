import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Car, AlertTriangle, MapPin, TrendingUp, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Metropola</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Request Demo
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Real-Time Urban Intelligence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 leading-tight">
            Transform Urban Management with <span className="text-accent">Real-Time Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Empower city planners and municipal leaders with comprehensive dashboards that turn complex urban data into
            actionable intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <MapPin className="w-5 h-5 mr-2" />
              Explore Dashboard
            </Button>
            <Button variant="outline" size="lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Urban Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Monitor, analyze, and optimize every aspect of your city with our integrated dashboard platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-3">
                  <Car className="w-6 h-6 text-chart-1" />
                </div>
                <CardTitle className="text-lg">Traffic Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Real-time traffic monitoring with predictive analytics and congestion management tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Crowd Dynamics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Monitor population density and movement patterns for better urban planning decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Incident Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Rapid response coordination with automated alerts and resource optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  AI-powered insights that help anticipate urban challenges before they occur.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Live Dashboard Preview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">See Urban Intelligence in Action</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience how Metropola transforms complex urban data into clear, actionable insights. Our intuitive
                interface makes it easy for city planners to make informed decisions quickly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Real-time data visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Interactive mapping and overlays</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Customizable alerts and notifications</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">City Overview Dashboard</h3>
                  <Badge variant="secondary" className="text-xs">
                    Live
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-chart-1">847K</div>
                    <div className="text-xs text-muted-foreground">Active Population</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-chart-2">92%</div>
                    <div className="text-xs text-muted-foreground">Traffic Flow</div>
                  </div>
                </div>
                <div className="h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Built for Modern Cities</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bank-level encryption and compliance with municipal data protection standards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Processing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Process millions of data points instantly with sub-second response times.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From small towns to megacities, our platform scales with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your City?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Join forward-thinking cities already using Metropola to make smarter, data-driven decisions for their
            communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">Metropola</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time urban intelligence for smarter cities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Metropola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
