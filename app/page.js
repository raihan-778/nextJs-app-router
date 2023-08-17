//in app router of next js all page will run in server side. If we want to run it in client side we just need to write a string line  "use client" to of the component
"use client";

const HomePage = () => {
  console.log("server side");
  return (
    <div>
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
      <h1 className="text-5xl font-semibold">This is Homa Page Route</h1>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
};

export default HomePage;
