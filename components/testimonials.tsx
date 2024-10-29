"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Artist",
    content: "TradeHub has completely changed how I exchange art supplies. The community is amazing and the platform is so easy to use!",
    avatar: "SJ",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Collector",
    content: "As a vintage collector, finding like-minded traders was always challenging. TradeHub made it simple and secure.",
    avatar: "MC",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Book Lover",
    content: "I've traded over 50 books on this platform. The matching algorithm is spot-on and the community is wonderful!",
    avatar: "ER",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {TESTIMONIALS.map((testimonial) => (
        <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <Avatar>
              <AvatarFallback>{testimonial.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">{testimonial.content}</p>
        </Card>
      ))}
    </div>
  )
}