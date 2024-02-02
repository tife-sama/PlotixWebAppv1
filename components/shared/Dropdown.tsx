import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { Input } from "../ui/input";

// Import any additional dependencies as needed

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const categoryOptions = [
  { value: 'comics', label: 'Comics' },
  { value: 'journalism', label: 'Journalism' },
  { value: 'manga', label: 'Manga' },
  { value: 'games', label: 'Games' },
  { value: 'film', label: 'Film' },
  { value: 'tv', label: 'TV' },
  // Add more categories as needed
];

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    // Implement your createCategory logic here
    // ...

    // Example: using a function createCategory
    // createCategory({
    //   categoryName: newCategory.trim()
    // })
    //   .then((category) => {
    //     setCategories((prevState) => [...prevState, category]);
    //   });
  };

  useEffect(() => {
    const getCategories = async () => {
      // Implement your getAllCategories logic here
      // ...

      // Example: using a function getAllCategories
      // const categoryList = await getAllCategories();
      // categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <Select
      isMulti
      onChange={onChangeHandler}
      defaultValue={value}
      options={categoryOptions}
      placeholder="Category"
    />
  );
};

export default Dropdown;
