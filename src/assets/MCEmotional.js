import React from "react";

import { colors } from "../vars/globalVars";


const MCEmotional = () => {
  return (
    <svg width={50} height={62} xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="a" d="M0 .367h43.819V58H0z" />
        <path id="c" d="M.662.425h35.157V58H.662z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M29.345 33.859a8.925 8.925 0 0 1-5.743 3.78c-4.864.938-9.583-2.265-10.517-7.131a8.924 8.924 0 0 1 1.388-6.734 8.93 8.93 0 0 1 5.744-3.781 8.913 8.913 0 0 1 6.734 1.387 8.922 8.922 0 0 1 3.782 5.744 8.921 8.921 0 0 1-1.388 6.735m-1.254-14.16a10.923 10.923 0 0 0-8.257-1.7c-2.889.553-5.39 2.2-7.042 4.635a10.945 10.945 0 0 0-1.7 8.257c1.01 5.268 5.637 8.942 10.814 8.942.685 0 1.38-.065 2.08-.2 2.888-.552 5.39-2.2 7.041-4.634a10.947 10.947 0 0 0 1.7-8.258 10.934 10.934 0 0 0-4.636-7.041"
          fill={colors.darkTomato}
        />
        <path
          d="M18.185 29.115a2.23 2.23 0 0 0 1.81-2.584l-4.394.775a2.23 2.23 0 0 0 2.584 1.81M22.927 26.015a2.23 2.23 0 0 0 4.393-.776l-4.393.776zM26.385 32.634a5.586 5.586 0 0 0-4.027-.74 5.604 5.604 0 0 0-3.349 2.042 1 1 0 1 0 1.574 1.234 3.607 3.607 0 0 1 2.155-1.314 3.608 3.608 0 0 1 2.59.477 1.001 1.001 0 0 0 1.057-1.699M16.192 29.467s-1.364 1.837-1.126 3.184a1.662 1.662 0 1 0 3.274-.577c-.2-1.133-2.148-2.607-2.148-2.607"
          fill={colors.darkTomato}
        />
        <g transform="translate(0 -.367)">
          <mask id="b" fill={colors.white}>
            <use xlinkHref="#a" />
          </mask>
          <path
            d="M41.37 49.982a2.51 2.51 0 0 1-1.625 1.053h-.002l-26.71 4.922a2.511 2.511 0 0 1-1.894-.406 2.515 2.515 0 0 1-1.054-1.627L2.042 10.28A2.535 2.535 0 0 1 4.075 7.33l26.711-4.92a2.535 2.535 0 0 1 2.949 2.031l8.041 43.645a2.519 2.519 0 0 1-.404 1.896m2.371-2.259l-8.04-43.646a4.539 4.539 0 0 0-5.28-3.635L3.712 5.363a4.538 4.538 0 0 0-3.637 5.28l8.043 43.645a4.506 4.506 0 0 0 1.886 2.911 4.506 4.506 0 0 0 3.392.724l26.71-4.92a4.497 4.497 0 0 0 2.911-1.887 4.498 4.498 0 0 0 .725-3.393"
            fill={colors.darkTomato}
            mask="url(#b)"
          />
        </g>
        <g transform="translate(14 3.633)">
          <mask id="d" fill={colors.white}>
            <use xlinkHref="#c" />
          </mask>
          <path
            d="M35.743 47.724L27.702 4.078c-.367-1.99-2-3.412-3.903-3.653l.394 2.136c.773.316 1.38.999 1.542 1.88l8.04 43.646a2.52 2.52 0 0 1-.404 1.896c-.383.556-.961.93-1.627 1.053l-26.711 4.92a2.512 2.512 0 0 1-1.894-.404c-.101-.07-.188-.152-.277-.233l-2.2.406A4.491 4.491 0 0 0 2.004 57.2a4.505 4.505 0 0 0 3.392.724l26.71-4.922a4.492 4.492 0 0 0 2.912-1.885 4.5 4.5 0 0 0 .725-3.393"
            fill={colors.darkTomato}
            mask="url(#d)"
          />
        </g>
        <g opacity={0.4} fill={colors.darkTomato}>
          <path d="M40.066 21.884a16.256 16.256 0 0 1 1.571 2.035l-.21-1.15A16.842 16.842 0 0 0 39.902 21l.163.885zM44.118 37.383l-.215-1.168c-.18.846-.433 1.67-.742 2.47l.166.897c.312-.71.577-1.446.791-2.199M39.262 17.517c.485.36.957.74 1.407 1.143l-.148-.807a20.145 20.145 0 0 0-1.393-1.062l.134.726zM44.102 43.79c.327-.483.639-.977.922-1.487l-.149-.812c-.276.539-.583 1.06-.907 1.569l.134.73zM38.584 13.84c.455.256.91.515 1.345.803l-.126-.684a22.915 22.915 0 0 0-1.337-.763l.118.643zM44.726 47.176c.014.075.008.149.019.224.342-.395.682-.791.996-1.21l-.124-.673c-.304.424-.637.826-.971 1.227l.08.432zM46.269 49.057c-.823.933-1.74 1.782-2.7 2.583a24.345 24.345 0 0 1-2.28 1.691c-.945.62-1.921 1.2-2.96 1.687l1.709-.315a24.971 24.971 0 0 0 6.345-5.025l-.114-.621zM39.16 10.471c-.426-.215-.866-.404-1.305-.594l.108.586c.444.201.883.41 1.314.636l-.116-.628zM21.715 57.041c.874.224 1.757.42 2.66.548l1.695-.312a24.346 24.346 0 0 1-3.157-.457l-1.198.221z" />
        </g>
      </g>
    </svg>
  );
};

export default MCEmotional;