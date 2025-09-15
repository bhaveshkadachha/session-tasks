import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../../store/model-slice";
import type { State } from "../../store/store";

export default function Actions() {
  const cartItemCount = useSelector((state: State)=>state.cart.totalQuantity)
  const dispatch = useDispatch()

  return (
    <div className="flex gap-5">
      <button className="cursor-pointer">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_15_152)">
            <rect width="24" height="24" />
            <circle
              cx="10.5"
              cy="10.5"
              r="6.5"
              stroke="#000000"
              stroke-linejoin="round"
            />
            <path
              d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
              fill="#000000"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_152">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button className="cursor-pointer">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_15_82)">
            <rect width="24" height="24" />
            <g filter="url(#filter0_d_15_82)">
              <path
                d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                fill="#000000"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_15_82"
              x="2.55444"
              y="3.5"
              width="18.8911"
              height="19"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_15_82"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_15_82"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_15_82">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button onClick={()=>{ 
        dispatch(modelActions.onOpen())
      }} className="cursor-pointer relative">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
        <path
          d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
          stroke="#000000"
          stroke-width="1.5"
        />
        <path
          d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
          stroke="#000000"
          stroke-width="1.5"
        />
        <path
          d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <span className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded-full absolute -right-1.5 -top-1.5">
        {cartItemCount}
      </span>
      </button>
    </div>
  );
}
