export default function MainContent () {
  return (
    <div className="bg-main py-12 md:py-20 text-white min-h-screen">
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-30 2xl:mx-40 space-y-4">
        {new Array(1000).fill().map((v, i) => <p key={i}>{i}</p>)}
      </div>
    </div>
  )
}
