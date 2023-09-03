import { BtnLoadMore } from "./Button_styled"

export const LoadMore = ({ onClick }) => {
    return (
        <BtnLoadMore type="button" onClick={onClick}>
            Load More
        </BtnLoadMore>
    )
}