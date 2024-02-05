import { Header, Footer } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" container max-w-[1280px] mx-auto flex  flex-col">
        <Header />
        <main className=" container max-w-[1280px] mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
