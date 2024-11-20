interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="text-ton-gray dark:text-person-secondary px-10 font-ton font-bold text-3xl mt-4">
      {children}
    </h2>
  );
}
