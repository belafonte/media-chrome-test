import dynamic from 'next/dynamic'

const HLSPlayer = dynamic(() => import('./components/hls-player/hls-player'), { ssr: false })
const Menu = dynamic(() => import('./menu'), { ssr: false })

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HLSPlayer src="samples/bunny/1080.mp4" >
        <Menu></Menu>
      </HLSPlayer>
    </main>
  );
}
