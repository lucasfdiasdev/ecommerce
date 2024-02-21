type Props = {
  children: React.ReactNode;
};

const LayoutAuth = ({ children }: Props) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutAuth;
