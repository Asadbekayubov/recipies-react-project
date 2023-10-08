import React from "react";

function Create() {
  return (
    <div>
      <h1 className="text-3xl text-center">Create New Recipie</h1>
      <form className="flex flex-col items-center">
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
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
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            type="url"
            placeholder="Put image url"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            type="textarea"
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary w-[320px] mt-5">Create</button>
      </form>
    </div>
  );
}

export default Create;
