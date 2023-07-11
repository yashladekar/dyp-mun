import React from "react";

import { colors } from "../vars/globalVars";

const CrownIcon1 = () => {
  return (
    <svg width={100} height={71} xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        d="M0.5 38H19.5C20.0727 78.5586 79.6667 77.4278 79.5 38H100"
        fill="none"
        stroke={colors.darkTomato}
        strokeOpacity="0.5"
      />
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="37"
        y="12"
        width="35"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.5527 12.2822H71.8615V53.1499H37.5527V12.2822Z"
          fill={colors.white}
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.6586 18.1112C69.6506 18.1082 69.6436 18.1052 69.6346 18.1022L53.2556 12.2822L53.6286 14.4012L69.0086 19.8652C69.0116 19.8672 69.0156 19.8682 69.0186 19.8692C69.7796 20.1462 70.1756 20.9872 69.9056 21.7502L59.7616 50.2972C59.4896 51.0642 58.6446 51.4662 57.8776 51.1942L40.4066 44.9862C40.0716 44.8782 39.7376 44.5852 39.5686 44.2292C39.3986 43.8742 39.3786 43.4732 39.5106 43.1012L40.1506 41.3002L38.0326 41.6742L37.7476 42.4752C37.4486 43.3172 37.4946 44.2262 37.8796 45.0332C38.2596 45.8322 38.9256 46.4382 39.7556 46.7402C39.7636 46.7432 39.7716 46.7462 39.7806 46.7492L57.2506 52.9572C58.9896 53.5742 60.9066 52.6622 61.5246 50.9232L71.6686 22.3772C72.2836 20.6462 71.3826 18.7382 69.6586 18.1112Z"
          fill={colors.darkTomato}
        />
      </g>
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="25"
        y="1"
        width="30"
        height="40"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 1H54.9695V40.3784H25V1Z"
          fill={colors.white}
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.8112 38.3572C33.4482 38.4192 33.0822 38.3402 32.7812 38.1282C32.4792 37.9172 32.2772 37.6012 32.2132 37.2382L27.0222 7.79525C26.9582 7.43325 27.0392 7.06725 27.2502 6.76525C27.4622 6.46325 27.7782 6.26225 28.1412 6.19825L46.1592 3.02125C46.2402 3.00725 46.3212 3.00125 46.4022 3.00125C46.6822 3.00125 46.9552 3.08625 47.1902 3.25025C47.4922 3.46125 47.6932 3.77725 47.7572 4.14025L52.9482 33.5822C53.0802 34.3312 52.5782 35.0472 51.8292 35.1802L33.8112 38.3572ZM54.9182 33.2342L49.7272 3.79325C49.5702 2.90425 49.0762 2.12925 48.3372 1.61225C47.5982 1.09425 46.7022 0.894249 45.8112 1.05225L27.7942 4.22825C26.9052 4.38525 26.1302 4.87825 25.6122 5.61825C25.0952 6.35725 24.8952 7.25325 25.0522 8.14325L30.2442 37.5863C30.4012 38.4743 30.8942 39.2492 31.6342 39.7662C32.2082 40.1692 32.8772 40.3783 33.5642 40.3783C33.7612 40.3783 33.9602 40.3612 34.1592 40.3262L52.1772 37.1493C54.0122 36.8262 55.2412 35.0692 54.9182 33.2342Z"
          fill={colors.darkTomato}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.0757 25.3477C42.3887 25.5637 42.5777 25.8577 42.6457 26.2297C42.7157 26.6147 42.6427 26.9647 42.4257 27.2767C42.2087 27.5887 41.9017 27.7817 41.5007 27.8547C41.1007 27.9267 40.7407 27.8557 40.4217 27.6407C40.1017 27.4257 39.9077 27.1247 39.8377 26.7387C39.7707 26.3677 39.8477 26.0247 40.0717 25.7117C40.2947 25.3977 40.6067 25.2047 41.0067 25.1317C41.4077 25.0597 41.7627 25.1307 42.0757 25.3477ZM42.9017 13.6737C43.9487 14.3537 44.5947 15.3737 44.8407 16.7307C45.0437 17.8457 44.8327 18.8427 44.2107 19.7237C43.5877 20.6047 42.6667 21.2217 41.4467 21.5757L41.7027 22.9907L39.6457 23.3637L39.0777 20.2347L40.3637 20.0007C41.1647 19.8557 41.7817 19.5147 42.2147 18.9787C42.6497 18.4427 42.8027 17.8237 42.6757 17.1237C42.5387 16.3667 42.1767 15.7937 41.5897 15.4057C41.0017 15.0177 40.3087 14.8957 39.5087 15.0417C38.6797 15.1917 38.0457 15.5807 37.6047 16.2057C37.1647 16.8327 36.9757 17.5977 37.0357 18.5017L34.8397 18.4797C34.6827 17.2087 35.0007 16.0517 35.7937 15.0067C36.5857 13.9627 37.7027 13.3097 39.1467 13.0477C40.6047 12.7837 41.8557 12.9917 42.9017 13.6737Z"
        fill={colors.darkTomato}
      />
      <g opacity="0.4">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.4887 33.4292C57.3627 33.7752 57.1727 34.0782 56.9387 34.3352C56.9127 34.6022 56.8687 34.8652 56.8047 35.1232C57.3157 34.7552 57.7267 34.2362 57.9587 33.6002C58.5347 32.0182 57.7897 30.2872 56.3027 29.5732L56.4127 30.1972C57.4517 30.8822 57.9327 32.2102 57.4887 33.4292Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.7575 27.3987C59.5645 28.4207 61.0165 31.5347 59.9955 34.3417C59.2175 36.4767 57.2295 37.8237 55.0875 37.8987C54.8835 38.0737 54.6675 38.2367 54.4375 38.3807C57.0225 38.5847 59.5365 37.0647 60.4655 34.5127C61.5805 31.4467 59.9945 28.0447 56.9285 26.9287C56.5505 26.7917 56.1685 26.6957 55.7855 26.6387L55.8785 27.1657C56.1735 27.2197 56.4665 27.2927 56.7575 27.3987Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.6698 24.8926C61.8588 26.4176 64.0258 31.0656 62.5018 35.2536C60.9768 39.4416 56.3298 41.6096 52.1398 40.0846C51.6538 39.9076 51.1968 39.6846 50.7678 39.4286L50.0488 39.5546C50.6348 39.9576 51.2718 40.3006 51.9698 40.5546C56.4178 42.1736 61.3528 39.8716 62.9718 35.4246C64.5898 30.9766 62.2888 26.0416 57.8408 24.4226C57.0048 24.1186 56.1508 23.9526 55.3058 23.9136L55.3958 24.4236C56.1548 24.4696 56.9198 24.6196 57.6698 24.8926Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.5829 22.3871C62.5329 23.8251 65.1209 27.3511 65.5739 31.2671L65.9219 30.3091C65.1809 26.5801 62.5809 23.3101 58.7539 21.9171C57.4599 21.4461 56.1369 21.2331 54.8359 21.2441L54.9249 21.7461C56.1399 21.7461 57.3749 21.9471 58.5829 22.3871Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.0571 43.0604C54.8841 44.4534 58.9771 43.6194 61.9421 41.2394L62.2911 40.2814C59.4271 42.9904 55.1781 44.0284 51.2281 42.5904C49.6841 42.0284 48.3491 41.1454 47.2671 40.0454L46.7051 40.1444C47.8741 41.4064 49.3311 42.4324 51.0571 43.0604Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.6641 19.4114C57.9141 18.7744 56.1211 18.5274 54.3691 18.6044L54.4571 19.1084C56.1251 19.0434 57.8281 19.2754 59.4931 19.8814C63.0341 21.1704 65.6911 23.8094 67.1241 27.0024L67.3621 26.3474C65.8341 23.2394 63.1681 20.6864 59.6641 19.4114Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.1463 45.5661C53.6503 46.8411 57.3333 46.5991 60.5013 45.2011L60.7403 44.5461C57.5903 46.0711 53.8583 46.3851 50.3173 45.0961C47.8013 44.1811 45.7513 42.5721 44.2543 40.5771L43.6953 40.6761C45.2593 42.8421 47.4503 44.5851 50.1463 45.5661Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.043 41.5494C42.01 43.0334 43.215 44.3674 44.632 45.4894L46.435 46.1454C44.344 44.8454 42.637 43.0984 41.365 41.0864L41.201 41.1154L41.043 41.5494Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.2012 41.1154L41.3652 41.0864C41.3332 41.0374 41.2952 40.9924 41.2642 40.9424L41.2012 41.1154Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.6172 48.3958L54.4192 49.0518C56.0892 49.0988 57.7382 48.8948 59.3172 48.4558L59.5332 47.8638C57.3292 48.5318 54.9742 48.7328 52.6172 48.3958Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.3463 19.6159L63.6113 18.9849C65.5283 20.2239 67.1233 21.8319 68.3333 23.6849L68.5483 23.0929C67.6593 21.7979 66.5863 20.6249 65.3463 19.6159Z"
          fill={colors.darkTomato}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.9193 16.5491L55.1833 15.9171C54.7543 15.9101 54.3263 15.9211 53.9023 15.9481L53.9953 16.4781C54.9623 16.4201 55.9383 16.4271 56.9193 16.5491Z"
          fill={colors.darkTomato}
        />
      </g>
    </svg>
  );
};

export default CrownIcon1;
