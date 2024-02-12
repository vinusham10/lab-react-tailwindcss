export default function App(){
  return(
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Kalvium</span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
            About Us
          </a>
          <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
           Contacts
          </a>
          <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white">
            Courses
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">
            Login</a>
        </div>
      </div>
    </nav>

    <div className="container mt-5 mx-auto px-2">
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
       Button One
      </button>

      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
        <strong className="font-bold">Alert!</strong>
        <span className="block sm:inline"> This is awesome!</span>
      </div>
    </div>
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
     
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
      
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900">Kavlium Store</h4>
        <p className="text-base text-gray-600">You have a new course!</p>
      </div>
    </div>

    <footer className="bg-gray-200 text-center lg:text-left">
      <div className="text-gray-700 text-center p-4">
        © 2021 Copyright:
        <a className="text-gray-800" href="https://kalvium.com/">Kalvium</a>
     </div>
    </footer>
  </div>
  )
}