"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { motion } from "framer-motion"

const FEATURED_ITEMS = [
  {
    id: 1,
    title: "Vintage Camera",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80",
    postedAt: new Date("2024-03-10"),
    owner: {
      name: "John Doe",
      rating: 4.8,
      totalReviews: 124
    }
  },
  {
    id: 2,
    title: "Handcrafted Leather Bag",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    postedAt: new Date("2024-03-11"),
    owner: {
      name: "Emma Wilson",
      rating: 4.9,
      totalReviews: 150
    }
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    postedAt: new Date("2024-03-12"),
    owner: {
      name: "Mike Chen",
      rating: 4.7,
      totalReviews: 130
    }
  },
  {
    id: 4,
    title: "Antique Book Collection",
    category: "Books",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    postedAt: new Date("2024-03-13"),
    owner: {
      name: "Sarah Brown",
      rating: 4.9,
      totalReviews: 140
    }
  },
  {
    id: 5,
    title: "Smart Watch",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80",
    postedAt: new Date("2024-03-14"),
    owner: {
      name: "Alice Johnson",
      rating: 4.6,
      totalReviews: 98
    }
  },
  {
    id: 6,
    title: "Wireless Earbuds",
    category: "Audio",
    image: "https://unsplash.com/photos/a-hand-holding-a-pair-of-silver-ear-buds-ehjstVMy5Vw",
    postedAt: new Date("2024-03-15"),
    owner: {
      name: "Bob Smith",
      rating: 4.7,
      totalReviews: 110
    }
  },
  // Add more items as needed
]

export default function FeaturedItems() {
  const router = useRouter()

  return (
    <div className="space-y-6 px-4 md:px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Featured Items</h2>
        <Button 
          variant="outline" 
          onClick={() => router.push('/explore')}
          className="hover:bg-primary hover:text-white transition-colors"
        >
          Show All Items
        </Button>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {FEATURED_ITEMS.map((item) => (
              <CarouselItem 
                key={item.id} 
                className="pl-2 md:pl-4 basis-full xs:basis-[280px] sm:basis-[320px] md:basis-[340px]"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Card 
                    className="featured-item-card overflow-hidden border hover:border-primary transition-all duration-300 cursor-pointer h-full"
                    onClick={() => router.push(`/items/${item.id}`)}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Badge 
                        className="absolute right-2 top-2 bg-primary/90 backdrop-blur-sm"
                      >
                        {item.category}
                      </Badge>
                      <div 
                        className="absolute left-2 bottom-2 bg-black/60 backdrop-blur-[2px] 
                        text-white text-xs px-2 py-1 rounded-md"
                      >
                        Posted {formatDistanceToNow(item.postedAt)} ago
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
                      <div className="mt-3 space-y-2">
                        {/* Seller Information Section */}
                        <div className="flex items-center gap-2 text-sm">
                          <div className="text-muted-foreground">Seller:</div>
                          <div className="font-medium truncate">{item.owner.name}</div>
                        </div>
                        {/* Seller Rating Section */}
                        <div className="flex items-center gap-2 text-sm bg-muted/50 rounded-md p-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{item.owner.rating}</span>
                          </div>
                          <div className="text-muted-foreground">
                            Seller Rating ({item.owner.totalReviews} reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="hidden md:flex -left-12 h-12 w-12 border-2 hover:bg-primary hover:text-white
            transition-all duration-300"
          />
          <CarouselNext 
            className="hidden md:flex -right-12 h-12 w-12 border-2 hover:bg-primary hover:text-white
            transition-all duration-300"
          />
        </Carousel>

        {/* Mobile scroll indicator */}
        <div className="mt-4 flex justify-center gap-1 md:hidden">
          <motion.div 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Swipe to see more →
          </motion.div>
        </div>
      </div>
    </div>
  )
}