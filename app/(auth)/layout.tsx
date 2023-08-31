interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="grid place-items-center min-h-screen">{children}</div>;
};
export default AuthLayout;
