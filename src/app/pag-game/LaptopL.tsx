import FeedbackIco from "@/assets/feedback-ico";
import FullScreenIco from "@/assets/fullscreen-ico";
import LikeIco from "@/assets/like-ico";
import QRCode from "@/assets/qrcode-ico";
import SaveGame from "@/assets/save";

export default function PagLarge() {
  return(
    <div className="w-full min-h-[158vh] flex flex-col gap-5 p-2">
      <div className="w-full flex gap-6 justify-center">
        <span className="w-[15%] h-[120vh] bg-white text-black flex flex-col justify-center items-center">
          <div className="w-[95%] h-full m-3 flex justify-center items-center">
            1
          </div>
          <div className="w-[95%] h-full m-3 flex justify-center items-center">
            2
          </div>
        </span>
        <div className="bg-[#373952] w-[65%] h-[120vh] rounded-xl">
          <div className="relative bg-gray-600 min-h-[60vh] max-h-[60vh] m-5 flex justify-center items-center rounded-xl">
            <div>
              Tela de jogo
            </div>
            <div className="w-full bg-gray-800 absolute bottom-0 flex justify-between items-center p-2 px-4 rounded-b-xl">
              <h2>Nome Jogo</h2>
              <nav>
                <ul className="flex justify-center items-center gap-4">
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <LikeIco width={22} height={22} fillColor="#ffffff" rotate={0} />
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <LikeIco width={22} height={22} fillColor="#ffffff" rotate={180} />
                    </button>
                  </li>
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <SaveGame width={30} height={30} fillColor="#ffffff" />
                    </button>
                  </li>
                  <hr className="border-r-[1px] border-gray-500 h-[25px]" />
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <FeedbackIco fillColor="#ffffff" />
                    </button>
                  </li>
                  <hr className="border-r-[1px] border-gray-500 h-[25px]" />
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <QRCode width={30} height={30} fillColor="#ffffff" />
                    </button>
                  </li>
                  <hr className="border-r-[1px] border-gray-500 h-[25px]" />
                  <li className="flex items-center">
                    <button className="hover:opacity-50 ease-in transition">
                      <FullScreenIco width={28} height={28} fillColor="#ffffff"/>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="bg-gray-600 min-h-[25vh] max-h-[25vh] m-5 flex flex-col gap-4 justify-start items-center p-2 rounded-xl text-sm">
            <h2 className="text-lg">Titulo</h2>
            <div className="text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, unde quasi eligendi aspernatur corrupti reprehenderit voluptatibus iusto dolorem eum hic non adipisci obcaecati asperiores atque laboriosam voluptates sapiente quas itaque.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate tempore eveniet iste illum omnis inventore praesentium explicabo placeat iusto alias neque ullam earum est
            </div>
          </div>
          <div className="bg-gray-600 min-h-[25vh] max-h-[25vh] m-5 flex flex-col gap-4 justify-start items-center p-2 rounded-xl text-sm">
            <h2 className="text-lg">Forma de jogar</h2>
            <div className="text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, unde quasi eligendi aspernatur corrupti reprehenderit voluptatibus iusto dolorem eum hic non adipisci obcaecati asperiores atque laboriosam voluptates sapiente quas itaque.</div>
          </div>
        </div>
        <span className="w-[15%] h-[120vh] bg-white text-black flex flex-col justify-center items-center">
          <div className="w-[95%] h-full m-3 flex justify-center items-center">
            3
          </div>
          <div className="w-[95%] h-full m-3 flex justify-center items-center">
            4
          </div>
        </span>
      </div>
      <div className="bg-[#373952] w-full h-[33vh] flex justify-center items-center rounded-xl">
        Outros jogos
      </div>
    </div>
  )
}
