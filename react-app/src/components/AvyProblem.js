import React from "react";
import "../styles/AvyProblem.css";

const AvyProblem = ({
  aspect_elevation,
  onShapeClick,
  isInteractive = false,
  style = {},
}) => {
  return (
    <svg
      viewBox="0 0 238.24 295.4"
      id="AvyProblem"
      className={`avy-problem${
        isInteractive ? " avy-problem--interactive" : ""
      }`}
      style={style}
    >
      <title>AvyProblem</title>
      <g id="NW">
        <polygon
          id="NW-BT"
          points="95.55 54.82 95.19 54.82 58.88 90.36 58.88 91.05 31.65 79.77 83.84 26.83 95.55 54.82"
          className={`avy-problem__shape ${
            aspect_elevation["NW-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="NW-NT"
          points="107.27 82.82 88.31 103.24 58.88 91.05 58.88 90.36 95.19 54.82 95.55 54.82 107.27 82.82"
          className={`avy-problem__shape ${
            aspect_elevation["NW-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="NW-AT"
          points="121.58 117.02 88.31 103.24 107.27 82.82 121.58 117.02"
          className={`avy-problem__shape ${
            aspect_elevation["NW-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="W">
        <polygon
          id="W-BT"
          points="58.92 143.35 31.65 154.65 31.65 79.77 58.88 91.05 58.88 143.31 58.92 143.35"
          className={`avy-problem__shape ${
            aspect_elevation["W-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="W-NT"
          points="87.62 103.98 86.87 131.21 87.29 131.6 58.92 143.35 58.88 143.31 58.88 91.05 88.31 103.24 87.62 103.98"
          className={`avy-problem__shape ${
            aspect_elevation["W-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="W-AT"
          points="121.71 117.34 87.29 131.6 86.87 131.21 87.62 103.98 88.31 103.24 121.58 117.02 121.71 117.34"
          className={`avy-problem__shape ${
            aspect_elevation["W-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="SW">
        <polygon
          id="SW-BT"
          points="96.3 179.23 84.6 207.6 31.65 154.65 58.92 143.35 96.3 179.23"
          className={`avy-problem__shape ${
            aspect_elevation["SW-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="SW-NT"
          points="108.01 150.84 96.3 179.23 58.92 143.35 87.29 131.6 108.01 150.84"
          className={`avy-problem__shape ${
            aspect_elevation["SW-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="SW-AT"
          points="121.77 117.48 108.01 150.84 87.29 131.6 121.71 117.34 121.77 117.48"
          className={`avy-problem__shape ${
            aspect_elevation["SW-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="S">
        <polygon
          id="S-BT"
          points="159.48 207.6 84.6 207.6 96.3 179.23 96.7 179.61 148.13 181.12 148.32 180.92 159.48 207.6"
          className={`avy-problem__shape ${
            aspect_elevation["S-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="S-NT"
          points="148.32 180.92 148.13 181.12 96.7 179.61 96.3 179.23 108.01 150.84 108.05 150.87 135.27 151.63 135.82 151.06 148.32 180.92"
          className={`avy-problem__shape ${
            aspect_elevation["S-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="S-AT"
          points="135.82 151.06 135.27 151.63 108.05 150.87 108.01 150.84 121.77 117.48 135.82 151.06"
          className={`avy-problem__shape ${
            aspect_elevation["S-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="SE">
        <polygon
          id="SE-BT"
          points="212.42 154.65 159.48 207.6 148.32 180.92 184.44 143.31 184.43 143.06 212.42 154.65"
          className={`avy-problem__shape ${
            aspect_elevation["SE-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="SE-NT"
          points="184.44 143.31 148.32 180.92 135.82 151.06 154.94 131.21 154.95 130.84 184.43 143.06 184.44 143.31"
          className={`avy-problem__shape ${
            aspect_elevation["SE-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="SE-AT"
          points="154.95 130.84 154.94 131.21 135.82 151.06 121.77 117.48 121.85 117.29 121.85 117.28 122.04 117.21 154.95 130.84"
          className={`avy-problem__shape ${
            aspect_elevation["SE-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="E">
        <polygon
          id="E-BT"
          points="212.42 79.77 212.42 154.65 184.43 143.06 182.95 91.98 212.42 79.77"
          className={`avy-problem__shape ${
            aspect_elevation["E-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="E-NT"
          points="154.95 130.84 155.69 103.98 155.21 103.47 182.95 91.98 184.43 143.06 154.95 130.84"
          className={`avy-problem__shape ${
            aspect_elevation["E-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="E-AT"
          points="155.69 103.98 154.95 130.84 122.04 117.21 155.21 103.47 155.69 103.98"
          className={`avy-problem__shape ${
            aspect_elevation["E-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="NE">
        <polygon
          id="NE-BT"
          points="212.42 79.77 182.95 91.98 182.92 91.12 148.13 54.82 147.62 54.82 159.48 26.07 212.42 79.77"
          className={`avy-problem__shape ${
            aspect_elevation["NE-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="NE-NT"
          points="182.95 91.98 155.21 103.47 136.06 82.84 147.62 54.82 148.13 54.82 182.92 91.12 182.95 91.98"
          className={`avy-problem__shape ${
            aspect_elevation["NE-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="NE-AT"
          points="155.21 103.47 122.04 117.21 121.91 117.16 136.06 82.84 155.21 103.47"
          className={`avy-problem__shape ${
            aspect_elevation["NE-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="N">
        <polygon
          id="N-BT"
          points="159.48 26.07 147.62 54.82 95.55 54.82 83.84 26.83 159.48 26.07"
          className={`avy-problem__shape ${
            aspect_elevation["N-BT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="N-NT"
          points="147.62 54.82 136.06 82.84 136.03 82.8 107.29 82.8 107.27 82.82 95.55 54.82 147.62 54.82"
          className={`avy-problem__shape ${
            aspect_elevation["N-NT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
        <polygon
          id="N-AT"
          points="136.06 82.84 121.91 117.16 121.58 117.02 107.27 82.82 107.29 82.8 136.03 82.8 136.06 82.84"
          className={`avy-problem__shape ${
            aspect_elevation["N-AT"] ? " avy-problem__shape--filled" : ""
          }`}
          onClick={onShapeClick}
        />
      </g>
      <g id="Labels">
        <path
          d="M160,307.2l2.19,8.19,2.69-8.19h2.63l2.69,8.19,2.18-8.19h3.45L172,319.88h-3.37l-2.49-7.35-2.49,7.35h-3.36l-3.78-12.68Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M178.1,391a3.94,3.94,0,0,0-1.07-.65,2.89,2.89,0,0,0-1.05-.21,1.71,1.71,0,0,0-1,.3,1,1,0,0,0-.4.79.82.82,0,0,0,.2.56,1.68,1.68,0,0,0,.53.38,5.22,5.22,0,0,0,.74.28c.27.07.55.16.82.25a5.12,5.12,0,0,1,2.36,1.44,3.53,3.53,0,0,1,.75,2.34,4.58,4.58,0,0,1-.33,1.77,3.62,3.62,0,0,1-1,1.35,4.42,4.42,0,0,1-1.55.88,6.62,6.62,0,0,1-2.07.31,7.66,7.66,0,0,1-4.46-1.43l1.41-2.66a5.84,5.84,0,0,0,1.46,1,3.6,3.6,0,0,0,1.43.32,1.77,1.77,0,0,0,1.21-.37,1.14,1.14,0,0,0,.39-.84,1.09,1.09,0,0,0-.1-.5,1.19,1.19,0,0,0-.33-.39,3.21,3.21,0,0,0-.62-.33c-.25-.1-.56-.21-.92-.33s-.84-.29-1.25-.45a3.84,3.84,0,0,1-1.09-.65,2.94,2.94,0,0,1-.78-1,3.71,3.71,0,0,1-.29-1.56,4.45,4.45,0,0,1,.31-1.71,3.83,3.83,0,0,1,.88-1.31,3.88,3.88,0,0,1,1.37-.85,5.32,5.32,0,0,1,1.83-.3,8.21,8.21,0,0,1,2,.26,8.48,8.48,0,0,1,2,.77Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M184.14,387.78l2.19,8.19,2.69-8.19h2.62l2.69,8.19,2.19-8.19H200l-3.78,12.69h-3.37l-2.49-7.36-2.49,7.36h-3.36l-3.79-12.69Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M281.53,420.82a3.88,3.88,0,0,0-1.08-.65,2.88,2.88,0,0,0-1-.21,1.67,1.67,0,0,0-1,.3,1,1,0,0,0-.41.79.82.82,0,0,0,.2.56,2,2,0,0,0,.53.38,5.76,5.76,0,0,0,.74.27l.82.25a5.07,5.07,0,0,1,2.36,1.44,3.54,3.54,0,0,1,.75,2.35,4.58,4.58,0,0,1-.33,1.77,3.79,3.79,0,0,1-1,1.35,4.21,4.21,0,0,1-1.54.87,6.4,6.4,0,0,1-2.08.32,7.68,7.68,0,0,1-4.46-1.43l1.41-2.66a5.73,5.73,0,0,0,1.47,1,3.41,3.41,0,0,0,1.43.32,1.68,1.68,0,0,0,1.2-.37,1.12,1.12,0,0,0,.4-.84,1.07,1.07,0,0,0-.11-.49,1,1,0,0,0-.33-.39,2.54,2.54,0,0,0-.62-.33l-.91-.34c-.43-.13-.85-.28-1.26-.44a4,4,0,0,1-1.09-.65,2.93,2.93,0,0,1-.77-1,3.51,3.51,0,0,1-.3-1.55,4.65,4.65,0,0,1,.31-1.71,3.77,3.77,0,0,1,2.26-2.16,5.22,5.22,0,0,1,1.82-.3,7.68,7.68,0,0,1,2,.26,8.73,8.73,0,0,1,2,.76Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M361.24,391.26a3.88,3.88,0,0,0-1.08-.65,2.88,2.88,0,0,0-1-.21,1.72,1.72,0,0,0-1.05.3.94.94,0,0,0-.4.79.82.82,0,0,0,.2.56,1.78,1.78,0,0,0,.53.37,4.56,4.56,0,0,0,.74.28l.82.25a5.12,5.12,0,0,1,2.36,1.44,3.54,3.54,0,0,1,.75,2.35,4.49,4.49,0,0,1-.33,1.76,3.74,3.74,0,0,1-1,1.36,4.32,4.32,0,0,1-1.55.87,6.34,6.34,0,0,1-2.07.31,7.59,7.59,0,0,1-4.46-1.43l1.41-2.65a5.82,5.82,0,0,0,1.47,1,3.37,3.37,0,0,0,1.43.32,1.71,1.71,0,0,0,1.2-.37,1.11,1.11,0,0,0,.39-.84,1,1,0,0,0-.43-.88,2.74,2.74,0,0,0-.62-.33l-.91-.34c-.43-.13-.85-.28-1.26-.44a3.84,3.84,0,0,1-1.09-.65,2.93,2.93,0,0,1-.77-1,3.51,3.51,0,0,1-.3-1.55,4.45,4.45,0,0,1,.31-1.71,3.77,3.77,0,0,1,2.26-2.16,5.22,5.22,0,0,1,1.82-.3,7.74,7.74,0,0,1,2,.26,8.92,8.92,0,0,1,2,.76Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M372.35,390.8h-3.92v2.12h3.7v2.79h-3.7v2.19h3.92v2.79h-7.21V388h7.21Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M394.74,310.92h-3.92V313h3.71v2.79h-3.71V318h3.92v2.79h-7.21V308.13h7.21Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M352.93,242.3V229.62h3.3l6.09,7.75v-7.75h3.28V242.3h-3.28l-6.09-7.75v7.75Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M375.47,232.41h-3.92v2.12h3.7v2.79h-3.7v2.19h3.92v2.79h-7.22V229.62h7.22Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M271.85,211.07V198.39h3.3l6.09,7.75v-7.75h3.28v12.68h-3.28l-6.09-7.75v7.75Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M172.44,241.45V228.77h3.3l6.09,7.75v-7.75h3.27v12.68h-3.27l-6.09-7.76v7.76Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M189.88,228.77l2.19,8.19,2.69-8.19h2.62l2.7,8.19,2.18-8.19h3.45l-3.79,12.68h-3.36l-2.49-7.35-2.49,7.35h-3.36l-3.79-12.68Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M279.61,448.41H275.3l-1.12,2.44h-1.64l5-10.69,4.8,10.69h-1.66ZM279,447l-1.5-3.42L275.93,447Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M285,439.84v5.4a2.68,2.68,0,0,1,2-.91,2.74,2.74,0,0,1,2.14,1,3.4,3.4,0,0,1,.85,2.37,3.45,3.45,0,0,1-.86,2.42,2.82,2.82,0,0,1-4.12.11v.66h-1.47v-11Zm3.49,7.88a2.17,2.17,0,0,0-.5-1.48,1.58,1.58,0,0,0-1.26-.59,1.65,1.65,0,0,0-1.31.57,2.08,2.08,0,0,0-.51,1.46,2.16,2.16,0,0,0,.5,1.48,1.75,1.75,0,0,0,2.57,0A2.1,2.1,0,0,0,288.45,447.72Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M291.2,447.63a3.13,3.13,0,0,1,1-2.34,3.48,3.48,0,0,1,4.81,0,3.39,3.39,0,0,1,0,4.78,3.39,3.39,0,0,1-2.43.95,3.22,3.22,0,0,1-2.39-1A3.31,3.31,0,0,1,291.2,447.63Zm1.5,0a2.13,2.13,0,0,0,.5,1.5,2,2,0,0,0,2.75,0,2.37,2.37,0,0,0,0-3,1.94,1.94,0,0,0-2.73,0A2,2,0,0,0,292.7,447.66Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M300,444.5l1.64,3.57,1.64-3.57H305l-3.3,6.79-3.27-6.79Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M311.51,448H307a2,2,0,0,0,.51,1.25,1.58,1.58,0,0,0,1.16.45,1.45,1.45,0,0,0,.9-.26,3.5,3.5,0,0,0,.8-1l1.24.69a5.18,5.18,0,0,1-.6.84,3.32,3.32,0,0,1-.69.57,2.64,2.64,0,0,1-.79.33,3.82,3.82,0,0,1-.92.1,3,3,0,0,1-2.28-.91,3.43,3.43,0,0,1-.86-2.44,3.49,3.49,0,0,1,.84-2.43,3.18,3.18,0,0,1,4.44,0,3.51,3.51,0,0,1,.81,2.46Zm-1.5-1.2a1.41,1.41,0,0,0-1.48-1.17,1.59,1.59,0,0,0-.5.08,1.4,1.4,0,0,0-.43.24,1.42,1.42,0,0,0-.33.36,2,2,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M320.29,442.21v8.64h-1.51v-8.64h-2.32v-1.42h6.14v1.42Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M323.22,444.5h1.47v.57a2.75,2.75,0,0,1,.72-.58,1.6,1.6,0,0,1,.75-.16,2.28,2.28,0,0,1,1.21.38l-.67,1.34a1.4,1.4,0,0,0-.81-.3c-.8,0-1.2.6-1.2,1.81v3.29h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M333.9,448h-4.55a2,2,0,0,0,.51,1.25,1.58,1.58,0,0,0,1.16.45,1.45,1.45,0,0,0,.9-.26,3.5,3.5,0,0,0,.8-1l1.24.69a5.18,5.18,0,0,1-.6.84,3.32,3.32,0,0,1-.69.57,2.64,2.64,0,0,1-.79.33,3.82,3.82,0,0,1-.92.1,3,3,0,0,1-2.28-.91,3.43,3.43,0,0,1-.86-2.44,3.49,3.49,0,0,1,.84-2.43,3.18,3.18,0,0,1,4.44,0,3.51,3.51,0,0,1,.81,2.46Zm-1.5-1.2a1.41,1.41,0,0,0-1.48-1.17,1.59,1.59,0,0,0-.5.08,1.4,1.4,0,0,0-.43.24,1.42,1.42,0,0,0-.33.36,2,2,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M341.29,448h-4.55a2,2,0,0,0,.51,1.25,1.55,1.55,0,0,0,1.15.45,1.46,1.46,0,0,0,.91-.26,3.69,3.69,0,0,0,.8-1l1.24.69a4.66,4.66,0,0,1-.61.84,3.27,3.27,0,0,1-.68.57,2.88,2.88,0,0,1-.79.33,3.82,3.82,0,0,1-.92.1,3,3,0,0,1-2.28-.91,3.38,3.38,0,0,1-.86-2.44,3.53,3.53,0,0,1,.83-2.43,3.19,3.19,0,0,1,4.45,0,3.51,3.51,0,0,1,.81,2.46Zm-1.51-1.2a1.4,1.4,0,0,0-1.48-1.17,1.69,1.69,0,0,0-.5.08,1.35,1.35,0,0,0-.42.24,1.42,1.42,0,0,0-.33.36,1.65,1.65,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M344.36,439.84v11h-1.47v-11Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M346,441.86a1,1,0,0,1,.95-.94.93.93,0,0,1,.68.28.91.91,0,0,1,.28.67,1,1,0,0,1-.28.68,1,1,0,0,1-.68.28,1,1,0,0,1-.95-1Zm1.68,2.64v6.35h-1.46V444.5Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M349.54,444.5H351v.59a2.43,2.43,0,0,1,1.74-.76,2.22,2.22,0,0,1,1.73.69A2.92,2.92,0,0,1,355,447v3.89h-1.47v-3.54a2.36,2.36,0,0,0-.26-1.3,1.07,1.07,0,0,0-.93-.37,1.13,1.13,0,0,0-1,.49,3.41,3.41,0,0,0-.3,1.66v3.06h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M362.64,448h-4.55a2,2,0,0,0,.51,1.25,1.58,1.58,0,0,0,1.16.45,1.45,1.45,0,0,0,.9-.26,3.5,3.5,0,0,0,.8-1l1.24.69a5.18,5.18,0,0,1-.6.84,3.32,3.32,0,0,1-.69.57,2.64,2.64,0,0,1-.79.33,3.82,3.82,0,0,1-.92.1,3,3,0,0,1-2.28-.91,3.43,3.43,0,0,1-.86-2.44,3.49,3.49,0,0,1,.84-2.43,3.18,3.18,0,0,1,4.44,0,3.51,3.51,0,0,1,.81,2.46Zm-1.5-1.2a1.41,1.41,0,0,0-1.48-1.17,1.59,1.59,0,0,0-.5.08,1.4,1.4,0,0,0-.43.24,1.42,1.42,0,0,0-.33.36,2,2,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M260.69,473.62V462.87l7.34,7.68v-7h1.52v10.68l-7.34-7.66v7.05Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M277.61,470.79h-4.55a1.93,1.93,0,0,0,.51,1.24,1.69,1.69,0,0,0,2.06.2,4,4,0,0,0,.8-1l1.24.69a4.33,4.33,0,0,1-.61.84,3.33,3.33,0,0,1-.68.58,2.73,2.73,0,0,1-.79.32,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.91,3.46,3.46,0,0,1-.86-2.44,3.54,3.54,0,0,1,.83-2.44,2.9,2.9,0,0,1,2.23-.92,2.86,2.86,0,0,1,2.22.89,3.53,3.53,0,0,1,.81,2.46Zm-1.51-1.2a1.39,1.39,0,0,0-1.47-1.17,1.44,1.44,0,0,0-.51.08,1.32,1.32,0,0,0-.42.23,1.46,1.46,0,0,0-.33.37,1.81,1.81,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M283.89,467.27h1.48v6.35h-1.48V473a2.78,2.78,0,0,1-1.94.85,2.82,2.82,0,0,1-2.18-.95,3.56,3.56,0,0,1-.86-2.43,3.45,3.45,0,0,1,.86-2.38,2.77,2.77,0,0,1,2.14-1,2.7,2.7,0,0,1,2,.91Zm-3.48,3.15a2.25,2.25,0,0,0,.49,1.49,1.64,1.64,0,0,0,1.27.58,1.68,1.68,0,0,0,1.31-.56,2.39,2.39,0,0,0,0-2.95,1.64,1.64,0,0,0-1.3-.56,1.61,1.61,0,0,0-1.26.57A2.09,2.09,0,0,0,280.41,470.42Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M287.22,467.27h1.47v.56a2.78,2.78,0,0,1,.71-.58,1.81,1.81,0,0,1,.76-.16,2.4,2.4,0,0,1,1.21.38l-.67,1.34a1.41,1.41,0,0,0-.82-.3c-.8,0-1.19.61-1.19,1.81v3.3h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M299.39,465v8.64h-1.52V465h-2.31v-1.43h6.14V465Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M302.31,467.27h1.47v.56a3,3,0,0,1,.72-.58,1.73,1.73,0,0,1,.75-.16,2.4,2.4,0,0,1,1.22.38l-.67,1.34a1.41,1.41,0,0,0-.82-.3c-.8,0-1.2.61-1.2,1.81v3.3h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M313,470.79h-4.55A1.93,1.93,0,0,0,309,472a1.69,1.69,0,0,0,2.06.2,4,4,0,0,0,.8-1l1.24.69a4.33,4.33,0,0,1-.61.84,3.33,3.33,0,0,1-.68.58,2.85,2.85,0,0,1-.79.32,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.91,3.42,3.42,0,0,1-.86-2.44,3.54,3.54,0,0,1,.83-2.44,3.19,3.19,0,0,1,4.45,0,3.53,3.53,0,0,1,.81,2.46Zm-1.51-1.2a1.4,1.4,0,0,0-1.48-1.17,1.42,1.42,0,0,0-.5.08,1.49,1.49,0,0,0-.43.23,1.64,1.64,0,0,0-.32.37,1.55,1.55,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M320.38,470.79h-4.55a1.93,1.93,0,0,0,.51,1.24,1.54,1.54,0,0,0,1.16.46,1.52,1.52,0,0,0,.9-.26,3.75,3.75,0,0,0,.8-1l1.24.69a4.78,4.78,0,0,1-.6.84,3.38,3.38,0,0,1-.69.58,2.62,2.62,0,0,1-.79.32,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.91,3.93,3.93,0,0,1,0-4.88,3.18,3.18,0,0,1,4.44,0,3.53,3.53,0,0,1,.81,2.46Zm-1.5-1.2a1.41,1.41,0,0,0-1.48-1.17,1.35,1.35,0,0,0-.5.08,1.37,1.37,0,0,0-.43.23,1.46,1.46,0,0,0-.33.37,1.81,1.81,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M323.46,462.61v11H322v-11Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M325.09,464.63a.91.91,0,0,1,.28-.67,1,1,0,0,1,1.35,0,1,1,0,0,1,0,1.35.89.89,0,0,1-.67.28,1,1,0,0,1-1-1Zm1.69,2.64v6.35h-1.47v-6.35Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M328.64,467.27h1.47v.58a2.43,2.43,0,0,1,1.73-.76,2.17,2.17,0,0,1,1.73.7,2.82,2.82,0,0,1,.54,1.93v3.9h-1.48v-3.55a2.36,2.36,0,0,0-.26-1.3,1.06,1.06,0,0,0-.92-.36,1.13,1.13,0,0,0-1,.48,3.32,3.32,0,0,0-.3,1.66v3.07h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M341.74,470.79h-4.55a1.93,1.93,0,0,0,.51,1.24,1.69,1.69,0,0,0,2.06.2,4,4,0,0,0,.8-1l1.24.69a4.8,4.8,0,0,1-.61.84,3.33,3.33,0,0,1-.68.58,2.85,2.85,0,0,1-.79.32,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.91,3.42,3.42,0,0,1-.86-2.44,3.49,3.49,0,0,1,.83-2.44,3.19,3.19,0,0,1,4.45,0,3.53,3.53,0,0,1,.81,2.46Zm-1.51-1.2a1.4,1.4,0,0,0-1.48-1.17,1.42,1.42,0,0,0-.5.08,1.37,1.37,0,0,0-.43.23,1.64,1.64,0,0,0-.32.37,1.35,1.35,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M238,493.31V483.25h1.51a6.29,6.29,0,0,1,1.61.16,2.45,2.45,0,0,1,1,.52,3,3,0,0,1,.92,2.14,2.35,2.35,0,0,1-.83,1.83,2.43,2.43,0,0,1,1.27,1,2.75,2.75,0,0,1,.47,1.58,2.69,2.69,0,0,1-.84,2,2.76,2.76,0,0,1-1.12.69,6.44,6.44,0,0,1-1.72.19Zm1.52-5.74H240a1.77,1.77,0,0,0,1.24-.37,1.47,1.47,0,0,0,.39-1.11,1.4,1.4,0,0,0-.4-1.08,1.72,1.72,0,0,0-1.18-.37h-.53Zm0,4.32h.94a2.33,2.33,0,0,0,1.51-.41,1.46,1.46,0,0,0,0-2.2,2.53,2.53,0,0,0-1.7-.44h-.77Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M251.41,490.48h-4.55a1.92,1.92,0,0,0,.5,1.25,1.58,1.58,0,0,0,1.16.46,1.44,1.44,0,0,0,.9-.27,3.5,3.5,0,0,0,.81-1l1.23.69a4.78,4.78,0,0,1-.6.84,3.08,3.08,0,0,1-.69.57,2.64,2.64,0,0,1-.79.33,3.72,3.72,0,0,1-.91.11,3,3,0,0,1-2.29-.92,3.42,3.42,0,0,1-.86-2.43,3.5,3.5,0,0,1,.84-2.44,3.18,3.18,0,0,1,4.44,0,3.51,3.51,0,0,1,.81,2.46Zm-1.51-1.19a1.4,1.4,0,0,0-1.48-1.18,1.59,1.59,0,0,0-.5.08,1.64,1.64,0,0,0-.43.24,1.31,1.31,0,0,0-.33.37,1.69,1.69,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M254.48,482.3v11H253v-11Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M256,490.09a3.17,3.17,0,0,1,1-2.34,3.48,3.48,0,0,1,4.81,0,3.39,3.39,0,0,1,0,4.78,3.36,3.36,0,0,1-2.43,1,3.23,3.23,0,0,1-2.39-1A3.26,3.26,0,0,1,256,490.09Zm1.5,0a2.11,2.11,0,0,0,.51,1.5,2,2,0,0,0,2.75,0,2.37,2.37,0,0,0,0-3,2,2,0,0,0-2.74,0A2.09,2.09,0,0,0,257.53,490.12Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M264.9,487l1.66,3.63,1.79-4.21,1.81,4.21L271.8,487h1.64l-3.32,6.83-1.77-4.09-1.78,4.09L263.25,487Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M281.61,484.68v8.63h-1.52v-8.63h-2.31v-1.43h6.14v1.43Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M284.54,487H286v.57a3,3,0,0,1,.72-.58,1.64,1.64,0,0,1,.76-.16,2.4,2.4,0,0,1,1.21.38l-.67,1.34a1.41,1.41,0,0,0-.82-.3c-.8,0-1.2.6-1.2,1.81v3.29h-1.46Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M295.22,490.48h-4.55a1.93,1.93,0,0,0,.51,1.25,1.56,1.56,0,0,0,1.15.46,1.47,1.47,0,0,0,.91-.27,3.69,3.69,0,0,0,.8-1l1.24.69a4.33,4.33,0,0,1-.61.84,3.27,3.27,0,0,1-.68.57,2.75,2.75,0,0,1-.79.33,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.92,3.42,3.42,0,0,1-.86-2.43,3.54,3.54,0,0,1,.83-2.44,3.19,3.19,0,0,1,4.45,0,3.51,3.51,0,0,1,.81,2.46Zm-1.5-1.19a1.41,1.41,0,0,0-1.48-1.18,1.7,1.7,0,0,0-.51.08,1.76,1.76,0,0,0-.42.24,1.31,1.31,0,0,0-.33.37,1.69,1.69,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M302.61,490.48h-4.55a1.93,1.93,0,0,0,.51,1.25,1.56,1.56,0,0,0,1.15.46,1.44,1.44,0,0,0,.9-.27,3.5,3.5,0,0,0,.81-1l1.24.69a5.37,5.37,0,0,1-.61.84,3.27,3.27,0,0,1-.68.57,2.88,2.88,0,0,1-.79.33,3.87,3.87,0,0,1-.92.11,3,3,0,0,1-2.28-.92,3.38,3.38,0,0,1-.86-2.43,3.49,3.49,0,0,1,.83-2.44,2.85,2.85,0,0,1,2.23-.92,2.89,2.89,0,0,1,2.22.89,3.55,3.55,0,0,1,.8,2.46Zm-1.51-1.19a1.4,1.4,0,0,0-1.48-1.18,1.43,1.43,0,0,0-.93.32,1.31,1.31,0,0,0-.33.37,1.69,1.69,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M305.68,482.3v11h-1.47v-11Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M307.31,484.33a1,1,0,0,1,.28-.67,1,1,0,0,1,1.35,0,.89.89,0,0,1,.28.67.91.91,0,0,1-.28.68.88.88,0,0,1-.67.28.93.93,0,0,1-.68-.28A1,1,0,0,1,307.31,484.33ZM309,487v6.35h-1.46V487Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M310.86,487h1.47v.59a2.39,2.39,0,0,1,1.74-.76,2.17,2.17,0,0,1,1.72.7,2.82,2.82,0,0,1,.54,1.93v3.89h-1.48v-3.54a2.28,2.28,0,0,0-.26-1.3,1,1,0,0,0-.92-.36,1.14,1.14,0,0,0-1,.48,3.32,3.32,0,0,0-.3,1.66v3.06h-1.47Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M324,490.48h-4.55a1.93,1.93,0,0,0,.51,1.25,1.56,1.56,0,0,0,1.15.46,1.47,1.47,0,0,0,.91-.27,3.69,3.69,0,0,0,.8-1l1.24.69a4.33,4.33,0,0,1-.61.84,3.27,3.27,0,0,1-.68.57,2.75,2.75,0,0,1-.79.33,3.8,3.8,0,0,1-.92.11,3,3,0,0,1-2.28-.92,3.42,3.42,0,0,1-.86-2.43,3.54,3.54,0,0,1,.83-2.44,3.19,3.19,0,0,1,4.45,0,3.51,3.51,0,0,1,.81,2.46Zm-1.5-1.19a1.41,1.41,0,0,0-1.48-1.18,1.7,1.7,0,0,0-.51.08,1.58,1.58,0,0,0-.42.24,1.31,1.31,0,0,0-.33.37,1.69,1.69,0,0,0-.21.49Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M226.64,369.11a2.48,2.48,0,0,1-1.9,2.41V486.4h-1V371.56a2.49,2.49,0,1,1,2.9-2.45Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M246.85,350.33a2.49,2.49,0,0,1-1.76,2.38V469.36h-1V352.81a2.49,2.49,0,1,1,2.76-2.48Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
        <path
          d="M263.89,333a2.49,2.49,0,0,1-2.28,2.48V447.1h-1V335.37a2.49,2.49,0,1,1,3.28-2.36Z"
          transform="translate(-156.51 -198.39)"
          className="avy-problem__label"
        />
      </g>
    </svg>
  );
};

export default AvyProblem;
