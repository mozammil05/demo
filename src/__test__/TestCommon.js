import configureStore from "redux-mock-store";
import { act, render } from "@testing-library/react";

export const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export const Render = (component) => {
  act(() => {
    return render(component);
  });
};

export const initialState = {
  walletAddress: "",
  walletType: "",
  tokenOne: "",
  tokenTwo: "",
  tokenList: "",
  timeList: "",
  userSelectedTime: "",
  orderExpiredDays: "7 Days",
  showLoader: "false",
  poolDetails: "",
  gasPrice: "",
  slippage: "0.1",
  deadline: "",
  theme: "light",
  user: {
    walletAddress: "0x115aec7440be99f71e1c9a72879412b7ffc3ea05",
    walletType: "metamask",
    tokenOne: {
      name: "LIBX",
      symbol: "LIBX",
      address: "0x532997ACEd1D85D54BDd05696F45B7a1Ba7df9Ec",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
        },
      ],
      img: "data:image/png;base64,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",
      isSelected: true,
      isNative: false,
      id: "libfx",
    },
    tokenTwo: {
      name: "GTH",
      symbol: "GTH",
      address: "0xc3d8c078f5EfB7f83c3998B8D964121519071c73",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
      ],
      img: "data:image/png;base64,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",
      isSelected: true,
      isNative: false,
      id: "gth",
    },
    tokenList: [
      {
        name: "LIBX",
        symbol: "LIBX",
        address: "0x532997ACEd1D85D54BDd05696F45B7a1Ba7df9Ec",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "data:image/png;base64,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",
        isSelected: true,
        isNative: false,
        id: "libfx",
      },
      {
        name: "GTH",
        symbol: "GTH",
        address: "0xc3d8c078f5EfB7f83c3998B8D964121519071c73",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "data:image/png;base64,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",
        isSelected: true,
        isNative: false,
        id: "gth",
      },
      {
        name: "BALD",
        symbol: "BALD",
        address: "0xbD2e6cfF438E9184Ebf9A42728ea3e9b769F3a80",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE0QTEwODM4MUI0MTFFREFBM0I5ODJERkIwMDA1NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE0QTEwODQ4MUI0MTFFREFBM0I5ODJERkIwMDA1NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTRBMTA4MTgxQjQxMUVEQUEzQjk4MkRGQjAwMDU2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTRBMTA4MjgxQjQxMUVEQUEzQjk4MkRGQjAwMDU2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvexNC0AABgVSURBVHja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",
        isSelected: false,
        isNative: false,
        id: "bald",
      },
      {
        name: "WETH",
        symbol: "WGTH",
        address: "0x829d08D75595917980C548fe07CDE0861686128A",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "https: //img.favpng.com/24/4/6/security-token-image-clip-art-logo-portable-network-graphics-png-favpng-7sdydeqdfpj70G9FiqjfScf2e.jpg",
        isSelected: false,
        isNative: true,
        id: "gather",
      },
      {
        name: "TTK",
        symbol: "MTK",
        address: "0x09d452ebe260Cc78d017AbA754bcC75F00C4B91C",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "data:image/png;base64,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",
        isSelected: false,
        isNative: false,
        id: "tax",
      },
      {
        name: "TOKENA",
        symbol: "TOKENA6",
        address: "0x1345A576B161F2478F034436aB98Ef3e5b282998",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        ],
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE0QTEwODM4MUI0MTFFREFBM0I5ODJERkIwMDA1NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE0QTEwODQ4MUI0MTFFREFBM0I5ODJERkIwMDA1NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTRBMTA4MTgxQjQxMUVEQUEzQjk4MkRGQjAwMDU2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTRBMTA4MjgxQjQxMUVEQUEzQjk4MkRGQjAwMDU2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvexNC0AABgVSURBVHja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",
        isSelected: false,
        isNative: false,
        id: "tokenA",
      },
    ],
    timeList: [
      {
        label: "1 Minute",
        convertedTime: "60",
        id: "1",
        isSelected: false,
      },
      {
        label: "10 Minute",
        convertedTime: "600",
        id: "2",
        isSelected: false,
      },
      {
        label: "1 Hour",
        convertedTime: "3600",
        id: "3",
        isSelected: false,
      },
      {
        label: "1 Day",
        convertedTime: "86400",
        id: "4",
        isSelected: false,
      },
      {
        label: "3 Days",
        convertedTime: "259200",
        id: "5",
        isSelected: false,
      },
      {
        label: "7 Days",
        convertedTime: "604800",
        id: "6",
        isSelected: false,
      },
      {
        label: "30 Days",
        convertedTime: "2592000",
        id: "7",
        isSelected: false,
      },
      {
        label: "3 Months",
        convertedTime: "7889229",
        id: "8",
        isSelected: false,
      },
      {
        label: "6 Months",
        convertedTime: "15778458",
        id: "9",
        isSelected: false,
      },
      {
        label: "1 Year",
        convertedTime: "31556926",
        id: "10",
        isSelected: false,
      },
      {
        label: "2 Year",
        convertedTime: "63113852",
        id: "11",
        isSelected: false,
      },
    ],
    userSelectedTime: {
      name: "GTH",
      symbol: "GTH",
      address: "0xc3d8c078f5EfB7f83c3998B8D964121519071c73",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
      ],
      img: "data:image/png;base64,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",
      isSelected: true,
      isNative: false,
      id: "gth",
    },
    orderExpiredDays: "7 Days",
    showLoader: false,
  },
};
const mockStore = configureStore();
export let store = mockStore(initialState);

export const tradeCardData = [
  {
    _id: "6413fcb867d20c187758cacd",
    pairAddress: "0xC1413f3780caDf86021130C22ef4D43B2EE3C177",
    amount0In: 0,
    amount1In: 10,
    amount0Out: 2.9335479595381684,
    amount1Out: 0,
    amountIn: 10,
    amountOut: 2.9335479595381684,
    blockNumber: 2683216,
    timestamp: 1679031402000,
    __v: 0,
    createdAt: "2023-03-17T05:38:00.951Z",
    updatedAt: "2023-03-17T05:38:00.951Z",
    convertedTimestamp: "11:06:42 am",
  },
  {
    _id: "640f0149a4b5cd3e98d6a9d5",
    pairAddress: "0x9F54aC426b7a3770545d1B404A1C94D6087F968E",
    amount0In: 73.77236298220225,
    amount1In: 0,
    amount0Out: 0,
    amount1Out: 18,
    amountIn: 73.77236298220225,
    amountOut: 18,
    blockNumber: 2623427,
    timestamp: 1678164660000,
    __v: 0,
    createdAt: "2023-03-13T10:56:09.406Z",
    updatedAt: "2023-03-13T10:56:09.406Z",
    convertedTimestamp: "10:21:00 am",
  },
  {
    _id: "640f0149a4b5cd3e98d6a9d6",
    pairAddress: "0x9F54aC426b7a3770545d1B404A1C94D6087F968E",
    amount0In: 10,
    amount1In: 0,
    amount0Out: 0,
    amount1Out: 1.6753006792633405,
    amountIn: 10,
    amountOut: 1.6753006792633405,
    blockNumber: 2625203,
    timestamp: 1678191341000,
    __v: 0,
    createdAt: "2023-03-13T10:56:09.406Z",
    updatedAt: "2023-03-13T10:56:09.406Z",
    convertedTimestamp: "5:45:41 pm",
  },
];