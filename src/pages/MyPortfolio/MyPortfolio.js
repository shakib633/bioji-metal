import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="bg-base-300">
            <div>
                <h3 className="text-2xl mt-2  font-semibold text-success">Wealcome To My profile</h3>
                <div className="border-none bg-base-100 shadow-2xl mt-5 p-2 m-5"> 
                    
                    <p className='text-2xl mr-5 font-semibold'>Name : Md Shakib Ahamed</p>
                    <p  className='text-xl font-semibold'>Email :shakibshuvo633@gmail.com</p>
                    <p className='ml-10 font-semibold'>Educational Qualification: Bsc Final Year , <span>Southwest Forestry University,China</span></p>
                 <p className='ml-10 font-semibold'>Department of Computer Science And Technology</p>
                </div>

                <h3 className='text-2xl mt-3 mb-3 font-semibold'>Simple Projects sample:</h3>
                <div className="mt-5 p-5 m-5 shadow-2xl border-none"> 
                   
                
                    <a href="http://motohouse-a6b34.web.app/" target="blank" className="hover:text-warning font-bold hover:text-xl mr-5">project1</a>
                    <a href="https://memory-e097f.web.app/" target="blank" className="hover:text-warning font-bold hover:text-xl mr-5">project2</a>
                    <a href="https://laptop-house.netlify.app/Dashboard" target="blank" className="hover:text-warning hover:text-xl font-bold mr-5">project 3</a>
                    
                </div>
                <h3 className="font-bold text-warning text-2xl mt-3 mb-3 p-2 shadow-2xl border-none">Skills :</h3>
           <div className='inline grid gap-x-9 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'> 
    
                  <div className=' bg-base-100 border-none shadow-2xl p-5 m-5'> 
                    <p className='text-success font-bold mb-5'>  Industry knowledge: </p>
                    <p className='font-semibold mb-2 hover:text-warning '>Programming</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Notepad++</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Google Maps API</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Web Development</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Heroku</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Visual Studio</p>

                </div>
                <div className=' bg-base-100 border-none shadow-2xl p-5 m-5'> 
                    <h4 className='text-info font-bold mb-5'>Tool & Technology :</h4>
                    <p className='font-semibold mb-2 hover:text-warning '>HTML</p>
                    <p className='font-semibold mb-2 hover:text-warning '>HTML5</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Cascading Style sheets(Css)</p> 
                    <p className='font-semibold mb-2 hover:text-warning '>Css3</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Bootstrap</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Tailwind</p>
                    <p className='font-semibold mb-2 hover:text-warning '>React.js</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Node.js</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Express.js</p>
                    <p className='font-semibold mb-2 hover:text-warning '>MongoDB</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Firebase</p>
                    <p className='font-semibold mb-2 hover:text-warning '>GitHub</p>
                    <p className='font-semibold mb-2 hover:text-warning '>javascript</p>
                    <p className='font-semibold mb-2 hover:text-warning '>Python</p>
                </div>
</div>
            </div>
            
        </div>
    );
};

export default MyPortfolio;