import styled from "@emotion/styled";
import { Colors } from "./variables";

export const BoxContainer = styled.div`
  padding: 20px;
  border: thick double ${Colors.main};
  margin: 10px 0;
  font-size: 0;

  label {
    font-size: 1rem;
  }

  select {
    margin: 10px;
    margin-left: 2px;
  }

  select:last-child {
    margin-right: 0;
  }
`;
