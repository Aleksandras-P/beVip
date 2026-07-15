function PageTitle({ title, keyWord }: { title: string; keyWord: string }) {
  const parts = title.split('{key}');

  return (
    <h1 className="pageTitle">
      {parts[0]}
      <span className="pageTitle__span">{keyWord}</span>
      {parts[1]}
    </h1>
  );
}

export default PageTitle