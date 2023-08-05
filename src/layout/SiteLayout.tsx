import Navbar from "@/components/NavBar"

export default function Layout({ children }: any) {
    return (
      <>
        <Navbar />
        <main className="h-full">{children}</main>
      </>
    )
  }