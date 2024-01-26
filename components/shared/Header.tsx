import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { HelpCircle, HelpCircleIcon, Search } from "lucide-react"
import React from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Input } from "../ui/input"


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/logo.png" width={100} height={19}
            alt="Plotix logo" 
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="mr-40 flex justify-center w-[400px] relative">
      <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <Input
        className="pl-10 ml-3 border-violet-700" // Add padding to the left to make room for the icon
        placeholder="Search"
      />
    </div>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
          <Button variant="ghost"><HelpCircleIcon /> </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem >Give feedback</DropdownMenuItem>
            <DropdownMenuItem >Request a feature</DropdownMenuItem>
            <DropdownMenuItem >Terms of service</DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
          </div>
   <Button variant="ghost">
    <Link href="/sign-up">Become a Coach</Link>
  </Button>
  <Button asChild className="" size="lg">
    <Link href="/sign-in">Sign up</Link>
  </Button>
</SignedOut>

        </div>
      </div>
    </header>
  )
}

export default Header