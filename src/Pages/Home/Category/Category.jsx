import React, { useEffect, useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const [categoryName, setCategoryName] = useState("Lego City");

  useEffect(() => {
    fetch(`http://localhost:5000/categoryFiltered?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [categoryName]);

  const handleCategory = (category) => {
    setCategoryName(category);
  };

  return (
    <div className="my-16 px-7 lg:px-16">
      <div className="space-y-6 mb-16">
        <h2 className="text-5xl font-bold text-center">
          Shop by <span className="text-[#F79837]">Category</span>
        </h2>
        <p className="text-center text-xl">
          The customized category base shop is for you to ensure good user
          experience.
        </p>
      </div>
      <Tabs className="text-center">
        <TabList>
          {/* Tab 01 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego City")}
              className="text-lg font-medium"
            >
              Lego City
            </h5>
          </Tab>
          {/* Tab 02 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Star War")}
              className="text-lg font-medium"
            >
              Lego Star War
            </h5>
          </Tab>
          {/* Tab 03 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Architechture")}
              className="text-lg font-medium"
            >
              Lego Architechture
            </h5>
          </Tab>
          {/* Tab 04 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Car")}
              className="text-lg font-medium"
            >
              Lego Car
            </h5>
          </Tab>
        </TabList>

        {/* Tab 01 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {allToys.map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        {/* Tab 02 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {allToys.map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        {/* Tab 03 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {allToys.map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        {/* Tab 04 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {allToys.map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
