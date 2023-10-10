import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [img, setImg] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipie = {
      id: uuidv4(),
      title: title,
      cookingTime: `${cookingTime} minutes`,
      img: img,
      method: method,
    };
    console.log(recipie);
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Create New Recipie</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={title}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Ingradients :</span>
          </label>
          <div className="flex gap-5 mb-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary">Add</button>
          </div>
          <p>
            Ingradients: <span>Tuz , suv , go'sht</span>
          </p>
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Cooking Time :</span>
          </label>
          <input
            onChange={(e) => setCookingTime(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={cookingTime}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            type="url"
            placeholder="Put image url"
            className="textarea input-bordered w-full max-w-xs"
            value={img}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            type="textarea"
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
            value={method}
          />
        </div>
        <button className="btn btn-primary w-[320px] mt-5">Create</button>
      </form>
    </div>
  );
}

export default Create;
