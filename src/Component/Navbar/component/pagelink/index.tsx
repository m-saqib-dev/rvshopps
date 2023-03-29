const PageLink = ({ className, children }: any) => {
  return (
    <>
      <li
        className={`mx-1 flex items-center rounded-sm text-base text-center ${className}`}
      >
        {children}
      </li>
    </>
  );
};

export default PageLink;
