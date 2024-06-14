import axios from "axios";

const formRequest = {
  SendContactForm: async (dataFromuser: FormData) => {
    const data = await axios.post("/api/sendForm", dataFromuser);
    return data;
  },
};
export default formRequest;
