import React, { useState , useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Modal = ({ isOpen, onClose }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phoneNumber: '',
    location: '',
  });

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '1:00 PM - 2:00 PM',
    '3:00 PM - 4:00 PM',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleConfirm = () => {
    setIsFormSubmitted(true);
  };

  const back=()=>{
    setIsFormSubmitted(false)
    setSelectedDate(null)
    setSelectedTimeSlot(null);
  }
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
  };
  const handdleBook=()=>{
    onClose();
    alert("booked")
  }
  useEffect(() => {
    if (!isOpen) {
      setIsFormSubmitted(false);
      setSelectedDate(null);
      setSelectedTimeSlot(null);  
    }
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'backdrop-blur-md' : 'hidden'}`}>
      <div className="modal bg-gray-100 p-6 rounded-lg">
        <div className="modal-content ">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="modal-body">
            {!isFormSubmitted ? (
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name:</label>
                  <input type="text" id="name" name="name" className="form-input" onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" className="form-input" onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-gray-700">Location:</label>
                  <input type="text" id="location" name="location" className="form-input" onChange={handleInputChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                  Confirm
                </button>
              </form>
            ) : (
              <div>
                <Calendar onChange={handleDateSelect} value={selectedDate} />
                <button onClick={back}>back</button>
                {selectedDate && (
                  <div className="mt-4">
                    <p>Available time slots for {selectedDate.toLocaleDateString()}:</p>
                    <ul>
                      {timeSlots.map((slot, index) => (
                        <li key={index}>
                        <button
                          onClick={() => handleTimeSlotClick(slot)}
                          className={`btn ${selectedTimeSlot === slot ? "btn-primary" : ''} mt-1`}
                        >
                          {slot}
                        </button>
                      </li>
                      ))}
                    </ul>
                    <button className="btn btn-primary mt-4" onClick={handdleBook}>
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
