import CategoryItem from './components/category-item/category-item.component';
import './categories-directory.styles.scss';

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
