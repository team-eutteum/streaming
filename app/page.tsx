export default function Home() {
  return (
    <>
      {process.env.APP_ENV === "development" ? (
        <p>개발환경</p>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 font-black text-white bg-black min-h-dvh text-7xl">
        <h1><em>RIIZE</em> 음원 총공팀</h1>
      </div>
      )}
    </>
  );
}
