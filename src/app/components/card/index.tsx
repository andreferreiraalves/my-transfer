interface CardProps {
  state: "uploading" | "canceled" | "done";
}

function Card({ state }: CardProps) {
  return (
    <>
      <li className="w-full flex items-center justify-between my-3 p-4 rounded-md bg-secondary hover:shadow-xl hover:bg-blue-100">
        {state === "uploading" && (
          <i className="fa-solid fa-file text-4xl text-primary"></i>
        )}
        {state === "done" && (
          <i className="fa-solid fa-file text-4xl text-success"></i>
        )}
        {state === "canceled" && (
          <i className="fa-solid fa-file text-4xl text-primary"></i>
        )}

        <div>
          <div className="flex justify-between">
            <p className="text-blue-500">filexxxx.pdf</p>
            <span className="text-blue-500">35%</span>
          </div>

          {state === "uploading" && (
            <progress
              className="progress progress-primary w-56"
              value="35"
              max="100"
            ></progress>
          )}
          {state === "done" && (
            <progress
              className="progress progress-success w-56"
              value="35"
              max="100"
            ></progress>
          )}
          {state === "canceled" && (
            <progress
              className="progress progress-primary w-56"
              value="35"
              max="100"
            ></progress>
          )}
        </div>
        <div className="mb-3">
          {state === "uploading" && (
            <i className="fa-regular fa-circle-xmark text-2xl text-red-400"></i>
          )}
          {state === "done" && (
            <i className="fa-solid fa-check text-2xl text-success"></i>
          )}
          {state === "canceled" && (
            <i className="fa-regular fa-check text-2xl text-orange-500"></i>
          )}
        </div>
      </li>
    </>
  );
}

export default Card;