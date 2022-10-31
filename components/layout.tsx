import NavBar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
