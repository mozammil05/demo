import { render, screen } from "@testing-library/react";
import NewsCard from "../../components/common/NewsCard/NewsCard";
import { BrowserRouter as Routes } from "react-router-dom";
import React from "react";

jest.mock("", () => ({
  getNews: jest.fn(() => [
    {
      id: "https://cointelegraph.com/news/coinbase-ceo-on-its-wells-notice-sec-is-like-soccer-referees-in-a-game-of-pickleball",
      title:
        "Coinbase CEO on its Wells Notice: SEC is like soccer referees in a game of pickleball",
      url: "https://cointelegraph.com/news/coinbase-ceo-on-its-wells-notice-sec-is-like-soccer-referees-in-a-game-of-pickleball",
      date: "2023-03-23T06:17:36.000Z",
      sourceName: "Cointelegraph",
    },
    {
      id: "https://cointelegraph.com/news/cftc-s-tech-committee-gathered-in-dc-to-talk-defi-here-s-what-was-discussed",
      title:
        "CFTC’s tech committee gathered in DC to talk DeFi, here’s what was discussed",
      url: "https://cointelegraph.com/news/cftc-s-tech-committee-gathered-in-dc-to-talk-defi-here-s-what-was-discussed",
      date: "2023-03-23T06:10:09.000Z",
      sourceName: "Cointelegraph",
    },
  ]),
}));

describe("NewsCard component", () => {
  it("renders the news articles", async () => {
    render(
      <Routes>
        <NewsCard />
      </Routes>
    );
    const checkHeading = screen.getByRole("heading", { name: /news/i });
    expect(checkHeading).toBeInTheDocument();
    // expect(await screen.findByText("vddUtility and long-term profits top reasons for NFT purchases: CoinGecko study")).toBeInTheDocument();
    let dataList = await screen.findAllByTestId("news");
    // expect(dataList.length >= 0).toBeTruthy();
    expect(dataList.length).toBeGreaterThan(0);
  });
});
