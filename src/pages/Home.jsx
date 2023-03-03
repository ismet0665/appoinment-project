import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData); 
  const [appointments, setAppointments] = useState(appointmentData); 

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  console.log(appointments);
  console.log(doctors);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments} //tüm veriyi yolluyoruz. doctorlardan teget gececek direk modal a yolluyacagız.
        setAppointments={setAppointments} // set halide veri eklemek için.
        setDoctors={setDoctors} // hata vermesin diye yolladım yoksa warning hatası cıkıyor.
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
