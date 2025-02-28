import useFetchData from "../../Hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "./../../components/Doctors/Doctor_card"

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      

     

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
     { console.log(error)}

      {!error && appointments.length === 0 && (
     
        <h2 className="mt-5 text-center">You did not book any doctor yet!</h2>
      )}
    </div>
  );
};

export default MyBookings;
