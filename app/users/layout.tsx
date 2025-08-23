export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <p>This will be present in all users and user detail pages</p>
      {children}
    </div>
  );
}
