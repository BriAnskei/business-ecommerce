import Carousel from "../../components/Carousel/Carousel";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      {/* Full-width carousel */}
      <Carousel />

      {/* Content section with padding */}
      <div className="p-4 mx-auto max-w-6xl md:p-6">
        {/* Your other home page content goes here */}
        <h2>Featured Products</h2>
        {/* ... */}
      </div>
    </>
  );
}
