"use client"

import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Barcode, Moon, Sun, User } from "lucide-react"

export default function Navbar() {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mx-auto max-w-screen-xl w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Barcode className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                TradeHub
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/explore"
                className="transition-colors hover:text-foreground/80"
              >
                Explore
              </Link>
              <Link
                href="/trades"
                className="transition-colors hover:text-foreground/80"
              >
                My Trades
              </Link>
              <Link
                href="/notifications"
                className="transition-colors hover:text-foreground/80"
              >
                Notifications
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex-none">
              <Button variant="outline" className="hidden md:inline-flex">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <User className="h-4 w-4" />
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}