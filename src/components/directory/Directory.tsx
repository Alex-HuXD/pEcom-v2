import CategoryItem, { Iprops } from '../category-item/CategoryItem'
import './style.scss'

interface DirectoryProps {
    categories: Iprops[]
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
    
    return (
        <div className='directory-container'>
            {categories.map(category => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </div>
    )
}

export default Directory
