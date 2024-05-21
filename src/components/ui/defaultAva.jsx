
const DefaultAva = (name ) => {
    const nameParts = typeof name === "string" ? name.split(" ") : [""];
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";

    return (
        <span className="flex justify-center itams-center w-24 h-24 md:w-32 md:h-32 bg-blue-300 text-white text-xl rounded-full">
      {firstNameInitial}
    </span>
    );
};
export default DefaultAva;