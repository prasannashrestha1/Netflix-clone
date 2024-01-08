import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.targe.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select``;
