import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState('minecraft');
 

    useEffect(() => {
        fetchCategoryData(activeTab); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const fetchCategoryData = (category) => {
        fetch(`http://localhost:5000/categories?category=${encodeURIComponent(category)}`)
          .then(res => res.json())
          .then(data => setCategories(data))
          .catch(error => {
            console.log('Error:', error);
          });
      };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        fetchCategoryData(tab);
    
      };
     
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-2xl md:text-4xl font-bold text-center py-12 italic'>Shop by category</h2>
                <img src='https://i.ibb.co/0jKTX5q/83950-jobsdale-categories.gif' className='w-20 md:w-36' alt="" />
                </div>
            <div className="flex justify-center border-b-2 border-pink-400 bg-slate-950 pt-4">
                <button
                    className={`p-2 rounded-tl-xl ${activeTab === 'minecraft' ? 'bg-pink-400 text-white rounded-t-xl' : 'text-gray-400'
                        }`}
                    onClick={() => handleTabChange('minecraft')}
                >
                    Minecraft
                </button>
                <button
                    className={`p-2 ${activeTab === 'architecture' ? 'bg-pink-400 text-white rounded-t-xl' : 'text-gray-400'
                        }`}
                    onClick={() => handleTabChange('architecture')}
                >
                    Architecture
                </button>
                <button
                    className={`p-2 rounded-tr-xl ${activeTab === 'harrypotter' ? 'bg-pink-400 text-white rounded-t-xl' : 'text-gray-400'
                        }`}
                    onClick={() => handleTabChange('harrypotter')}
                >
                    Harry Potter
                </button>
            </div>


            <div className="p-4 bg-pink-400">
                {(activeTab === 'minecraft' || activeTab === 'architecture' || activeTab === 'harrypotter') && (

                    <div className='flex justify-center gap-4 md:gap-12'>
                        {
                            categories.map(category => <SubCategory
                            key={category._id}
                            category={category}
                            ></SubCategory>)
                        }
                    </div>
                )}

            </div>
        </div>
    );
};

export default Category;