import { useEffect, useState } from "react";
import { BASE_URL } from "../config/baseURL";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const fetchproducts = async () => {
    try {
      const res = await axios.get(BASE_URL + "/products");
      setProducts(res.data.products);
    } catch (errors) {
      setErrors(errors.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  if (loading) {
    return <div>Loading........</div>;
  }

  if (errors) {
    return <div>{errors}</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto">
      {products.map((item, key) => (
        <ProductCard key={key} product={item} />
      ))}
    </div>
  );
};

export default Products;
