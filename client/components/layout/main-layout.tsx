type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="my-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MainLayout;
