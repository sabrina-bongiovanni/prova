import './category-item.style.scss';

const CategoryItem = ({category}) => {
  const = {imageUrl, title};

  return (
    <div className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Show Now</p>
          </div>
        </div>
  )

};

export default CategoryItem;
