import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-[72px]">{children}</main>
      <Footer />
    </>
  )
}
