export const metadata = {
  title: "List of Blogs",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; //content of folder blogs
}
