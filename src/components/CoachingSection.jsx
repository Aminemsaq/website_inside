const CoachingCard = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mb-10 lg:mb-0">
      <div className="flex items-center mb-6">
        <h3 className="text-black text-2xl font-bold">Gamir Academy Course</h3>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-full">
          <p className="text-lg font-semibold mb-5">Valeurs du coaching</p>
          <ul className="list-none text-black mb-6 space-y-2">
            <li className="flex justify-between">
              <span className='text-gray-500'>Basics + Mindset</span>
              <span>500dh</span>
            </li>
            <li className="flex justify-between">
              <span className='text-gray-500'>Money + Risk management</span>
              <span>1000dh</span>
            </li>
            <li className="flex justify-between">
              <span className='text-gray-500' >Analyses fondamentals</span>
              <span >2000dh</span>
            </li>
            <li className="flex justify-between">
              <span className='text-gray-500'>Analyse technique</span>
              <span>1500dh</span>
            </li>
            
            <li className="flex justify-between">
              <span className='text-gray-500'>Secrets</span>
              <span>3500dh</span>
            </li>
            <li className="flex justify-between">
              <span className='text-gray-500'>FollowUP Sessions</span>
              <span>500dh</span>
            </li>
            <li className="flex justify-between">
              <span className='text-gray-500'>Total</span>
              <span className="line-through text-red-500">9000dh</span>
            </li>
           
            <li className="flex justify-between">
              <span className='font-bold mt-5'>Prix de coaching</span>
              <span className="text-green-500 mt-5 font-bold">2000dh</span>
            </li>
          </ul>
         
          {/* Button to register */}
          <div className="text-center">
            <a href="/website_inside/register" className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 w-full rounded-md text-sm font-semibold mt-4">
              Register Now
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const CoachingSection = () => {
  return (
    <section className="bg-slate-950 py-16" id="buy">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-4xl font-extrabold mb-6">
          Join us and change your life
        </h1>
        <h2 className="text-orange-500 text-center text-2xl mb-10">
        - Offre Spéciale - 
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
          <CoachingCard />
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
