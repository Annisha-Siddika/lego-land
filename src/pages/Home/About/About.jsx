
const About = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 text-pink-500 text-center pt-14">About Us</h2>
        <div className="bg-yellow-200 m-16 md:m-20 p-4 rounded-3xl border-8 border-double border-pink-400 outline-8 outline-double outline-purple-900 md:flex gap-4 items-center">
      
      <div className="w-1/2">
        <img
          src="https://i.ibb.co/DL5hXRG/91238-about-us.gif" 
          alt="About Us"
          className="w-full rounded-lg"
        />
      </div>
      <p className="text-lg mt-4 text-gray-700 w-1/2">
      LEGO is a Danish toy company founded in 1932 by Ole Kirk Kristiansen. The name LEGO is derived from the Danish words leg godt, which mean play well. LEGO is widely recognized for its iconic interlocking plastic bricks that offer endless possibilities for creative play and building.

With a rich history spanning decades, LEGO has become a global phenomenon, captivating the imaginations of children and adults alike. The LEGO System of Play encourages creativity, problem-solving, and learning through hands-on building experiences.

Today, LEGO offers a wide range of products, including themed sets based on popular franchises like Star Wars, Harry Potter, Marvel, and more. The company also provides educational resources and initiatives to promote STEAM (Science, Technology, Engineering, Arts, and Mathematics) learning.

At LEGO, we strive to inspire and empower builders of all ages to unleash their creativity, explore their imaginations, and build extraordinary things brick by brick. Join us in the world of endless possibilities and let your creativity take flight!
</p>
    </div>
    </div>
  );
};

export default About;
