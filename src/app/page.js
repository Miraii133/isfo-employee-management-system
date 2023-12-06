import MultipleViewPage from "@/app/multiple-view-page/page";
import SingleViewPage from "@/app/single-view-page/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test -- this is homepage
      <MultipleViewPage />
      <SingleViewPage />
    </main>
  );
}
