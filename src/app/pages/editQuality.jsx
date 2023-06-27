import React, { useState, useEffect } from "react";
import EditForm from "../components/ui/editForm";
import { useParams } from "react-router";
import axios from "axios";

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;

  const handleSubmit = (data) => {
    axios
      .put(qualityEndPoint, data)
      .then((res) => console.log(res.data.content));
  };

  useEffect(async () => {
    const { data } = await axios.get(qualityEndPoint);
    setQuality(data.content);
  }, []);

  return (
    <>
      <h1>Edit Quality Page</h1>
      {quality !== null ? (
        <EditForm data={quality} onSubmit={handleSubmit} />
      ) : (
        "Loading ..."
      )}
    </>
  );
};

export default EditQualityPage;
