import RootLayout from "@/components/layout/RootLayout";

export default function NoticeBoard() {
  return (
    <>
      <div>Notice board</div>
    </>
  );
}

NoticeBoard.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
