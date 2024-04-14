import { useState } from "react";
import logo from "../../assets/WebLogo.png";
import Metamask from '../../assets/metamask.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    title: "COLLECTIONS",
    link: "/",
  },
  {
    title: "TRADE",
    link: "/trade",
  },
  {
    title: "PRICE LOCK",
    link: "/price-lock",
  },
  {
    title: "REWARDS",
    link: "/rewards",
  },
];

const Header = () => {
  const [isShow,setIsShow] = useState(false)
  return (
    <header className="w-screen bg-[transparent] flex justify-center">
      <div className="m-auto h-[60px] flex items-center justify-between mx-5 w-[70%]">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="logo" className="h-[40px]" />
          </div>
          <div>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white mx-5 hover:text-[#67B0DA] text- hover:drop-shadow-md"
                style={{ textShadow: "0px 0px 14px #FFFFFF" }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      <div className="flex items-center justify-between w-[35%]">
        <label className="inline-flex items-center cursor-pointer text-lg">
          <span className=" mr-3 text-white font-semibold">Lite</span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-white font-semibold">Pro</span>
        </label>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_27_339)">
              <path
                d="M10.4844 3.4375V1.375C10.4844 1.23825 10.5387 1.1071 10.6354 1.0104C10.7321 0.9137 10.8632 0.859375 11 0.859375C11.1368 0.859375 11.2679 0.9137 11.3646 1.0104C11.4613 1.1071 11.5156 1.23825 11.5156 1.375V3.4375C11.5156 3.57425 11.4613 3.7054 11.3646 3.8021C11.2679 3.8988 11.1368 3.95312 11 3.95312C10.8632 3.95312 10.7321 3.8988 10.6354 3.8021C10.5387 3.7054 10.4844 3.57425 10.4844 3.4375ZM16.3281 11C16.3281 12.0538 16.0156 13.0839 15.4302 13.9601C14.8447 14.8364 14.0126 15.5193 13.039 15.9225C12.0654 16.3258 10.9941 16.4313 9.96054 16.2257C8.92698 16.0202 7.9776 15.5127 7.23245 14.7676C6.48729 14.0224 5.97984 13.073 5.77425 12.0395C5.56867 11.0059 5.67418 9.9346 6.07745 8.96101C6.48073 7.98743 7.16365 7.15529 8.03985 6.56983C8.91606 5.98436 9.9462 5.67188 11 5.67188C12.4126 5.67347 13.7669 6.23533 14.7658 7.23421C15.7647 8.23308 16.3265 9.58738 16.3281 11ZM15.2969 11C15.2969 10.1502 15.0449 9.3194 14.5727 8.61278C14.1006 7.90617 13.4295 7.35543 12.6443 7.03021C11.8592 6.70498 10.9952 6.61989 10.1617 6.78569C9.32821 6.95148 8.56258 7.36072 7.96165 7.96165C7.36072 8.56258 6.95148 9.32821 6.78569 10.1617C6.61989 10.9952 6.70498 11.8592 7.03021 12.6443C7.35543 13.4295 7.90617 14.1006 8.61278 14.5727C9.3194 15.0449 10.1502 15.2969 11 15.2969C12.1392 15.2955 13.2313 14.8424 14.0368 14.0368C14.8424 13.2313 15.2955 12.1392 15.2969 11ZM5.13562 5.86437C5.18283 5.91503 5.23976 5.95567 5.30301 5.98385C5.36625 6.01203 5.43453 6.02719 5.50377 6.02841C5.573 6.02963 5.64177 6.01689 5.70597 5.99096C5.77018 5.96503 5.8285 5.92643 5.87746 5.87746C5.92643 5.8285 5.96503 5.77018 5.99096 5.70597C6.01689 5.64177 6.02963 5.573 6.02841 5.50377C6.02719 5.43453 6.01203 5.36625 5.98385 5.30301C5.95567 5.23976 5.91503 5.18283 5.86437 5.13562L4.48938 3.76062C4.39163 3.66954 4.26235 3.61996 4.12877 3.62232C3.99518 3.62467 3.86773 3.67879 3.77326 3.77326C3.67879 3.86773 3.62467 3.99518 3.62232 4.12877C3.61996 4.26235 3.66954 4.39163 3.76062 4.48938L5.13562 5.86437ZM5.13562 16.1356L3.76062 17.5106C3.70997 17.5578 3.66933 17.6148 3.64115 17.678C3.61297 17.7413 3.59782 17.8095 3.59659 17.8788C3.59537 17.948 3.60811 18.0168 3.63404 18.081C3.65997 18.1452 3.69857 18.2035 3.74754 18.2525C3.7965 18.3014 3.85482 18.34 3.91903 18.366C3.98323 18.3919 4.052 18.4046 4.12123 18.4034C4.19047 18.4022 4.25875 18.387 4.322 18.3588C4.38524 18.3307 4.44217 18.29 4.48938 18.2394L5.86437 16.8644C5.91503 16.8172 5.95567 16.7602 5.98385 16.697C6.01203 16.6337 6.02719 16.5655 6.02841 16.4962C6.02963 16.427 6.01689 16.3582 5.99096 16.294C5.96503 16.2298 5.92643 16.1715 5.87746 16.1225C5.8285 16.0736 5.77018 16.035 5.70597 16.009C5.64177 15.9831 5.573 15.9704 5.50377 15.9716C5.43453 15.9728 5.36625 15.988 5.30301 16.0162C5.23976 16.0443 5.18283 16.085 5.13562 16.1356ZM16.5 6.01562C16.6367 6.0155 16.7678 5.9611 16.8644 5.86437L18.2394 4.48938C18.3305 4.39163 18.38 4.26235 18.3777 4.12877C18.3753 3.99518 18.3212 3.86773 18.2267 3.77326C18.1323 3.67879 18.0048 3.62467 17.8712 3.62232C17.7377 3.61996 17.6084 3.66954 17.5106 3.76062L16.1356 5.13562C16.0636 5.20773 16.0146 5.29957 15.9947 5.39953C15.9749 5.49949 15.9851 5.6031 16.0241 5.69726C16.063 5.79142 16.1291 5.87192 16.2138 5.92858C16.2985 5.98525 16.3981 6.01554 16.5 6.01562ZM16.8644 16.1356C16.7666 16.0445 16.6373 15.995 16.5038 15.9973C16.3702 15.9997 16.2427 16.0538 16.1483 16.1483C16.0538 16.2427 15.9997 16.3702 15.9973 16.5038C15.995 16.6373 16.0445 16.7666 16.1356 16.8644L17.5106 18.2394C17.6084 18.3305 17.7377 18.38 17.8712 18.3777C18.0048 18.3753 18.1323 18.3212 18.2267 18.2267C18.3212 18.1323 18.3753 18.0048 18.3777 17.8712C18.38 17.7377 18.3305 17.6084 18.2394 17.5106L16.8644 16.1356ZM3.95312 11C3.95312 10.8632 3.8988 10.7321 3.8021 10.6354C3.7054 10.5387 3.57425 10.4844 3.4375 10.4844H1.375C1.23825 10.4844 1.1071 10.5387 1.0104 10.6354C0.9137 10.7321 0.859375 10.8632 0.859375 11C0.859375 11.1368 0.9137 11.2679 1.0104 11.3646C1.1071 11.4613 1.23825 11.5156 1.375 11.5156H3.4375C3.57425 11.5156 3.7054 11.4613 3.8021 11.3646C3.8988 11.2679 3.95312 11.1368 3.95312 11ZM11 18.0469C10.8632 18.0469 10.7321 18.1012 10.6354 18.1979C10.5387 18.2946 10.4844 18.4257 10.4844 18.5625V20.625C10.4844 20.7618 10.5387 20.8929 10.6354 20.9896C10.7321 21.0863 10.8632 21.1406 11 21.1406C11.1368 21.1406 11.2679 21.0863 11.3646 20.9896C11.4613 20.8929 11.5156 20.7618 11.5156 20.625V18.5625C11.5156 18.4257 11.4613 18.2946 11.3646 18.1979C11.2679 18.1012 11.1368 18.0469 11 18.0469ZM20.625 10.4844H18.5625C18.4257 10.4844 18.2946 10.5387 18.1979 10.6354C18.1012 10.7321 18.0469 10.8632 18.0469 11C18.0469 11.1368 18.1012 11.2679 18.1979 11.3646C18.2946 11.4613 18.4257 11.5156 18.5625 11.5156H20.625C20.7618 11.5156 20.8929 11.4613 20.9896 11.3646C21.0863 11.2679 21.1406 11.1368 21.1406 11C21.1406 10.8632 21.0863 10.7321 20.9896 10.6354C20.8929 10.5387 20.7618 10.4844 20.625 10.4844Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_339">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <a href=""className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.984 2.542C14.071 2.711 14.093 2.928 14.136 3.362C14.218 4.182 14.259 4.592 14.431 4.818C14.5382 4.95832 14.6806 5.06777 14.8437 5.13522C15.0069 5.20266 15.185 5.2257 15.36 5.202C15.64 5.165 15.96 4.904 16.598 4.382C16.935 4.105 17.104 3.967 17.285 3.909C17.5155 3.83534 17.7649 3.84777 17.987 3.944C18.162 4.02 18.317 4.174 18.624 4.482L19.518 5.376C19.826 5.684 19.98 5.838 20.056 6.013C20.1522 6.23506 20.1647 6.48447 20.091 6.715C20.033 6.896 19.895 7.065 19.619 7.402C19.096 8.041 18.835 8.36 18.797 8.641C18.7736 8.8159 18.7969 8.99387 18.8645 9.15686C18.9321 9.31985 19.0417 9.46204 19.182 9.569C19.407 9.741 19.818 9.782 20.639 9.864C21.072 9.907 21.289 9.929 21.459 10.016C21.6735 10.1272 21.8404 10.3123 21.929 10.537C22 10.714 22 10.932 22 11.368V12.632C22 13.068 22 13.286 21.93 13.462C21.8411 13.6874 21.6734 13.8729 21.458 13.984C21.289 14.071 21.072 14.093 20.638 14.136C19.818 14.218 19.408 14.259 19.182 14.431C19.0417 14.5382 18.9322 14.6806 18.8648 14.8437C18.7973 15.0069 18.7743 15.185 18.798 15.36C18.836 15.64 19.097 15.96 19.619 16.598C19.895 16.935 20.033 17.103 20.091 17.285C20.1647 17.5155 20.1522 17.7649 20.056 17.987C19.98 18.162 19.826 18.316 19.518 18.624L18.624 19.517C18.316 19.826 18.162 19.98 17.987 20.055C17.7649 20.1512 17.5155 20.1637 17.285 20.09C17.104 20.032 16.935 19.894 16.598 19.618C15.959 19.096 15.64 18.835 15.36 18.798C15.185 18.7743 15.0069 18.7973 14.8437 18.8648C14.6806 18.9322 14.5382 19.0417 14.431 19.182C14.259 19.407 14.218 19.817 14.136 20.638C14.093 21.072 14.071 21.289 13.984 21.458C13.8732 21.6732 13.6881 21.8409 13.463 21.93C13.286 22 13.068 22 12.632 22H11.368C10.932 22 10.714 22 10.538 21.93C10.3126 21.8411 10.1271 21.6734 10.016 21.458C9.929 21.289 9.907 21.072 9.864 20.638C9.782 19.818 9.741 19.408 9.569 19.182C9.46192 19.0418 9.31968 18.9325 9.1567 18.8651C8.99372 18.7976 8.81581 18.7745 8.641 18.798C8.36 18.835 8.041 19.096 7.402 19.618C7.065 19.895 6.896 20.033 6.715 20.091C6.48447 20.1647 6.23506 20.1522 6.013 20.056C5.838 19.98 5.683 19.826 5.376 19.518L4.482 18.624C4.174 18.316 4.02 18.162 3.944 17.987C3.84777 17.7649 3.83534 17.5155 3.909 17.285C3.967 17.104 4.105 16.935 4.381 16.598C4.904 15.959 5.165 15.64 5.202 15.359C5.22552 15.1842 5.20239 15.0063 5.13495 14.8433C5.06751 14.6803 4.95816 14.5381 4.818 14.431C4.593 14.259 4.182 14.218 3.361 14.136C2.928 14.093 2.711 14.071 2.541 13.984C2.32655 13.8728 2.1596 13.6877 2.071 13.463C2 13.286 2 13.068 2 12.632V11.368C2 10.932 2 10.714 2.07 10.538C2.15889 10.3126 2.32661 10.1271 2.542 10.016C2.711 9.929 2.928 9.907 3.362 9.864C4.182 9.782 4.593 9.741 4.818 9.569C4.95834 9.46204 5.06788 9.31985 5.1355 9.15686C5.20312 8.99387 5.22641 8.8159 5.203 8.641C5.165 8.36 4.903 8.041 4.381 7.401C4.105 7.064 3.967 6.896 3.909 6.714C3.83534 6.48347 3.84777 6.23406 3.944 6.012C4.02 5.838 4.174 5.683 4.482 5.375L5.376 4.482C5.684 4.174 5.838 4.019 6.013 3.944C6.23506 3.84777 6.48447 3.83534 6.715 3.909C6.896 3.967 7.065 4.105 7.402 4.381C8.041 4.903 8.36 5.164 8.64 5.202C8.81521 5.22578 8.9936 5.20267 9.15697 5.13504C9.32034 5.06741 9.46286 4.95766 9.57 4.817C9.74 4.592 9.782 4.182 9.864 3.361C9.907 2.928 9.929 2.711 10.016 2.541C10.127 2.32617 10.3121 2.15884 10.537 2.07C10.714 2 10.932 2 11.368 2H12.632C13.068 2 13.286 2 13.462 2.07C13.6874 2.15889 13.8729 2.32661 13.984 2.542ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div>
          <button onClick={()=>setIsShow(true)} className="bg-[#90DFD1] text-black font-extrabold text-xl  p-1 rounded-md">
            CONNECT WALLET
          </button>
        </div>
        </div>
      </div>
      <>
      {/* Overlay */}
      {isShow && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-[40%] h-[80%] bg-white rounded-xl bg-gradient-to-t from-[#423FD2] to-[#B530D7] p-1">
            <div className=" h-full w-full bg-black rounded-xl">
              <div className="text-white text-[20px] flex items-center justify-between pt-5 pr-4 pl-8">
                <p className="text-[30px] font-bold">Connect Wallet</p>
                <FontAwesomeIcon icon={faClose} onClick={()=>setIsShow(false)} className="text-[#4A4A4A] hover:text-white w-[10%] h-[50px] cursor-pointer"/>
              </div>
              <p className="pl-8 text-[#4A4A4A] text-[20px] font-semibold">You need to connected wallet</p>
              <div className="mt-12 px-8">
                <p className="text-[25px] text-white font-semibold">Installed Wallet</p>
                <div className="flex justify-between mt-3">
                  <div className="w-[30%] border-2 border-[#4A4A4A] text-center">
                    <div className="flex justify-center">
                      <img src={Metamask} className="w-[80%]"/>
                    </div>
                    <p className="text-[#7F7F7F] font-semibold text-[20px]">Metamask</p>
                  </div>
                </div>
                <div className="w-[30%] cursor-pointer text-[20px] flex justify-between text-white font-semibold mt-3 items-center">
                  <p>More Wallet</p>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
              </div>
              <div className="text-center mt-10">
                <button className="bg-gradient-to-t from-[#423FD2] to-[#B530D7] w-[60%] text-[30px] rounded-xl text-white">Connect to Wallet</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    </header>
  );
};

export default Header;
