import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row h-[100vh] w-full p-5 gap-2">
      <aside className="flex flex-col justify-between items-center h-full max-w-md p-2 bg-white rounded-[86px]">
        <img
          className="mt-6 mb-[64px]"
          src="./hideaki-logo.svg"
          alt="Hideaki Logo"
          height={30}
          width={120}
        />
        <div className="w-full h-[530px] rounded-[86px] bg-[url('/hideaki-photo.png')] bg-right object-right" />
        <div className="w-full h-60 py-5 px-11 rounded-[86px] bg-[#E0DFE1]">
          <h2>85</h2>
          <p>
            Popular otions include SalesForce, Microsoft Dynamics 365 and Zoho
            CRM
          </p>
          <a href="">Custumer Relashionship Magnament</a>
        </div>
      </aside>

      <main className="h-full w-full p-2 rounded-[132px] bg-[url('/hero-gif.gif')] bg-cover relative">
        <header className="absolute left-[25%] translate-y-1/2 text-white">
          <nav className="bg-black rounded-full p-2">
            <ul className="flex flex-row justify-between gap-1 items-center">
              <li className="bg-white text-black rounded-full p-[0.8rem] cursor-pointer">
                <a href="http://"></a>Menu icon
              </li>
              <li className="bg-white text-black rounded-full p-[0.8rem] cursor-pointer">
                <a href="http://"></a>Features
              </li>
              <li className="bg-white text-black rounded-full p-[0.8rem] cursor-pointer">
                <a href="http://"></a>Projects
              </li>
              <li className="bg-white text-black rounded-full p-[0.8rem] cursor-pointer">
                <a href="http://"></a>About me
              </li>
              <li className="bg-white text-black rounded-full p-[0.8rem] cursor-pointer">
                <a href="http://"></a>Contact me
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-row justify-evenly items-end absolute left-[5%] top-[27%]">
          <h1 className="leading-[6.8rem] -tracking-tighter">
            Fullstack <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software
            <br />
            Developer
          </h1>
          <span className="mb-3 p-4 border-white rounded-full border-2 text-white cursor-pointer transition ease-in-out delay-150 hover:bg-white hover:text-black">
            DESIGN & PERFORMANCE
          </span>
        </div>
        <p className="absolute left-[6%] top-[69%] text-xl text-white">
          Unindo design, performance e código, sigo criando projetos únicos.
          <br /> Em busca da primeira vaga no mercado de trabalho.
        </p>
      </main>

      <aside className="flex flex-col justify-between items-center h-full max-w-md p-2 bg-white rounded-[86px]">
        <div className="flex mt-8 flex-row gap-5 items-center w-auto py-6 px-8 rounded-full bg-[#0d001f] text-white">
          <p>
           Contatos
          </p>
          <a className="h-8 w-8 bg-white rounded-full" href=""><img src="/linkedin-logo.svg" alt="Linkedin icon logo" height={0} width={0} /></a>
          <a className="h-8 w-8 bg-white rounded-full" href=""><img src="/github-logo.svg" alt="Github icon logo" height={0} width={0}/></a>
          <a className="h-8 w-8 bg-white rounded-full" href=""><img src="/behance-logo.svg" alt="Behance icon logo" height={0} width={0}/></a>
        </div>

        <div className="w-full h-[530px] rounded-[86px]" />
        <div className="w-full h-60 py-5 px-11 rounded-[86px] bg-[#0d001f] text-white">
          <h2>85</h2>
          <p>
            Popular otions include SalesForce, Microsoft Dynamics 365 and Zoho
            CRM
          </p>
          <a href="">Custumer Relashionship Magnament</a>
        </div>
      </aside>
    </div>
  );
}
