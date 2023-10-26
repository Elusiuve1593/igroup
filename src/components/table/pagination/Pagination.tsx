import { Container, StyledPagination } from './Paginatiom.styled';

type PaginationType = {
    page: number
    setPage: (page: number) => void
}

export const PaginationPage = ({ page, setPage }: PaginationType) => {
    const handlePageChange = (_: any, newPage: number) => {
        setPage(newPage)
    }
    return (
        <Container>
            <StyledPagination
                count={10}
                page={page}
                onChange={handlePageChange}
                
            />
        </Container>
    )
}