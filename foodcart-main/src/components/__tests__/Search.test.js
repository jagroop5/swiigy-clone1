import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search Res list for burger text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // console.log(resCardBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn);
  // expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(resCardBeforeSearch.length);
  expect(cardsAfterSearch.length).toBe(2);
});

it("should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // console.log(resCardBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(20);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  // console.log(searchBtn);
  // expect(searchBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(resCardBeforeSearch.length);
  expect(cardsAfterSearch.length).toBe(12);
});
