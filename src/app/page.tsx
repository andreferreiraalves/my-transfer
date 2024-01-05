import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="bg-white rounded-xl flex flex-col items-center drop-shadow-2xl h-screen w-full md:h-[620px] md:w-[450px] ">
        <h1 className="mt-8 text-xl font-medium text-blue-500">UPLOAD FILES</h1>
        <span className="text-sm mt-1 text-blue-400">
          Upload documents you want to share
        </span>

        <span className="text-sm mt-1 mb-11 text-blue-400">with your tean</span>

        <div className="flex flex-col items-center border-dashed border-2 border-primary rounded-xl w-[368px] h-[200px] bg-secondary">
          <i className="fa-solid fa-cloud-arrow-up text-4xl my-3 text-gray-400"></i>

          <p className="text-blue-400">Drag & Drop your files here</p>
          <p className="text-blue-400 my-1">OR</p>

          <input type="file" id="myFile" name="filename" className="btn-md" />

          {/* <button className="btn btn-primary btn-md text-white bg-blue-600 px-5 shadow-xl" type="file">
            Browse Files
          </button> */}
        </div>

        <div className="w-full h-[297px] p-10">
          <span className="text-blue-400">Uploaded files</span>
          <ul className="mt-3">
            <Card state="uploading" />
            <Card state="done" />
          </ul>
        </div>
      </div>
    </main>
  );
}
