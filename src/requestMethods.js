import axios from "axios";

const BASE_URL = "http://localhost5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODNiNGI4NzQ5ZGI3MGZlNjI0Mzg2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg3MTcyMSwiZXhwIjoxNjUzMTMwOTIxfQ.YGtbaLJnP14LO-l5T_HJVI9kkR80A4aTQVwDcH3mWVI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
