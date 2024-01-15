import Link from "next/link";

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about'},
    { name: 'Blog', href: '/blog'},
    { name: "Github", href: "https://github.com/nekevss"}
]

export default function Navbar() {
      return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {navigation
                    .map(item=> <Link key={item.name} className="p-2 text-center rounded text-sm lg:text-xl mx-1.5 hover:bg-theme" href={item.href}>{item.name}</Link>)
                }
            </div>
        </nav>
      )
}
