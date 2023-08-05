import Link from "next/link";

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Blog', href: '/blog'},
    { name: "Github", href: "https://github.com/nekevss"}
]

export default function Navbar() {

      return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {navigation
                    .map(item=> <Link key={item.name} className="p-2 text-center rounded text-xl mx-1.5 hover:bg-yellow-950" href={item.href}>{item.name}</Link>)
                }
            </div>
        </nav>
      )
}