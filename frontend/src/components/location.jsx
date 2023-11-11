export const Location = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto ">
        <select
          id="countries"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full px-4 py-2"
        >
          <option selected value="">Choose any city</option>
          <option value="Indore">Indore</option>
          <option value="Bhopal">Bhopal</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>

        </select>
      </div>
    </div>
  );
};
