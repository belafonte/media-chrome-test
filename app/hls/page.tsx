import dynamic from 'next/dynamic'
const HLSPlayer = dynamic(() => import('../components/hls-player/hls-player'), { ssr: false })

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <HLSPlayer src="samples/hls/video_360p.m3u8" >
      </HLSPlayer>
    </main>
  );
}

export default Page;
