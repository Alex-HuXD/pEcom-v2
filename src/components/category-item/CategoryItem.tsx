import './style.scss'

export interface Iprops {
    id: number
    imageUrl: string
    title: string
}

const CategoryItem: React.FC<Iprops> = ({ imageUrl, title }) => {
    return (
        <div className='category-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem
