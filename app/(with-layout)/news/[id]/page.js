import React from "react";

const DynamicNewsPage = ({ params, searchParams }) => {
  // here searchParms is a query params using in url search query
  console.log(searchParams);
  return (
    <div>
      <h1>This is Dynamic News page id: {params.id}</h1>
    </div>
  );
};

export default DynamicNewsPage;
