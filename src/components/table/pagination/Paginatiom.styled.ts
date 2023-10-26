import Pagination from "@mui/material/Pagination/Pagination";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)(() => ({
    "& .MuiPaginationItem-root": {
        color: "#f5f5f5",
        padding: "5px",
        fontSize: "16px"
    }
}))

export const Container = styled.div`
  display: flex;
  justify-content:center;
  margin: 20px;
`