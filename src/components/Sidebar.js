import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByCategory } from "../services/productService";
import { setProductsReducer } from "../store/product/productSlice";

export const Sidebar = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const filterProducts = async () => {
      try {
        const filterdProducts = await filterProductsByCategory(category);
        dispatch(setProductsReducer(filterdProducts));
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    if (category.length > 1) {
      filterProducts();
    } else {
      dispatch(setProductsReducer([]));
    }
  }, [category, dispatch]);
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-20 left-0  w-64 h-full transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <p className="flex items-center p-2 text-gray-900 rounded-lg  group">
                <span className="ms-3">Filters</span>
              </p>
            </li>
            <li>
              <p className="flex items-center p-2 ml-4 text-gray-500 rounded-lg  group">
                <input
                  type="checkbox"
                  className="ml-3"
                  value={"Clothes"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span className="ms-3">Clothes</span>
              </p>
            </li>
            <li>
              <p className="flex items-center p-2 ml-4 text-gray-500 rounded-lg  group">
                <input
                  type="checkbox"
                  className="ml-3"
                  value={"Electronics"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span className="ms-3">Electronics</span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
