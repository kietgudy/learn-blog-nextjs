export const metadata = {
    title: "View detail blog",
    description: "Blog",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; //content of folder blogs
  }
  