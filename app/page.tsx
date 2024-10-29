import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Gift, RefreshCw, Shield, Star } from "lucide-react"
import Link from "next/link"
import FeaturedItems from "@/components/featured-items"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="relative hero-gradient w-full">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6 py-32 text-center md:py-40">
            <div className="animate-fade-in-up space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Trade Smarter, Not Harder
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                Join our trusted community of traders. Exchange goods and services with
                confidence in a secure, modern platform.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
                >
                  <Link href="/explore">
                    Start Trading
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-secondary/10 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-accent/5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary">10K+</span>
                <span className="text-sm text-muted-foreground">Active Users</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-secondary">50K+</span>
                <span className="text-sm text-muted-foreground">Items Traded</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-accent">98%</span>
                <span className="text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary">4.9</span>
                <span className="text-sm text-muted-foreground">User Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="feature-card p-8 bg-gradient-to-br from-background to-background/50 border-2">
                <Gift className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-2xl font-bold">Item Trading</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Trade items easily with our intuitive platform. Post items, find
                  matches, and make deals.
                </p>
              </Card>
              <Card className="feature-card p-8 bg-gradient-to-br from-background to-background/50 border-2">
                <RefreshCw className="mb-4 h-12 w-12 text-secondary" />
                <h3 className="mb-2 text-2xl font-bold">Smart Matching</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our algorithm finds the perfect trade matches based on your
                  preferences and item value.
                </p>
              </Card>
              <Card className="feature-card p-8 bg-gradient-to-br from-background to-background/50 border-2">
                <Shield className="mb-4 h-12 w-12 text-accent" />
                <h3 className="mb-2 text-2xl font-bold">Secure Trading</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Trade with confidence using our secure platform and trusted user
                  ranking system.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="w-full py-24 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Items
            </h2>
            <FeaturedItems />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-24 bg-accent/5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">List Your Items</h3>
                <p className="text-muted-foreground">Upload photos and describe what you want to trade</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Matches</h3>
                <p className="text-muted-foreground">Browse items or let our algorithm find perfect matches</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Make an Offer</h3>
                <p className="text-muted-foreground">Propose a trade and negotiate terms with other users</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Trade</h3>
                <p className="text-muted-foreground">Meet safely and complete your trade with confidence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              What Our Users Say
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who are already trading on our platform.
              Start your journey today and discover the power of bartering.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
            >
              <Link href="/signup">
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}