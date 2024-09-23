import React from "react";
import { Link } from "react-router-dom";
export const Card = ({ products, filterdProducts }) => {
  return (
    <>
      {filterdProducts && filterdProducts.length > 0 ? (
        <>
          <div className="p-4 sm:ml-40">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg flex items-center  ">
              <div className="grid grid-cols-3 gap-4 mb-4 "></div>
              {filterdProducts.map((product, i) => (
                <div key={i}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[600px] ">
                    <Link to="">
                      <img
                        style={{
                          width: "400px",
                          height: "400px",
                          objectFit: "cover",
                        }}
                        className="rounded-t-lg"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {product.name}
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 ">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          to="/"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 0"
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                        <p className="font-bold text-indigo-500">
                          {product.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {products.map((product, i) => (
                <div key={i}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
                    <Link to="/">
                      <img
                        className="rounded-t-lg"
                        style={{
                          width: "400px",
                          height: "400px",
                          objectFit: "cover",
                        }}
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {product.name}
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 ">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          to="/"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 0"
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                        <p className="font-bold text-indigo-500">
                          {product.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
