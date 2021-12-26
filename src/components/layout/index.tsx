import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="bg-background-900 text-primary-50">
      <section className="max-w-[800px] p-2 mx-auto min-h-screen">
        <Header />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
