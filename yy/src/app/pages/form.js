import React,{useState} from 'react';
import '../styles/form.css';

export default function Form() {
    
    const [formData, setFormData] = useState({
        foodName: "",
        foodRating: "",
        foodImageUrl:"",
        restaurantName: "",
        restaurantLogo: "",
        restaurantStatus: ""
       
    });
   
    const handleChange = (e) => {
        const { name, value, type, checked, options } = e.target;
            setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
};

return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="foodName" className={styles.label}>
           Food Name:
        </label>
        <input
            type="text"
            id="foodName"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            className={styles.input} />

        <label htmlFor="foodRating" className={styles.label}>
            Food Rating:
        </label>
        <input
            type="text"
            id="foodRating"
            name="foodRating"
            value={formData.foodRating}
            onChange={handleChange}
            className={styles.input} />

        <label htmlFor="foodImrestaurantLogo" className={styles.label}>
            Food Image URL:
        </label>
        <input
            type="text",
            id="restaurantLogo"
            name="restaurantLogo"
            value={formData.restaurantLogo}
            onChange={handleChange}
            className={styles.input} />

        <label htmlFor="restaurantName" className={styles.label}>
            RestaurantName:
        </label>
        <textarea
            id="restaurantName"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            className={styles.input} />

        <label htmlFor="restaurantLogo" className={styles.label}>
            restaurantLogo:
        </label>
        <input
            type="number"
            id="restaurantLogo"
            name="restaurantLogo"
            value={formData.restaurantLogo}
            onChange={handleChange}
            className={styles.input} />

        <label className={styles.label}>restaurantStatus:</label>
        
        </select>

        <button type="submit" className={styles.button}>
            Enter food
        </button>
        <button type="reset" className={styles.button}>
            Cancel
        </button>
    </form>
);
};

export default Form;
