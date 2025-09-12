function ButtonGroup() {
  return (
    <div className="flex flex-col items-start px-4 py-2">
      <h3 className="text-lg leading-6 self-start font-bold text-gray-900">2. What is your Production Run Batch Size?</h3>
      <p className=" text-gray-500 text-xs self-start py-2">5 Vessels Available for this Product.</p>
      <div className="mt-6 grid grid-cols-3 xl:grid-cols-4 gap-3">
        <div>
          <button href="#" className="w-full inline-flex justify-center py-2 px-8 border border-gray-300 rounded-3xl shadow-sm bg-atgBlue text-sm font-medium text-white hover:bg-gray-50">
            1 Litre
          </button>
        </div>

        <div>
          <button href="#" className="w-full inline-flex justify-center py-2 px-8 border border-gray-300 rounded-3xl shadow-sm bg-atgBlue text-sm font-medium text-white hover:bg-gray-50">
            1 Gallon
          </button>
        </div>

        <div>
          <button href="#" className="w-full inline-flex justify-center py-2 px-8 border border-gray-300 rounded-3xl shadow-sm bg-atgBlue text-sm font-medium text-white hover:bg-gray-50">
            3 Gallon

          </button>
        </div>
        <div>
          <button href="#" className="w-full inline-flex justify-center py-2 px-8 border border-gray-300 rounded-3xl shadow-sm bg-atgBlue text-sm font-medium text-white hover:bg-gray-50">
            5 Gallon

          </button>
        </div>
        <div>
          <button href="#" className="w-full inline-flex justify-center py-2 px-8 border border-gray-300 rounded-3xl shadow-sm bg-atgBlue text-sm font-medium text-white hover:bg-gray-50">
            10 Gallon

          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
